import { Building2, Sparkles, Smartphone, Gamepad2, BookOpen, LucideIcon } from "lucide-react";

export interface PublishedWork {
  icon: LucideIcon;
  name: string;
  tagline: string;
  platform: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
}

export const publishedWork: PublishedWork[] = [
  {
    icon: Building2,
    name: "Theoretic Hotels",
    tagline: "Hospitality SaaS Platform",
    platform: "Web • Client Project",
    description: "Multi-tenant PMS and CRM for hotel managers plus a direct-booking storefront. Covers reservations, room inventory, restaurant POS, housekeeping, invoicing and Razorpay payments.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Razorpay"],
    links: [{ label: "Live Site", url: "http://theoretichotels.com/" }]
  },
  {
    icon: Sparkles,
    name: "Nella",
    tagline: "Beauty Intelligence App",
    platform: "Android • iOS",
    description: "Beauty treatment tracker for MyNella Ltd (UK). Treatment tracking, AM/PM skincare routines, reminders and spend insights.",
    stack: ["Flutter", "Dart", "REST APIs"],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mynella.nella" },
      { label: "App Store", url: "https://apps.apple.com/in/app/nella-beauty-intelligence/id6781161758" }
    ]
  },
  {
    icon: Smartphone,
    name: "mivadodara",
    tagline: "Teacher Attendance App",
    platform: "Android",
    description: "Attendance app with OTP login and fingerprint check-in, synced to an administrator dashboard.",
    stack: ["Flutter", "React Native", "REST APIs"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=org.mivadodara.app" }]
  },
  {
    icon: Gamepad2,
    name: "Blame Game",
    tagline: "Party Card Game",
    platform: "Android",
    description: "Offline party card game with 25+ question packs unlocked through in-app purchases.",
    stack: ["Flutter", "React Native", "In-App Purchases"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.prabor.blamegame" }]
  },
  {
    icon: BookOpen,
    name: "BASU Classes",
    tagline: "Student & Teacher Academic App",
    platform: "Android • Contributor",
    description: "Contributed to the initial build of the student and teacher academic application.",
    stack: ["Mobile", "REST APIs"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.basuclasses" }]
  }
];
