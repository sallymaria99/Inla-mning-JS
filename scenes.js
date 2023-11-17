let activeSceneIndex = 0;
const scenes = [
  {
    background: "img/Start.png",
    text: " Hej, kul att du vill fira jul med oss! Vi har mycket att förbereda och du måste hjälpa oss. Vill du gå till skogen för att hugga en gran eller gå in i huset?",
    button1: { text: "Gå till skogen", nextSceneIndex: 1 },
    button2: { text: "Gå in i huset", nextSceneIndex: 3 },
    button3: { text: "JULQUIZ", nextSceneIndex: 6 },
  },
  {
    background: "img/forest.png",
    text: "Nu är du i skogen. Kan du hjälpa mig hugga en gran? Klicka på",
    button1: { text: "Hugga gran", nextSceneIndex: 2 },
    button2: { text: "Gå in i huset", nextSceneIndex: 3 },
    button3: { text: "Gå till start", nextSceneIndex: 0 },
  },
  {
    background: "img/HugGran.png",
    text: "Bra jobbat!! Nu är granen huggen, jag tar med mig den till huset, följ med mig! Jag behöver mer hjälp inne i huset.",
    button1: { text: "Gå till vardagsrummet", nextSceneIndex: 3 },
    button2: { text: "Gå till köket", nextSceneIndex: 4 },
    button3: { text: "Gå till start", nextSceneIndex: 0 },
  },
  {
    background: "img/vardagsrum.png",
    text: "Nu är vi i vardagsrummet och jag har satt upp granen. Hjälp mig nu med att dekorera granen. Klicka på knappen för att sedan klicka med musen på granen där du vill hänga upp julkulor.",
    button1: { text: "Dekorera granen" },
    button2: { text: "Gå till köket", nextSceneIndex: 4 },
    button3: { text: "Gå till start", nextSceneIndex: 0 },
  },
  {
    background: "img/kitchen.png",
    text: "Nu är vi i köket, varsågod ta en pepparkaka",
    button1: { text: "Gör ett quiz" },
    button2: { text: "Gå till vardagsrummet", nextSceneIndex: 3 },
    button3: { text: "Avsluta julvärlden", nextSceneIndex: 5 },
  },
  {
    background: "green",
    text: "Tack för att du har hälsat på och hjälpt mig förbereda julen!",
    button1: { text: "Gör quiz", nextSceneIndex: 6 },
    button2: { text: "" },
    button3: { text: "" },
  },

  // QUIZ
  {
    background: "red",
    text: "Håll i hatten, för nu blir det quiz! Är du redo? Fyll i ditt svar och klicka på 'svara' för att komma igång.",
    button1: { text: "JA", nextSceneIndex: -1 },
    button2: { text: "Nej", nextSceneIndex: -1 },
    button3: { text: "Avsluta", nextSceneIndex: 0 },
    isQuiz: true,
    correctAnswer: "JA",
  },
  {
    background: "red",
    text: "Vilket år sändes adventskalendern 'Dieselråttor och sjömansmöss'?",
    button1: { text: "1998", nextSceneIndex: -1 },
    button2: { text: "2000", nextSceneIndex: -1 },
    button3: { text: "2002", nextSceneIndex: -1 },
    isQuiz: true,
    correctAnswer: "2002",
  },
  {
    background: "red",
    text: "Vad är årets julklapp?",
    button1: {
      text: "Månadsgivare för hjälporganisation",
      nextSceneIndex: -1,
    },
    button2: { text: "Sällskapsspel", nextSceneIndex: -1 },
    button3: { text: "Presentkort på mataffär", nextSceneIndex: -1 },
    isQuiz: true,
    correctAnswer: "Sällskapsspel",
  },
  {
    background: "red",
    text: "Hur många gånger har Gävlebocken brunnit?",
    button1: { text: "45", nextSceneIndex: -1 },
    button2: { text: "30", nextSceneIndex: -1 },
    button3: { text: "23", nextSceneIndex: -1 },
    isQuiz: true,
    correctAnswer: "30",
  },
  {
    background: "red",
    text: "I 'Sunes jul' har Håkan i en scen plötsligt blivit väldigt lång... Vad är det Håkan har stoppat i strumporna?",
    button1: { text: "Knäck", nextSceneIndex: -1 },
    button2: { text: "Choklad", nextSceneIndex: -1 },
    button3: { text: "Pepparkaksdeg", nextSceneIndex: -1 },
    isQuiz: true,
    correctAnswer: "Pepparkaksdeg",
  },
];

// Skapa en refresh på aktuella sidan jag är på
// On click
// Quiz
// Styling
