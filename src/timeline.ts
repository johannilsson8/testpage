export type TimelineEvent = {
  date: string;
  title: string;
  body: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "Sommaren 2021",
    title: "Ölgolf med Sexistenz",
    body: "Kärlek börjar alltid med bråk?",
    image: { src: "/images/olgolf.jpg", alt: "Ölgolf med Sexistenz" },
  },
  {
    date: "4 September 2021",
    title: "Dag 1",
    body: "Vi blev tillsammans",
    image: { src: "/images/dag-1.jpg", alt: "Dag 1" },
  },
  {
    date: "21 September 2021",
    title: "Dag 18",
    body: "Bilder togs på varje tandborstning!",
    image: { src: "/images/dag-18.jpg", alt: "Dag 18" },
  },
  {
    date: "25 September 2021",
    title: "Dag 22",
    body: "Vår första fest tillsammans i vita huset",
    image: { src: "/images/dag-22.jpg", alt: "Vår första fest tillsammans i vita huset" },
  },
  {
    date: "4 Oktober 2021",
    title: "Dag 31",
    body: "Göte flyttar in",
    image: { src: "/images/dag-31.jpg", alt: "Göte flyttar in" },
  },
  {
    date: "23 Oktober 2021",
    title: "Dag 50",
    body: "Väldigt gullig SMS konversation",
    image: { src: "/images/dag-50.jpg", alt: "Väldigt gullig SMS konversation" },
  },
  {
    date: "28 Januari 2022",
    title: "Dag 147",
    body: "Första IKEA besöket",
    image: { src: "/images/dag-147.jpg", alt: "Första IKEA besöket" },
  },
  {
    date: "1 Feburari 2022",
    title: "Dag 151",
    body: "Flyttade in i lägenheten",
    image: { src: "/images/dag-151.jpg", alt: "Flyttade in i lägenheten" },
  },
  {
    date: "25 Mars 2022",
    title: "Dag 203",
    body: "Stekpanna i soffan?",
    image: { src: "/images/dag-203.jpg", alt: "Stekpanna i soffan" },
  },
  {
    date: "16 April 2022",
    title: "Dag 225",
    body: "Träffade Doris för första gången",
    image: { src: "/images/dag-225.jpg", alt: "Träffade Doris för första gången" },
  },
  {
    date: "14 Maj 2022",
    title: "Dag 253",
    body: "Doris flyttade in",
    image: { src: "/images/dag-253.jpg", alt: "Doris flyttade in" },
  },
  {
    date: "12 Juli 2022",
    title: "Dag 312",
    body: "Promenad med Challe",
    image: { src: "/images/dag-312.jpg", alt: "Promenad med Challe" },
  },
  {
    date: "27 Augusti 2022",
    title: "Dag 358",
    body: "Resa till Kroatien",
    image: { src: "/images/dag-358.jpg", alt: "Resa till Kroatien" },
  },
  {
    date: "27 Mars 2023",
    title: "Dag 570",
    body: "Födelsedagsfirande på Pinchos",
    image: { src: "/images/dag-570.jpg", alt: "Födelsedagsfirande på Pinchos" },
  },
  {
    date: "3 Juni 2023",
    title: "Dag 638",
    body: "Examen!",
    image: { src: "/images/dag-638.jpg", alt: "Examen" },
  },
  {
    date: "8 Juli 2023",
    title: "Dag 673",
    body: "Coldplay",
    image: { src: "/images/dag-673.jpg", alt: "Coldplay" },
  },
  {
    date: "17 Augusti 2023",
    title: "Dag 713",
    body: "Tottenham",
    image: { src: "/images/dag-713.jpg", alt: "Tottenham" },
  },
  {
    date: "7 Oktober 2023",
    title: "Dag 764",
    body: "Asta flyttade in",
    image: { src: "/images/dag-764.jpg", alt: "Asta flyttade in" },
  },
  {
    date: "17 Februari 2024",
    title: "Dag 897",
    body: "Pinchos",
    image: { src: "/images/dag-897.jpg", alt: "Pinchos" },
  },
  {
    date: "29 Juni 2024",
    title: "Dag 1030",
    body: "Första bröllopet vi gick på tillsammans",
    image: { src: "/images/dag-1030.jpg", alt: "Första bröllopet vi gick på tillsammans" },
  },
  {
    date: "6 September 2024",
    title: "Dag 1099",
    body: "Ronneby Brunn för att fira 3 år",
    image: { src: "/images/dag-1099.jpg", alt: "Ronneby Brunn för att fira 3 år" },
  },
  {
    date: "19 Oktober 2024",
    title: "Dag 1142",
    body: "Rhodos",
    image: { src: "/images/dag-1142.jpg", alt: "Rhodos" },
  },
  {
    date: "27 Mars 2025",
    title: "Dag 1301",
    body: "Kent",
    image: { src: "/images/dag-1301.jpg", alt: "Kent" },
  },
  {
    date: "17 Maj 2025",
    title: "Dag 1352",
    body: "Födelsedagsfirande på Antonios",
    image: { src: "/images/dag-1352.jpg", alt: "Födelsedagsfirande på Antonios" },
  },
  {
    date: "24 Maj 2025",
    title: "Dag 1359",
    body: "Toughest",
    image: { src: "/images/dag-1359.jpg", alt: "Toughest" },
  },
  {
    date: "4 Juni 2025",
    title: "Dag 1370",
    body: "Examen!",
    image: { src: "/images/dag-1370.jpg", alt: "Examen" },
  },
  {
    date: "17 Juni 2025",
    title: "Dag 1383",
    body: "Segling",
    image: { src: "/images/dag-1383.jpg", alt: "Segling" },
  },
  {
    date: "1 Februari 2026",
    title: "Dag 1612",
    body: "Skidresa",
    image: { src: "/images/dag-1612.jpg", alt: "Skidresa" },
  },
  {
    date: "17 April 2026",
    title: "Dag 1687",
    body: "Wien",
    image: { src: "/images/dag-1687.jpg", alt: "Wien" },
  },
  {
    date: "22 Maj 2026",
    title: "Dag 1722",
    body: "???",
    image: { src: "/images/images.png", alt: "???" },
  },
  {
    date: "23 Maj 2026",
    title: "Dag 1723",
    body: "Göteborgsvarvet",
    image: { src: "/images/IMG_7896.jpg", alt: "Göteborgsvarvet" },
  },
];
