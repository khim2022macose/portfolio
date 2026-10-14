export const workCategories = {
  "social-media": {
    eyebrow:
      "Social Media Archive",
    title:
      "Social Media Management & Content",
    description:
      "Selected work involving content planning, publishing, scheduling, caption preparation, social graphics, and brand consistency across digital platforms.",
    category:
      "Social Media Management",
    projects: [
      {
        title:
          "Social Media Content Management",
        type:
          "Social Media",
        description:
          "Planning, organizing, scheduling, and publishing social media content while supporting a consistent brand presence.",
        image: "",
      },
      {
        title:
          "Content Calendar Planning",
        type:
          "Content Planning",
        description:
          "Organizing upcoming posts, campaign topics, captions, publishing schedules, and content priorities.",
        image: "",
      },
      {
        title:
          "Social Publishing Support",
        type:
          "Marketing Operations",
        description:
          "Preparing and publishing social content across platforms while helping maintain scheduling and brand consistency.",
        image: "",
      },
    ],
  },

  "graphic-design": {
    eyebrow:
      "Graphic Design Archive",
    title:
      "Graphic Design & Content Creation",
    description:
      "Selected creative work involving social graphics, branded templates, promotional assets, carousel posts, educational content, and marketing visuals.",
    category:
      "Graphic Design",
    projects: [
      {
        title:
          "Social Media Graphics",
        type:
          "Graphic Design",
        description:
          "Branded graphics created for social media posts, campaigns, promotions, and ongoing digital content.",
        image: "",
      },
      {
        title:
          "Carousel & Educational Content",
        type:
          "Content Design",
        description:
          "Multi-slide social content designed to communicate information in a clear and visually consistent format.",
        image: "",
      },
      {
        title:
          "Promotional Marketing Materials",
        type:
          "Marketing Design",
        description:
          "Digital promotional materials created to support services, offers, programs, and other marketing initiatives.",
        image: "",
      },
    ],
  },

  "video-editing": {
    eyebrow:
      "Video Editing Archive",
    title:
      "Short-Form Video Editing",
    description:
      "Selected video work prepared for Reels, TikTok, and other vertical social platforms.",
    category:
      "Video Editing",
    projects: [
      {
        title:
          "Reels & TikTok Editing",
        type:
          "Short-Form Video",
        description:
          "Vertical video editing prepared for short-form social media platforms.",
        image: "",
      },
      {
        title:
          "Captioned Social Videos",
        type:
          "Video Content",
        description:
          "Short-form videos prepared with captions, selected on-screen text, and platform-ready formatting.",
        image: "",
      },
      {
        title:
          "Social Video Preparation",
        type:
          "Content Production",
        description:
          "Organizing video scripts, reviewing edits, formatting videos, and preparing content for publishing.",
        image: "",
      },
    ],
  },

  gohighlevel: {
    eyebrow:
      "GoHighLevel Archive",
    title:
      "GoHighLevel Marketing Operations",
    description:
      "Selected work involving funnels, landing pages, contacts, workflows, automations, campaigns, and lead follow-up support.",
    category:
      "GoHighLevel",
    projects: [
      {
        title:
          "Funnel & Landing Page Updates",
        type:
          "GoHighLevel",
        description:
          "Updating page content, layouts, calls to action, forms, and promotional information inside GoHighLevel.",
        image: "",
      },
      {
        title:
          "Workflow & Automation Support",
        type:
          "Marketing Automation",
        description:
          "Supporting workflows and automation used for marketing activity, follow-up, and lead organization.",
        image: "",
      },
      {
        title:
          "Contacts, Tags & Lead Follow-Up",
        type:
          "CRM Operations",
        description:
          "Managing contacts, tags, lead organization, and follow-up activity inside the CRM.",
        image: "",
      },
    ],
  },

  "email-marketing": {
    eyebrow:
      "Email Marketing Archive",
    title:
      "Email Marketing & Newsletter Support",
    description:
      "Selected work involving newsletters, campaign formatting, email automation support, follow-up organization, and lead nurturing.",
    category:
      "Email Marketing",
    projects: [
      {
        title:
          "Newsletter Preparation",
        type:
          "Newsletter",
        description:
          "Preparing newsletter content and formatting for digital marketing communication.",
        image: "",
      },
      {
        title:
          "Email Campaign Formatting",
        type:
          "Email Marketing",
        description:
          "Formatting campaign messaging, calls to action, promotional content, and supporting campaign delivery.",
        image: "",
      },
      {
        title:
          "Lead Nurture & Follow-Up Support",
        type:
          "Marketing Operations",
        description:
          "Supporting email follow-up and automation designed to keep leads and contacts organized.",
        image: "",
      },
    ],
  },

  "virtual-assistance": {
    eyebrow:
      "Virtual Assistance Archive",
    title:
      "Virtual Assistance & Executive Support",
    description:
      "Selected operational work involving calendars, scheduling, communication, task coordination, documents, presentations, and day-to-day business support.",
    category:
      "Virtual Assistance",
    projects: [
      {
        title:
          "Calendar & Scheduling Support",
        type:
          "Scheduling",
        description:
          "Managing meetings, schedules, calendar organization, and appointment coordination.",
        image: "",
      },
      {
        title:
          "Client Communication & Follow-Up",
        type:
          "Administrative Support",
        description:
          "Supporting client communication, follow-up activity, and ongoing business coordination.",
        image: "",
      },
      {
        title:
          "Documents & Presentation Support",
        type:
          "Executive Support",
        description:
          "Preparing scripts, documents, presentations, and organized materials used for business and marketing activity.",
        image: "",
      },
    ],
  },
} as const;

export type WorkSlug =
  keyof typeof workCategories;