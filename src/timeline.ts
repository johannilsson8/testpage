export type TimelineEvent = {
  date: string;
  title: string;
  body: string;
  image?: {
    label: string;
    palette: [string, string];
  };
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "September 2021",
    title: "The starting point",
    body: "Everything begins here, with the first chapter setting the tone for the story ahead.",
  },
  {
    date: "June 2022",
    title: "Momentum builds",
    body: "By summer the pace has changed, and the timeline starts to feel fuller, more confident, and more defined.",
    image: { label: "A brighter chapter in 2022", palette: ["#f97316", "#fb7185"] },
  },
  {
    date: "October 2023",
    title: "A defining milestone",
    body: "This is one of the larger moments in the journey, where a lot of progress becomes visible at once.",
    image: { label: "A key milestone in 2023", palette: ["#06b6d4", "#2563eb"] },
  },
  {
    date: "August 2024",
    title: "A new phase",
    body: "The story shifts again here, with a steadier rhythm and a clearer sense of direction moving forward.",
  },
  {
    date: "May 2026",
    title: "Late-May present",
    body: "The timeline arrives at the current point in late May, closing the arc with a sense of distance traveled and what comes next.",
  },
];
