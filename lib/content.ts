export type CoachingPoint = {
  label: string;
  text: string;
};

export type PriceCell = {
  amount: string;
  cap: string;
};

export type Service = {
  id: string;
  title: string;
  paragraphs: string[];
  points: CoachingPoint[];
  pricing:
    | { kind: "grid"; cells: PriceCell[] }
    | { kind: "single"; amount: string; cap: string; note?: string }
    | { kind: "contact"; amount: string };
  cta: {
    label: string;
    href: string;
  };
};

export const SITE = {
  title: "Prusik — Training.",
  description:
    "Prusik — training from Leipers Fork, TN. Guiding days, personal coaching, on-route/project training days, falling and commitment clinics, and corporate and group programs.",
  wordmark: "Prusik",
  subtitle: "Training",
  email: "j.morecowbell@gmail.com",
};

export const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
] as const;

export const SERVICES: Service[] = [
  {
    id: "guiding-day",
    title: "Guiding Day",
    paragraphs: [
      "Your first day on rock. No experience or gear needed. I bring the kit, we climb, and we go at your pace.",
    ],
    points: [
      {
        label: "Falling",
        text: "Learn falling as a skill and understand risk management.",
      },
      {
        label: "The day",
        text: "You leave knowing how a day outside actually works. Nothing is assumed.",
      },
    ],
    pricing: {
      kind: "grid",
      cells: [
        { amount: "$250", cap: "Half-Day (≤3hrs) · 1 climber" },
        { amount: "$350", cap: "Half-Day (≤3hrs) · 2 climbers" },
        { amount: "$450", cap: "Full Day (≤6hrs) · 1 climber" },
        { amount: "$600", cap: "Full Day (≤6hrs) · 2 climbers" },
      ],
    },
    cta: {
      label: "Book a Guiding Day",
      href: "mailto:j.morecowbell@gmail.com?subject=Prusik%20—%20Guiding%20Day",
    },
  },
  {
    id: "personal-coaching",
    title: "Personal Coaching",
    paragraphs: [
      "A scaffold coaching approach that empowers you to understand what goals, training, and mental game mean to you specifically.",
    ],
    points: [
      {
        label: "Technique",
        text: "Proper falling and intentional movement.",
      },
      {
        label: "Video analysis",
        text: "I review your attempts, find the pattern that keeps showing up, and name the skill to train next.",
      },
      {
        label: "Mental game",
        text: "Learn how to direct attention and focus on what you need to.",
      },
    ],
    pricing: {
      kind: "single",
      amount: "$200",
      cap: "per month · cancel anytime",
      note: "2 live remote sessions / month — 1st & 3rd Tuesday — plus SEE training-log access",
    },
    cta: {
      label: "Book a Free Intro Call",
      href: "https://cal.com/john-campbell-fxgqfb/15min",
    },
  },
  {
    id: "training-day",
    title: "On-Route/Project Training Day",
    paragraphs: [
      "A full day on your actual route or project, not a demo climb. Technique, falling on purpose, and the case for committing when it counts.",
    ],
    points: [
      { label: "Technique", text: "Movement that holds up under real pressure." },
      {
        label: "Falling practice",
        text: "Structured fall practice on the route.",
      },
      { label: "Mental preparedness", text: "The mental tools to commit." },
    ],
    pricing: {
      kind: "single",
      amount: "$625 / $800",
      cap: "Full Day (≤6hrs) · 1 climber / 2 climbers",
    },
    cta: {
      label: "Book a Training Day",
      href: "mailto:j.morecowbell@gmail.com?subject=Prusik%20—%20On-Route%2FProject%20Training%20Day",
    },
  },
  {
    id: "falling-clinic",
    title: "Falling & Commitment Clinic",
    paragraphs: [
      "Rock Warrior’s Way Level 1 clinics on falling and commitment, at your gym or outside. Small groups, real practice, real conversation about the risk you’re taking.",
      "Up to 6 climbers, bring your own gear.",
    ],
    points: [
      {
        label: "Falling",
        text: "Practice built to change how you actually respond, not just what you know.",
      },
      {
        label: "Commitment",
        text: "The difference between deciding and doing, under real pressure.",
      },
    ],
    pricing: { kind: "contact", amount: "Contact for pricing" },
    cta: {
      label: "Book a Clinic",
      href: "mailto:j.morecowbell@gmail.com?subject=Prusik%20—%20Falling%20%26%20Commitment%20Clinic",
    },
  },
  {
    id: "corporate",
    title: "Corporate & Group Programs",
    paragraphs: [
      "Programs for corporate teams, nonprofits, and retreats, scoped to the group’s people and goals.",
    ],
    points: [
      {
        label: "Scoped to the group",
        text: "Built around your people, not a stock program.",
      },
      {
        label: "One point of contact",
        text: "You talk to me, not a sales team.",
      },
    ],
    pricing: { kind: "contact", amount: "Contact for pricing" },
    cta: {
      label: "Email to Inquire",
      href: "mailto:j.morecowbell@gmail.com?subject=Prusik%20—%20Corporate%20%26%20Group%20Programs",
    },
  },
];

export const ABOUT = {
  name: "John Campbell",
  role: "Founder, Guiding & Coaching",
  paragraphs: [
    "Climbing has taught me how to work with my stress, my fears, my ego, at the crags and in every other part of my life.",
    "Finding that edge, where I can know when to push myself and when to let myself back off, has empowered me to fall in love with the process as I work towards my goals. I want to share that with as many people as I can.",
    "I started out as a performance coach for athletes, then climbing pulled me in and I started coaching climbers instead. What I found was the same thing I want for you: real empowerment under stress.",
    "Now I bring it all together, exercise science, the mental game, and technique training, to help you find your edge and work with it, not against it.",
  ],
  location: "Based in Leipers Fork, TN.",
  credentialsLabel: "Credentials",
  credentials: [
    "B.S. Exercise Science, Psychology",
    "AMGA SPI",
    "WFA",
    "RWW Trainer",
  ],
  book: {
    text: "Send a note with what you want to work on and when. You’ll hear back to set up a call.",
    cta: "Email to book",
    href: "mailto:j.morecowbell@gmail.com?subject=Prusik%20—%20Booking",
  },
};

export const FOOTER = {
  legal: "Prusik — a DBA of Straydog Labs LLC · Leipers Fork, TN",
  email: "j.morecowbell@gmail.com",
  mailto: "mailto:j.morecowbell@gmail.com",
};
