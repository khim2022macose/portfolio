import type { LucideIcon } from "lucide-react";

import {
  BriefcaseBusiness,
  CalendarDays,
  Mail,
  Megaphone,
  Monitor,
  Palette,
  Search,
  Share2,
  Video,
  Workflow,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  tools: string[];
  icon: LucideIcon;
  href: string;
  deliverables: string[];
};

export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  platform: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tags: string[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Social Media Management",
    shortTitle: "Social Media",
    eyebrow: "Content / Publishing",
    description:
      "Planning, organizing, scheduling, and publishing social content while maintaining consistent brand communication across digital platforms.",
    tools: [
      "Canva",
      "CapCut",
      "Metricool",
      "GoHighLevel",
    ],
    icon: Share2,
    href: "/work/social-media",
    deliverables: [
      "Content calendar planning",
      "Post scheduling and publishing",
      "Caption and CTA preparation",
      "Social content organization",
      "Brand consistency support",
    ],
  },
  {
    number: "02",
    title: "Graphic Design & Content Creation",
    shortTitle: "Graphic Design",
    eyebrow: "Creative / Visual",
    description:
      "Digital content for social media, promotions, campaigns, educational posts, services, and marketing communication.",
    tools: ["Canva"],
    icon: Palette,
    href: "/work/graphic-design",
    deliverables: [
      "Social media graphics",
      "Carousel content",
      "Branded templates",
      "Promotional materials",
      "Educational content",
    ],
  },
  {
    number: "03",
    title: "Short-Form Video Editing",
    shortTitle: "Video Editing",
    eyebrow: "Video / Social",
    description:
      "Vertical content preparation for Reels, TikTok, and social channels using captions, text overlays, pacing, and platform-ready formatting.",
    tools: ["CapCut"],
    icon: Video,
    href: "/work/video-editing",
    deliverables: [
      "Reels and TikTok editing",
      "Text overlays",
      "Caption placement",
      "Vertical formatting",
      "Social-ready exports",
    ],
  },
  {
    number: "04",
    title: "GoHighLevel Marketing Operations",
    shortTitle: "GoHighLevel",
    eyebrow: "CRM / Automation",
    description:
      "Supporting funnels, workflows, contacts, tags, campaigns, forms, scheduling, and lead follow-up inside GoHighLevel.",
    tools: ["GoHighLevel"],
    icon: Workflow,
    href: "/work/gohighlevel",
    deliverables: [
      "Funnels and landing pages",
      "Workflow setup",
      "Contacts and tags",
      "Campaign support",
      "Lead follow-up systems",
    ],
  },
  {
    number: "05",
    title: "Email Marketing & Newsletter Support",
    shortTitle: "Email Marketing",
    eyebrow: "Email / Campaign",
    description:
      "Preparing, formatting, organizing, and supporting newsletters, campaigns, follow-ups, and nurture communication.",
    tools: [
      "GoHighLevel",
      "Mailchimp",
      "Klaviyo",
    ],
    icon: Mail,
    href: "/work/email-marketing",
    deliverables: [
      "Newsletter formatting",
      "Campaign preparation",
      "Follow-up organization",
      "Lead nurture support",
      "Promotional email content",
    ],
  },
  {
    number: "06",
    title: "Virtual Assistance & Executive Support",
    shortTitle: "Digital Operations",
    eyebrow: "Operations / Support",
    description:
      "Organized support for calendars, communication, meetings, documents, coordination, and day-to-day digital operations.",
    tools: [
      "Outlook",
      "Calendly",
      "Canva",
    ],
    icon: BriefcaseBusiness,
    href: "/work/virtual-assistance",
    deliverables: [
      "Calendar management",
      "Meeting coordination",
      "Client communication",
      "Task support",
      "Documents and presentations",
    ],
  },
  {
    number: "07",
    title: "Websites, Landing Pages & Funnels",
    shortTitle: "Web & Funnels",
    eyebrow: "Web / Conversion",
    description:
      "Supporting website content, landing pages, funnels, lead forms, calls to action, and promotional page improvements.",
    tools: [
      "GoHighLevel",
      "WordPress",
      "ClickFunnels",
      "Shopify",
    ],
    icon: Monitor,
    href: "/portfolio",
    deliverables: [
      "Landing page updates",
      "Marketing funnels",
      "Lead forms",
      "CTA implementation",
      "Website content updates",
    ],
  },
  {
    number: "08",
    title: "Digital Marketing & Lead Generation",
    shortTitle: "Lead Generation",
    eyebrow: "Campaign / Growth",
    description:
      "Campaign support across promotional content, lead follow-up, nurturing, coordination, and consistent digital execution.",
    tools: [
      "Content Marketing",
      "CRM",
      "Campaign Coordination",
    ],
    icon: Megaphone,
    href: "/portfolio",
    deliverables: [
      "Campaign coordination",
      "Lead follow-up support",
      "Promotional content",
      "Marketing materials",
      "Brand consistency",
    ],
  },
];

