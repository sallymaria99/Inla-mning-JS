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
    button1: { text: "Hugga gran", nextSceneIndex: 2 },
    button2: { text: "Gå in i huset", nextSceneIndex: 3 },
  },
  {
    background: "img/HugGran.png",
    text: "Bra jobbat!! Nu är granen huggen, jag tar med mig den till huset, följ med mig! Jag behöver mer hjälp inne i huset.",
    button1: { text: "Gå till vardagsrummet", nextSceneIndex: 3 },
    button2: { text: "Gå till köket", nextSceneIndex: 4 },
  },
  {
    background: "img/vardagsrum.png",
    text: "Nu är vi i vardagsrummet och jag har satt upp granen. Hjälp mig nu med att dekorera granen",
    button1: { text: "Sätta upp granen" },
    button2: { text: "Gå till köket", nextSceneIndex: 4 },
  },
  {
    background: "img/house.png",
    text: "Köket",
    button1: { text: "Baka" },
    button2: { text: "Gå till vardagsrummet", nextSceneIndex: 3 },
  },
];
