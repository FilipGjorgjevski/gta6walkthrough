export type GuideSection = {
  id: string;
  label: string;
  title: string;
  type: "gameplay" | "cinematic";
  description: string[];
  objective?: string;
  editorialNote?: string;
  optional?: boolean;
  tip?: string;
};

export type Guide = {
  slug: string;
  title: string;
  subtitle: string;
  chapter: string;
  readingMinutes: number;
  status: "in-progress" | "reviewed";
  updated: string;
  description: string;
  tags: string[];
  sections: GuideSection[];
  quickAnswers?: {question: string; answer: string}[];
  sources?: {name: string; url: string}[];
};

// All content is easy to edit in this file. Only create real pages for actual guides.
// Steps are grouped by what the player actually controls; cinematics are separate.
export const guides: Guide[] = [
  {
    slug: "prologue",
    title: "Prologue",
    subtitle: "Lucia's opening sequence",
    chapter: "00 / HAMLET CORRECTIONAL",
    readingMinutes: 5,
    status: "in-progress",
    updated: "2026-11-18",
    description: "GTA 6 Prologue walkthrough with every playable step: follow the guard, rob the payday loan store, escape the grab, run from police, and return to the coffee shop. Crossword answer included.",
    tags: ["Lucia", "Prison", "Stephanie", "CO Wilson", "Crossword", "Venus", "Payday Loan", "Police", "Tommy"],
    quickAnswers: [
      {question:"What do I do first in prison?", answer:"Follow CO Wilson when the objective appears. The interview with Stephanie is a cutscene, not a gameplay task."},
      {question:"What is the prologue crossword answer?", answer:"Venus. Talking to the woman working on the crossword is an optional early interaction."},
      {question:"Can you escape the police in the flashback?", answer:"No. The pursuit and arrest are scripted, so running indefinitely will not change the ending."},
      {question:"Why does Lucia go back to the coffee shop?", answer:"The closing scene reveals that she returns because her young son Tommy was left there."},
    ],
    sources: [
      {name:"Original gameplay observations", url:""},
      {name:"Rare Thief — Prologue guide", url:"https://rarethief.com/gta-vi-prologue-walkthrough/"},
      {name:"Beebom — Prologue mission guide", url:"https://beebom.com/gta-6-prologue/"}
    ],
    sections: [
      {
        id: "opening", label: "C1", title: "Opening cinematic", type: "cinematic",
        description: ["The introductory movie establishes Lucia and Jason's connection before switching to Lucia at Hamlet Correctional.", "This is not a controllable part of the mission."]
      },
      {
        id: "cellmates", label: "BONUS", title: "Talk to your cellmates (optional)", type: "gameplay", optional: true,
        description: ["Before following the guard, turn around in the prison dorm and face the inmates gathered around a table.", "Focus on a cellmate with L2 on PlayStation or LT on Xbox, then use the interaction prompt to speak.", "A reported optional crossword answer is Venus. You can skip this conversation and still continue the mission."],
        editorialNote: "The optional crossword detail comes from published guides; check the on-screen prompts in your version."
      },
      {
        id: "guard", label: "01", title: "Follow the prison guard", type: "gameplay", objective: "Follow the prison guard",
        description: ["Wait for CO Wilson to arrive and open Lucia's cell. Head toward him when the objective appears.", "Stay behind Wilson through the common area. He pauses to answer a phone call; wait for him to continue.", "Follow him through the door and down the corridor until the counselor conversation starts automatically."],
        tip: "You do not need to search the prison or find an alternate exit. The guard leads you straight to the next scene."
      },
      {
        id: "stephanie", label: "C2", title: "Stephanie's interview", type: "cinematic",
        description: ["Stephanie asks Lucia why she has been called in. Lucia talks about a supervised-release application and possible home detention.", "The conversation moves into a flashback; there are no controls to use during the interview."]
      },
      {
        id: "coffee-shop", label: "C3", title: "Coffee shop flashback", type: "cinematic",
        description: ["Lucia remembers sitting in a coffee shop during a difficult period in her life. She notices an opportunity nearby and heads toward a payday-loan store.", "The opening of the flashback is cinematic; control returns for the robbery."]
      },
      {
        id: "aim", label: "02", title: "Aim the pistol at the teller", type: "gameplay",
        description: ["Once Lucia is controllable inside the payday-loan store, use the aiming prompt to point her pistol at the employee behind the counter.", "Keep the employee covered while the robbery plays out. Follow any tutorial cues displayed on screen."],
        tip: "The scene is a tutorial. Watch the button prompts rather than trying to leave the building early."
      },
      {
        id: "cash", label: "03", title: "Take the money from the counter", type: "gameplay",
        description: ["Move up to the counter when the cash is available.", "Use the pickup prompt (Triangle on PlayStation / Y on Xbox, according to launch-day guides) to take the money."],
        editorialNote: "Controller prompts may differ depending on your layout and platform."
      },
      {
        id: "grapple", label: "04", title: "Break free from the attacker", type: "gameplay",
        description: ["As Lucia tries to leave, someone grabs her from behind.", "Rapidly press the on-screen escape button to get free. Published guides report X on PlayStation / A on Xbox."],
        tip: "If the scene stops progressing, look for the rapid-press icon: this is a quick-time event, not a normal fistfight."
      },
      {
        id: "chase", label: "05", title: "Run from the police", type: "gameplay",
        description: ["Once you are outside, sprint away from the officers and keep moving through the nearby streets.", "Watch the flashing police search zone on your minimap and keep following the sequence until the scene transitions."],
        tip: "The pursuit is scripted. You cannot permanently outrun the police to change the outcome, so there is no special escape route to discover."
      },
      {
        id: "return", label: "06", title: "Return to the coffee shop", type: "gameplay",
        description: ["When control returns, locate the coffee-shop waypoint on your minimap or compass.", "Run toward the objective marker and approach the shop.", "The police arrest Lucia when she reaches the area. This is the intended ending of the prologue, not a failed attempt."],
        tip: "If you think you escaped too early, keep following the marked destination. The return to the shop triggers the final sequence."
      },
      {
        id: "reveal", label: "C4", title: "Why Lucia went back", type: "cinematic",
        description: ["The ending reveals Lucia returned because she had left her young son, Tommy, at the coffee shop. Staff had alerted the authorities, and the child entered welfare custody.", "A father's-name detail involving Jason Duval was mentioned in the original playthrough, but its exact meaning should be checked against the dialogue."],
        editorialNote: "The child's name and custody event are described in Beebom's published guide. The father's-name wording remains unverified."
      },
      {
        id: "transition", label: "C5", title: "Chapter 1 begins", type: "cinematic",
        description: ["The prologue ends, and the next playable story chapter follows Jason.", "Continue to the Gone Fishing walkthrough for the island shootout and seaplane escape."]
      }
    ]
  },
  {
    slug: "chapter-1",
    title: "Gone Fishing",
    subtitle: "Jason's first Chapter 1 job",
    chapter: "01 / JUST LIKE PARADISE",
    readingMinutes: 5,
    status: "in-progress",
    updated: "2026-11-18",
    description: "GTA 6 Gone Fishing: survive the island shootout, win the hut fight, recover the package and escape by seaplane with Jason.",
    tags: ["Jason", "Island", "Shootout", "Hut", "Melee", "Seaplane", "Marina", "Brian", "Donnie", "Lori", "Zombix"],
    sources: [{name:"Original gameplay observations", url:""},{name:"GTA Base — Story mission index", url:"https://www.gtabase.com/gta-6/missions/"}],
    sections: [
      {
        id: "island-job",
        label: "01",
        title: "The theft on the island",
        type: "gameplay",
        description: [
          "Chapter 1 begins with you controlling Jason on an island, where the objective is to steal an item described in the player's notes as 'Zombix'.",
          "The package name was recorded as 'Zombix'; check the spelling against your game before publishing it as an item name."
        ],
        editorialNote: "'Zombix' is an unverified transcription, not a confirmed item name."
      },
      {
        id: "shootout",
        label: "02",
        title: "Survive the island shootout",
        type: "gameplay",
        description: [
          "Jason is spotted during the attempt. Armed enemies begin firing at him.",
          "Shoot back and survive the confrontation so that you can continue toward the hut. The route, weapon loadout, and any exact survival conditions were not recorded."
        ]
      },
      {
        id: "hut-fight",
        label: "03",
        title: "Fight the man in the hut",
        type: "gameplay",
        description: [
          "Enter the hut after the gunfight. Jason gets into a close-range fistfight with another man.",
          "Follow the melee prompts shown on-screen, land punches, and finish the fight to move on."
        ]
      },
      {
        id: "recover-item",
        label: "04",
        title: "Get the item you came for",
        type: "gameplay",
        description: [
          "After the fight, collect the item that Jason came to steal, referred to in the notes as 'Zombix'.",
          "Use the displayed interaction prompt at the objective item. Its exact location is still being checked."
        ]
      },
      {
        id: "seaplane",
        label: "05",
        title: "Reach the seaplane and escape",
        type: "gameplay",
        description: [
          "Make your way back to the seaplane and leave the island.",
          "Fly to a marina and land. The playthrough notes do not yet specify a flight route or landing markers."
        ]
      },
      {
        id: "donnie",
        label: "06",
        title: "Donnie explains what happened",
        type: "cinematic",
        description: [
          "At the marina, Donnie explains the incident to his boss and discusses how Jason became involved.",
          "The boss is unhappy with the explanation. This section is a cutscene rather than an active objective in the notes."
        ],
        editorialNote: "Donnie's name and the identity of the boss should be cross-checked against subtitles."
      },
      {
        id: "brian",
        label: "07",
        title: "Brian asks Jason for his side of the story",
        type: "cinematic",
        description: [
          "The conversation continues, and a man identified in the notes as Brian asks Jason to explain what happened.",
          "Who leads Jason aside and the exact relationship between Brian, Donnie, and the boss remain to be confirmed."
        ]
      },
      {
        id: "lori",
        label: "08",
        title: "Lori is mentioned",
        type: "cinematic",
        description: [
          "Someone named Lori is mentioned in connection with a visit or an invitation involving Jason, possibly for food.",
          "The notes do not confirm whether Lori is Brian's wife or another character."
        ],
        editorialNote: "Do not state Lori's relationship or the purpose of the invitation as fact until the dialogue is verified."
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
