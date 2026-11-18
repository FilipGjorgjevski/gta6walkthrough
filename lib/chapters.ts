/**
 * Public mission-name index, not a collection of walkthroughs.
 * Chapters 0–2: GTA Base index checked Nov 18, 2026.
 * Chapters 3–5: PC Gamer's published launch-day list checked Nov 18, 2026.
 * Only titles have been extracted; any editorial copy on VICE ATLAS is original.
 * Order and classifications may change as game releases worldwide.
 */
export type MissionEntry = { name: string; guideSlug?: string; note?: string };
export type ChapterCatalog = {
  number: number;
  title: string;
  strapline: string;
  region: string;
  sourceName: string;
  sourceUrl: string;
  missions: MissionEntry[];
};
const noteByTitle: Record<string,string> = {
  "Gone Fishing":"Jason and Donnie's smuggling run turns dangerous.",
  "Gear Up":"A stop at the gun shop.",
  "Lab Fees":"A rent collection for Brian.",
  "Just a Scratch":"Jason's damaged Ganado needs attention.",
  "Unwanted Attention":"A payment to recover from the impound.",
  "Pipework":"A tenant needs some repairs.",
  "Hey Arnold!":"Find a missing broker.",
  "Island Dreams":"A diving trip and sunken treasure.",
  "Feng Shui":"Getting the house ready.",
  "Coming Home":"Pick Lucia up after her release.",
  "Clean Up After Donnie":"A missing package to track down.",
  "Buck Me":"An introduction to banking.",
  "Down to Earth":"A new marina assignment.",
  "Day Release":"A day out with friends.",
  "Clear Skies":"Another job for Jason and Donnie.",
  "Building a Life":"Making a home together.",
  "Swamped":"A meeting with the Kingfishers.",
  "Donnie's Trailer":"A return to Donnie's place.",
  "Donnie's Lost Drugs":"Retrieve the cargo from a sunken boat.",
  "Recalibration":"Check in on Cal.",
  "Tourist Trap":"A potentially lucrative pickup.",
  "Home Sweet Home":"Gather Jason's belongings.",
  "Discharge Time":"A visit to the hospital.",
  "What's in the Bag?":"Inspect the mysterious bag.",
  "Ambulance Chaser":"Deal with an abandoned ambulance.",
  "Girls' Trip":"A search for painkillers.",
  "Moses":"Find a vehicle contact.",
  "Daily Driver":"Repossession work for a mechanic.",
  "Behind on Payments":"Settle the motel debt.",
  "Slam Dunk":"Follow a stronger medicine lead.",
  "Coffee Break":"Discuss the next move.",
  "Prepare for Vice City":"Gather funds before relocating.",
  "Checking Out":"Leave the motel behind.",
  "Welcome to Vice City":"A new chapter in the city.",
  "Dealer's Choice":"Jason handles a deal.",
  "Meet the Heders":"Meet new acquaintances.",
  "Mami Knows Best":"Lucia reconnects with family.",
  "First Impressions":"An introduction to Raul.",
  "Crosstown Traffic":"Follow a gang contact.",
  "Sinfrontera National Bank":"A major job takes shape.",
  "The Cartel Heist":"A large-scale bank job.",
  "Ocean Beach":"Settle into a new base.",
  "Lawyer Up":"Seek legal help.",
  "Party Hard":"A security assignment.",
  "Adventures in Babysitting":"A nightclub security job.",
  "Close Surveillance":"Drone reconnaissance.",
  "VCIA Takedown":"A major operation begins.",
  "Bird in the Hand":"Find a new ride.",
  "Operation Savage Glory":"A high-stakes recovery.",
  "Protective Custody":"Work together under pressure."
};
const list = (names: string, guideMap: Record<string,string> = {}): MissionEntry[] =>
  names.trim().split("|").map(n => {const name=n.trim();return {name,...(guideMap[name]?{guideSlug:guideMap[name]}:{}),...(noteByTitle[name]?{note:noteByTitle[name]}:{})};});
