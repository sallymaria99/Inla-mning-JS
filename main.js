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

  const scene = scenes[activeSceneIndex];

  document.body.style.backgroundImage = `url('${scene.background}')`;
  text.textContent = scene.text;
  btn1.textContent = scene.button1.text;
  btn2.textContent = scene.button2.text;

  // Synlighet av ginger
  gingerVisibility(activeSceneIndex);

  if (activeSceneIndex > 0) {
    btnBack.style.display = "block";
  } else {
    btnBack.style.display = "none";
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

// gingerContainers.forEach((container, index) => {
//   if (index === sceneIndex) {
//     gingercontainer.classList.add("visible");
//   } else {
//     container.classList.remove("visible");
//   }
// });

function huggaGran() {}

// let granHuggen = false;

// function huggaGran() {
//   if (!granHuggen) {
//     let huggChans = Math.random();
//   } else if (huggChans > 0.5) {
//     granHuggen = true;
//     document.getElementById("bakgrund").style.backgroundImage =
//       "url('img/huggen.png')";
//   }
// }
