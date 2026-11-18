export type GuideSection = {
  id: string;
  label: string;
  title: string;
  type: "gameplay" | "cinematic";
  description: string[];
  objective?: string;
  editorialNote?: string;
};

export type Guide = {
  slug: string;
  title: string;
  subtitle: string;
  chapter: string;
  readingMinutes: number;
  status: "field-notes" | "verified";
  updated: string;
  description: string;
  tags: string[];
  sections: GuideSection[];
};

// All content is easy to edit in this file. Only create real pages for actual guides.
// "field-notes" means sourced from firsthand notes but not independently confirmed.
export const guides: Guide[] = [
  {
    slug: "prologue",
    title: "Prologue",
    subtitle: "Lucia's opening sequence",
    chapter: "00 / THE OPENING",
    readingMinutes: 4,
    status: "field-notes",
    updated: "2026-11-18",
    description: "Follow the prison guard, understand Stephanie's interview, and play through Lucia's flashback and police escape.",
    tags: ["Lucia", "Prison", "Flashback", "Escape"],
    sections: [
      {
        id: "opening",
        label: "01",
        title: "An introduction to Lucia and Jason",
        type: "cinematic",
        description: [
          "The opening includes a romantic sequence involving Lucia and Jason. This section is cinematic; no player actions were noted.",
          "The sequence transitions to Lucia in prison."
        ]
      },
      {
        id: "prison-guard",
        label: "02",
        title: "Follow the prison guard",
        type: "gameplay",
        objective: "Follow the prison guard",
        description: [
          "This is the first confirmed on-screen gameplay instruction in the collected notes. Take control of Lucia and follow the guard to continue the prologue.",
          "No additional required interactions were recorded during this prison section."
        ]
      },
      {
        id: "stephanie",
        label: "03",
        title: "Stephanie's interview",
        type: "cinematic",
        description: [
          "Stephanie asks Lucia whether she knows why she is there. Lucia says she applied for a supervised-release program that could place her under home detention.",
          "Stephanie needs to understand Lucia's circumstances. As Lucia begins to explain, the story shifts into a flashback."
        ]
      },
      {
        id: "coffee-shop",
        label: "04",
        title: "The coffee shop flashback",
        type: "cinematic",
        description: [
          "Lucia recalls being in a coffee shop during a time when her life was falling apart. She notices something she interprets as a sign.",
          "The sequence builds toward a robbery attempt."
        ]
      },
      {
        id: "robbery",
        label: "05",
        title: "The attempted robbery",
        type: "gameplay",
        description: [
          "Lucia obtains a pistol and tries to carry out a robbery. The sequence becomes playable as she aims.",
          "Someone grabs her from behind while she is aiming. Police spot the situation, and Lucia must flee."
        ],
        editorialNote: "The exact on-screen objective text for this sequence has not yet been recorded."
      },
      {
        id: "police-escape",
        label: "06",
        title: "Run from the police",
        type: "gameplay",
        description: [
          "Control Lucia as she runs from the pursuing officers. The collected playthrough notes indicate that she manages to get away initially.",
          "She then heads back toward the coffee shop."
        ],
        editorialNote: "Specific controls, route choices, and failure conditions need further verification."
      },
      {
        id: "return",
        label: "07",
        title: "Why Lucia returns to the coffee shop",
        type: "cinematic",
        description: [
          "The apparent reason for Lucia's return is a baby left behind at the coffee shop. The police catch Lucia after she returns.",
          "The dialogue also mentions custody of the baby and Jason Duval appearing as the recorded father or an address associated with the father. The precise wording and whether that information is true are not yet established."
        ],
        editorialNote: "Do not treat the child's parentage as confirmed until the actual dialogue is checked."
      },
      {
        id: "chapter-one",
        label: "08",
        title: "Chapter 1 begins",
        type: "cinematic",
        description: [
          "The flashback and prison framing sequence conclude, followed by the Chapter 1 introduction."
        ]
      }
    ]
  }
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideUrl(slug: string): string {
  return `/walkthrough/${slug}`;
}