const base = "https://www.gtabase.com/gta-6/missions/";
const pcgamer = "https://www.pcgamer.com/games/grand-theft-auto/gta-6-mission-list/";
export const chapters: ChapterCatalog[] = [
  {
    number: 0, title: "The Prologue", strapline: "The story opens with Lucia's prison interview and the events that brought her there.", region:"HAMLET CORRECTIONAL",
    sourceName:"GTA Base", sourceUrl:base,
    missions:list("Prologue", {"Prologue":"prologue"})
  },
  {
    number: 1, title: "Just Like Paradise", strapline: "Jason's early assignments, the Keys, and the complicated road toward Lucia's release.", region:"LEONIDA KEYS",
    sourceName:"GTA Base", sourceUrl:base,
    missions:list("Gone Fishing|Gear Up|Lab Fees|Just a Scratch|Unwanted Attention|Pipework|Hey Arnold!|Island Dreams|Feng Shui|Coming Home|Clean Up After Donnie|Buck Me|Down to Earth|Deposit Cash Into BuckMe|Save for the Future|Day Release|Clear Skies|Building a Life|Swamped|Donnie's Trailer|Donnie's Lost Drugs|Recalibration|Tourist Trap|Home Sweet Home|Discharge Time", {"Gone Fishing":"chapter-1"})
  },
  {
    number: 2, title: "Paradise Lost", strapline: "A different city, a motel base, and fresh problems as the story moves forward.", region:"PORT GELLHORN",
    sourceName:"GTA Base", sourceUrl:base,
    missions:list("What's in the Bag?|Ambulance Chaser|Take Care of Jason|Overnight Charges|Just Moved In|Girls' Trip|Moses|New Look|How Do I Look?|Painkiller Supplier|Daily Driver|Behind on Payments|Slam Dunk|Breakfast Run|Coffee Break|Prepare for Vice City|Afternoon Delight|Checking Out")
  },
  {
    number: 3, title: "Tits Ass Drug Money", strapline: "The reported next chapter moves the action and larger opportunities into Vice City.", region:"VICE CITY",
    sourceName:"PC Gamer", sourceUrl:pcgamer,
    missions:list("Welcome to Vice City|Dealer's Choice|Meet the Heders|Dubious Provenance|Mami Knows Best|South Leonida Real Estate|Tyrone|Here, Kitty Kitty|Car Services|Top Billing|Boobie Time|First Impressions|Caught Slipping|Crosstown Traffic|Credit Check|Steal the Zorruso for Randy|Sinfrontera National Bank|Security Expert|Ride or Die|Company Property|The Missing Link|Safe Word|Cooties|Bricked Up|Hidden Charges|The Cartel Heist")
  },
  {
    number: 4, title: "Vice City, Baby", strapline: "The stakes rise as Jason and Lucia build connections around the city.", region:"VICE CITY",
    sourceName:"PC Gamer", sourceUrl:pcgamer,
    missions:list("Ocean Beach|Another Life|Company Cars|Lawyer Up|Party Hard|Heavy Lifting|Photo/Shoot|Making Gainz|Watch It|Cash Injections|Amateur Hour|Dirty Work|Too Much Baggage|Adventures in Babysitting|Fresh Evidence|Power Play|Child's Play|Headliners|Close Surveillance|Delivery Method|Team Building|Fully Catered|VCIA Takedown|Sunset|Undisclosed mission")
  },
  {
    number: 5, title: "Top of the World, Ma", strapline: "Later-chapter mission names are potential story spoilers. Browse with care.", region:"LEONIDA",
    sourceName:"PC Gamer", sourceUrl:pcgamer,
    missions:list("Bird in the Hand|Taking Liberties|VC Baby|Doggie Bag|Operation Savage Glory|Protective Custody|Undisclosed finale")
  },
];
export const indexedMissionCount = chapters.reduce((count, chapter)=>count + chapter.missions.length,0);