export const portfolioProjects: PortfolioItem[] = [
  {
    id: 1,
    title: "Social Media Content System",
    category: "Social Media",
    platform: "Canva",
    description:
      "Content planning, branded visual production, publishing, scheduling, and consistent digital presentation.",
    href: "/work/social-media",
    icon: Share2,
    tags: [
      "Content Planning",
      "Social",
      "Canva",
    ],
  },
  {
    id: 2,
    title: "Content Scheduling Workflow",
    category: "Social Media",
    platform: "Metricool",
    description:
      "A structured workflow for organizing and scheduling social media content across publishing cycles.",
    href: "/work/social-media",
    icon: Share2,
    tags: [
      "Scheduling",
      "Publishing",
      "Workflow",
    ],
  },
  {
    id: 3,
    title: "Branded Marketing Graphics",
    category: "Graphic Design",
    platform: "Canva",
    description:
      "Digital graphics, promotional assets, educational content, and branded marketing materials.",
    href: "/work/graphic-design",
    icon: Palette,
    tags: [
      "Design",
      "Branding",
      "Creative",
    ],
  },
  {
    id: 4,
    title: "Social Carousel System",
    category: "Graphic Design",
    platform: "Canva",
    description:
      "Structured carousel content for educational, promotional, and engagement-focused marketing.",
    href: "/work/graphic-design",
    icon: Palette,
    tags: [
      "Carousel",
      "Social",
      "Content",
    ],
  },
  {
    id: 5,
    title: "Short-Form Video Content",
    category: "Video Editing",
    platform: "CapCut",
    description:
      "Vertical social videos with captions, text overlays, pacing, and social-platform formatting.",
    href: "/work/video-editing",
    icon: Video,
    tags: [
      "Reels",
      "Video",
      "CapCut",
    ],
  },
  {
    id: 6,
    title: "GoHighLevel Funnel System",
    category: "GoHighLevel",
    platform: "GoHighLevel",
    description:
      "Landing pages, lead forms, CTAs, funnels, and structured lead-generation support.",
    href: "/work/gohighlevel",
    icon: Workflow,
    tags: [
      "Funnels",
      "GHL",
      "Lead Generation",
    ],
  },
  {
    id: 7,
    title: "CRM Workflow Automation",
    category: "GoHighLevel",
    platform: "GoHighLevel",
    description:
      "Workflow organization across contacts, tags, follow-up, campaigns, and CRM processes.",
    href: "/work/gohighlevel",
    icon: Workflow,
    tags: [
      "CRM",
      "Automation",
      "Workflow",
    ],
  },
  {
    id: 8,
    title: "Email Campaign Support",
    category: "Email Marketing",
    platform: "GoHighLevel",
    description:
      "Campaign preparation, email formatting, follow-up organization, and digital communication support.",
    href: "/work/email-marketing",
    icon: Mail,
    tags: [
      "Email",
      "Campaign",
      "Follow-Up",
    ],
  },
  {
    id: 9,
    title: "Newsletter Support",
    category: "Email Marketing",
    platform: "Mailchimp",
    description:
      "Branded newsletter preparation and campaign formatting for clear digital communication.",
    href: "/work/email-marketing",
    icon: Mail,
    tags: [
      "Newsletter",
      "Mailchimp",
      "Marketing",
    ],
  },
  {
    id: 10,
    title: "Landing Page Support",
    category: "Websites & Funnels",
    platform: "WordPress",
    description:
      "Website content, landing-page layouts, lead forms, CTA support, and marketing-focused updates.",
    href: "/portfolio",
    icon: Monitor,
    tags: [
      "WordPress",
      "Landing Page",
      "Web",
    ],
  },
  {
    id: 11,
    title: "Digital Operations Workflow",
    category: "Digital Operations",
    platform: "Outlook",
    description:
      "Scheduling, communication, documentation, coordination, and digital business support.",
    href: "/work/virtual-assistance",
    icon: BriefcaseBusiness,
    tags: [
      "Operations",
      "Scheduling",
      "Support",
    ],
  },
  {
    id: 12,
    title: "Scheduling & Coordination",
    category: "Digital Operations",
    platform: "Calendly",
    description:
      "Meeting scheduling, calendar coordination, task organization, and operational support.",
    href: "/work/virtual-assistance",
    icon: CalendarDays,
    tags: [
      "Calendly",
      "Scheduling",
      "Coordination",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the goal, audience, requirements, and priorities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Structure the content, workflow, timeline, and deliverables.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Produce the creative, content, messaging, or campaign assets.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Implement pages, CRM workflows, campaigns, and systems.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Review",
    description:
      "Check consistency, functionality, messaging, and details.",
    icon: Search,
  },
  {
    number: "06",
    title: "Deliver",
    description:
      "Prepare the completed work for launch, handoff, or publishing.",
    icon: BriefcaseBusiness,
  },
];