window.addEventListener("DOMContentLoaded", main);

function main() {
  renderScene();
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

  // När gingerbread får synas
  gingerVisibility(activeSceneIndex);

  if (activeSceneIndex > 0) {
    btnBack.style.display = "block";
  } else {
    btnBack.style.display = "none";
  }

  if (activeSceneIndex !== 0) {
    btnQuiz.style.display = "none";
  } else {
    btnQuiz.style.display = "flex";
  }

  btn1.onclick = function () {
    goToNextScene(scene.button1.nextSceneIndex);
  };
  btn2.onclick = function () {
    goToNextScene(scene.button2.nextSceneIndex);
  };
  btnBack.onclick = function () {
    gotoPreviousScene();
  };
  // btnQuiz.onclick = function goToQuiz() {};

  //img-element
  const imageContainer = document.getElementById("imgContainer");

  const image = document.createElement("img");
  image.src = scene.background;
  image.alt = "scene background";
  image.classList.add("sceneImg");
  //imageContainer.append(image);

  //så bakgrundsbilden inte repeatar - funkade inte i CSS
  document.body.style.backgroundImage = `url('${scene.background}')`;
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

// Allt för pepparkakan

let gingerX = 0;
let gingerY = 0;
let isDrag = false;

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

DragDrop();

// JULKULOR
//     ++ LÄGG TILL btn1.onclick = function (btn1 är typ JA -- och då är functionen huggagran ett if o else blir nextscenIndex)
function placeCircle(event) {
  if (activeSceneIndex === 3) {
    console.log(event.x, event.y);
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    document.body.append(circle);
  }
}

document.addEventListener("click", placeCircle);

// document.getElementById("btnQuiz").addEventListener("click", goToQuiz);
// btnQuiz.onclick;
// function goToQuiz() {
//   const goToQuiz = activeSceneIndex === 4;
// }
