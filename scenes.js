let activeSceneIndex = 0;
const scenes = [
  {
    background: "img/Start.png",
    text: " Hej, kul att du vill fira jul med oss! Vi har mycket att förbereda och du måste hjälpa oss. Vill du gå till skogen för att hugga en gran eller gå in i huset?",
    button1: { text: "Gå till skogen", nextSceneIndex: 1 },
    button2: { text: "Gå in i huset", nextSceneIndex: 2 },
  },
  {
    background: "img/forest.png",
    text: "Nu är du i skogen. Kan du hjälpa mig hugga en gran? Klicka på",
    button1: { text: "Hugga gran", nextSceneIndex: 1 },
    button2: { text: "Gå in i huset", nextSceneIndex: 2 },
  },
  {
    background: "img/house.png",
    text: "Välkommen in i värmen",
    button1: { text: "Sätta upp granen" },
    button2: { text: "Spela spel" },
  },
];
