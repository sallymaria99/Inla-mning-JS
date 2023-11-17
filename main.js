window.addEventListener("DOMContentLoaded", main);

let button1Clicked = false;
let gingerX = 0;
let gingerY = 0;
let isDrag = false;

function main() {
  renderScene();
  DragDrop();
}
// Funktion fär att komma till de olika scenerna
function renderScene() {
  const text = document.getElementById("text");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btnBack = document.getElementById("btnBack"); //tillbaka-knapp
  const btn3 = document.getElementById("btn3");

  const scene = scenes[activeSceneIndex];

  document.body.style.backgroundImage = `url('${scene.background}')`;
  text.textContent = scene.text;
  btn1.textContent = scene.button1.text;
  btn2.textContent = scene.button2.text;
  btn3.textContent = scene.button3.text;

  // När gingerbread får synas
  gingerVisibility(activeSceneIndex);

  if (scene.isQuiz) {
    document.body.classList.add("quizMode");
  } else {
    document.body.classList.remove("quizMode");
  }

  if (activeSceneIndex > 0) {
    btnBack.style.display = "block";
  } else {
    btnBack.style.display = "none";
  }

  btn1.onclick = function (event) {
    if (activeSceneIndex === 3) {
      placeCircle(event);
      button1Clicked = true;
    } else {
      goToNextScene(scene.button1.nextSceneIndex);
    }
  };
  btn2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };
  btn3.onclick = function () {
    goToNextScene(scene.button3.nextSceneIndex);
  };
  btnBack.onclick = function () {
    gotoPreviousScene();
  };

  if (scene.isQuiz) {
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn1.textContent = scene.button1.text;
    btn2.textContent = scene.button2.text;
    btn3.textContent = scene.button3.text;

    btn1.onclick = function () {
      handleQuizAnswer(scene.button1);
    };
    btn2.onclick = function () {
      handleQuizAnswer(scene.button2);
    };
    btn3.onclick = function () {
      handleQuizAnswer(scene.button3);
    };
  }

  function handleQuizAnswer(selectedButton) {
    const isCorrect = selectedButton.isCorrect;
    if (isCorrect) {
      alert("Rätt svar!");
      goToNextScene(selectedButton.nextSceneIndex);
    } else {
      alert("Fel svar, försök igen!");
    }
  }

  //img-element
  const imageContainer = document.getElementById("imgContainer");

  const image = document.createElement("img");
  image.src = scene.background;
  image.alt = "scene background";
  image.classList.add("sceneImg");
  //imageContainer.append(image);

  //så bakgrundsbilden inte repeatar - funkade inte i CSS
  document.body.style.backgroundImage = `url('${scene.background}') no-repeat`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene();
}

function gotoPreviousScene() {
  if (activeSceneIndex > 0) {
    activeSceneIndex--;
    renderScene();
  }
}

// Så pepparkakan bara visas i köket
function gingerVisibility(sceneIndex) {
  const gingerContainers = document.querySelectorAll(".gingerContainerKitchen");

  gingerContainers.forEach((container) => {
    container.classList.remove("visible");
  });

  if (sceneIndex === 4) {
    gingerContainers.forEach((container) => {
      container.classList.add("visible");
    });
  }
}

// Pepparkaka som man kan greppa och dra/placera vart man vill
function DragDrop() {
  const ginger = document.getElementById("gingerbread");

  ginger.addEventListener("mousedown", function (e) {
    isDrag = true;

    gingerX = e.clientX - ginger.offsetLeft;
    gingerY = e.clientY - ginger.offsetTop;

    e.preventDefault();
  });

  document.addEventListener("mousemove", function (e) {
    if (isDrag) {
      ginger.style.left = e.clientX - gingerX + "px";
      ginger.style.top = e.clientY - gingerY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDrag = false;
  });

  ginger.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", "Gingerbread");

    e.dataTransfer.setData("gingerX", e.clientX);
    e.dataTransfer.setData("gingerY", e.clientY);
  });
  document.addEventListener("dragover", function (e) {
    e.preventDefault();

    gingerX = e.clientX - e.dataTransfer.getData("gingerX");
    gingerY = e.clientY - e.dataTransfer.getData("gingerY");

    ginger.style.left = gingerX + "px";
    ginger.style.top = gingerY + "px";
  });
}

// JULKULOR
function placeCircle(event) {
  if (activeSceneIndex === 3 && button1Clicked) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    document.body.append(circle);
  } else {
    clearCircles();
  }
}

// Så cirklarna försvinner när användaren byter rum
function clearCircles() {
  const activeCircles = document.querySelectorAll(".circle");
  activeCircles.forEach((circle) => {
    circle.remove();
  });
}

document.addEventListener("click", placeCircle);
