
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Reject oversized requests
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 20_000) {
      return NextResponse.json(
        { error: "Request too large" },
        { status: 413 }
      );
    }

    // Read submitted form data
    const data = await request.json();

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const service = String(data.service || "").trim();
    const details = String(data.details || "").trim();

    // Honeypot spam protection
    if (data.website) {
      return NextResponse.json({
        ok: true,
        success: true,
      });
    }

    // Validate form fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !name ||
      name.length > 150 ||
      !emailRegex.test(email) ||
      email.length > 254 ||
      !service ||
      service.length > 150 ||
      !details ||
      details.length > 5000
    ) {
      return NextResponse.json(
        {
          ok: false,
          success: false,
          error: "Invalid form fields",
        },
        { status: 400 }
      );
    }

    // Google Apps Script configuration
    const endpoint =
      process.env.GOOGLE_SCRIPT_WEB_APP_URL ||
      process.env.GOOGLE_APPS_SCRIPT_URL;

    const secret = process.env.CONTACT_FORM_SECRET;

    if (!endpoint || !secret) {
      console.error(
        "Missing Google Apps Script environment variables"
      );

      return NextResponse.json(
        {
          ok: false,
          success: false,
          error: "Contact form is not configured",
        },
        { status: 500 }
      );
    }

    // Send form submission to Google Apps Script
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        service,
        details,
        secret,
      }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!upstream.ok) {
      throw new Error(
        `Google Apps Script HTTP ${upstream.status}`
      );
    }

    // Read Google Apps Script response
    const responseText = await upstream.text();

    let result: {
      success?: boolean;
      ok?: boolean;
      error?: string;
    };

    try {
      result = JSON.parse(responseText);
    } catch {
      throw new Error("Invalid Google Apps Script response");
    }

    // Support both response formats
    if (result.success !== true && result.ok !== true) {
      throw new Error(
        result.error || "Google Apps Script rejected submission"
      );
    }

    // Successful submission
    return NextResponse.json({
      ok: true,
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: "Could not send message. Please try again.",
      },
      { status: 502 }
    );
  }
}
