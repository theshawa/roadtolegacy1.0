import { AgendaItem } from "../types";

export const AGENDA: AgendaItem[] = [
  {
    title: "Registration",
    caption: "8:00 to 9:00",
    children: (
      <>
        Participant registration will be verified and presented with a sticker
        and a coloured wristband for grouping and IDs.
      </>
    ),
  },
  {
    title: "Welcoming",
    caption: "9:00 to 09:15",
    children: (
      <>Energetic introduction of the event and explaining sessions to come</>
    ),
  },
  {
    title: "Software Engineering",
    caption: "09:15 to 10:30",
    children: <>1 hour session from calcey followed by 15min Kahoot quiz</>,
  },
  {
    title: "Cloud development",
    caption: "10:30 to 11:30",
    children: <>45min session from IFS followed by 15min Kahoot quiz</>,
  },
  {
    title: "Network & Internet",
    caption:"11:30 to 12:30",
    children: <>45 min session from Dialog followed by 15 min Kahoot quiz</>
  },
  {
    title:"Lunch",
    caption:"12:30 to 13:30",
    children:<>Presenting lunch at the 2 exits near the stage and main entrance (for vegetarians)</>
  },
  {
    title: "Interactive session",
    caption: "13:30 to 14:00",
    children:<>Some bonding activity fitting in a 30min time gap to connect with community</>
  },
  {
    title: "Data science & AI",
    caption:"14:00 to 15:15",
    children: <>1 hour session from rootcode AI followed by 15min Kahoot quiz</>
  },
  {
    title: "Cyber security",
    caption: "15:15 to 16:15",
    children: <>45 min session from ITx350 </>
  },
  {
    title: "Ending",
    caption: "16:15 to 16:30",
    children: <>Dramatic exit with a memorable selfie (if possible)</>
  }
];
