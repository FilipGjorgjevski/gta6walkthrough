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
  quickAnswers?: {question: string; answer: string}[];
  sources?: {name: string; url: string}[];
};

// All content is easy to edit in this file. Only create real pages for actual guides.
// "field-notes" means sourced from firsthand notes but not independently confirmed.
export const guides: Guide[] = [
  {
    slug: "prologue",
    title: "Prologue",
    subtitle: "Lucia's opening sequence",
    chapter: "00 / HAMLET CORRECTIONAL",
    readingMinutes: 6,
    status: "field-notes",
    updated: "2026-11-18",
    description: "GTA 6 Prologue guide: crossword answer, CO Wilson, Stephanie's interview, the payday loan robbery, police chase and why Lucia returns to the coffee shop.",
    tags: ["Lucia", "Prison", "Stephanie", "CO Wilson", "Crossword", "Venus", "Payday Loan", "Police", "Tommy"],
    quickAnswers: [
      {question:"What is the prologue crossword answer?", answer:"Venus. Talking to the woman working on the crossword is an optional early interaction."},
      {question:"Can you escape the police in the flashback?", answer:"No. The pursuit and arrest are scripted, so running indefinitely will not change the ending."},
      {question:"Why does Lucia go back to the coffee shop?", answer:"The closing scene reveals that she returns because her young son Tommy was left there."},
    ],
    sources: [
      {name:"Our firsthand playthrough notes", url:""},
      {name:"Rare Thief — Prologue guide", url:"https://rarethief.com/gta-vi-prologue-walkthrough/"},
      {name:"Beebom — Prologue mission guide", url:"https://beebom.com/gta-6-prologue/"}
    ],
    sections: [
      {
        id:"opening", label:"01", title:"The opening cinematic", type:"cinematic",
        description:["The introductory story sequence establishes Lucia and Jason's relationship before the focus shifts to Lucia in prison.","This sequence is presented as a cinematic in our playthrough notes; there is no required player action to document here."]
      },
      {
        id:"cellmates", label:"02", title:"Optional: talk to your cellmates", type:"gameplay",
        description:["When you first control Lucia in the prison dorm, turn away from the window and look toward the other inmates.","A woman at a table is trying to finish a crossword. Focus on her (L2 on PS5 / LT on Xbox) and talk to her. The answer reported by launch guides is Venus; speak to her again to supply it.","This conversation adds flavor to the opening; it is not the main objective noted during our playthrough."],
        editorialNote:"Optional interaction documented by external launch-day guides; revisit in-game to confirm exact prompt behavior."
      },
      {
        id:"prison-guard", label:"03", title:"Follow CO Wilson", type:"gameplay", objective:"Follow the prison guard",
        description:["The guard, identified in published guides as CO Wilson, arrives at the dorm entrance. Walk toward him and follow as he leads Lucia through the correctional facility.","He pauses briefly near the common area, then continues toward Stephanie's office. Stay with him until the conversation begins."],
      },
      {
        id:"stephanie", label:"04", title:"Stephanie's interview", type:"cinematic",
        description:["Stephanie asks Lucia to explain why she is attending the meeting. Lucia says she applied for a supervised-release arrangement involving home detention and could be considered for a trial placement.","The interview shifts into a flashback as Lucia describes the events that led to her arrest."],
      },
      {
        id:"coffee-shop", label:"05", title:"The coffee shop and the decision", type:"cinematic",
        description:["The flashback begins around a coffee shop during a difficult period in Lucia's life. A nearby payday-loan business catches her attention.","The scene sets up the attempted robbery; there are no confirmed movement objectives during this portion."],
      },
      {
        id:"robbery", label:"06", title:"Rob the payday loan store", type:"gameplay",
        description:["Lucia has a pistol and confronts the teller. Follow the tutorial prompts to raise the weapon, aim, and demand the money.","Approach the counter to collect the cash. Published guides report multiple cash pickups before the scene is interrupted.","As Lucia moves to leave, someone grabs her from behind. Use the displayed rapid-press prompt to break out of the grapple."],
        editorialNote:"The robbery actions and cash pickups were cross-checked with published walkthroughs; confirm exact controller prompts in your game version."
      },
      {
        id:"police-escape", label:"07", title:"Run from the police", type:"gameplay",
        description:["After the robbery goes wrong, take control of Lucia outside and sprint away from pursuing officers. Use the minimap's search indicators to understand where police are looking.","Important: this is a scripted pursuit. You cannot permanently lose the police here, so there is no secret escape route to find."],
        editorialNote:"The scripted nature of the chase is corroborated by multiple launch-day guides."
      },
      {
        id:"return", label:"08", title:"Return to the coffee shop", type:"gameplay",
        description:["The sequence leads Lucia back toward the coffee shop. Follow the destination marker instead of trying to leave the mission area.","The police arrest Lucia as she gets close. This outcome is part of the story, not a gameplay failure."],
      },
      {
        id:"custody", label:"09", title:"Why Lucia came back", type:"cinematic",
        description:["The conclusion reveals that Lucia had left her young son, Tommy, at the coffee shop. The incident involves child-welfare custody, giving her attempted return a much more personal meaning.","Your notes also caught a reference to Jason Duval in connection with the father's details. We are leaving the exact wording and what it establishes unconfirmed until the dialogue can be checked."],
        editorialNote:"Tommy's identity is reported by Beebom. The Jason/father detail remains unverified in our firsthand notes."
      },
      {
        id:"chapter-one", label:"10", title:"The story moves to Chapter 1", type:"cinematic",
        description:["The prison framing sequence closes, and the story shifts toward Jason's early work in the Leonida Keys.","The next documented mission is Gone Fishing; our island-and-seaplane walkthrough is available as a separate guide."],
      }
    ]
  },
  {
    slug: "chapter-1",
    title: "Gone Fishing",
    subtitle: "Jason's first Chapter 1 job",
    chapter: "01 / JUST LIKE PARADISE",
    readingMinutes: 5,
    status: "field-notes",
    updated: "2026-11-18",
    description: "GTA 6 Gone Fishing: survive the island shootout, win the hut fight, recover the package and escape by seaplane with Jason.",
    tags: ["Jason", "Island", "Shootout", "Hut", "Melee", "Seaplane", "Marina", "Brian", "Donnie", "Lori", "Zombix"],
    sources: [{name:"Our firsthand playthrough notes", url:""},{name:"GTA Base — Story mission index", url:"https://www.gtabase.com/gta-6/missions/"}],
    sections: [
      {
        id: "island-job",
        label: "01",
        title: "The theft on the island",
        type: "gameplay",
        description: [
          "Chapter 1 begins with you controlling Jason on an island, where the objective is to steal an item described in the player's notes as 'Zombix'.",
          "The exact spelling of the item's name and the game's on-screen instructions still need to be checked."
        ],
        editorialNote: "'Zombix' is a transcription from playthrough notes, not a verified in-game item name."
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
          "Win the melee encounter to continue. Specific combat prompts were not captured."
        ]
      },
      {
        id: "recover-item",
        label: "04",
        title: "Get the item you came for",
        type: "gameplay",
        description: [
          "After the fight, collect the item that Jason came to steal, referred to in the notes as 'Zombix'.",
          "The item's precise location inside the hut and the exact pickup prompt are still to be recorded."
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
