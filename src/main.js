let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");
let question = document.getElementById("text");
let img = document.getElementById("img-1")
let flag = false;
let index = 0;

yesButton.addEventListener("click", () => {
  question.innerText = "Sabia que dirias que si,  Te amo"
  img.src = "./public/image-2.gif"
  yesButton.style.display = "none";
  noButton.style.display = "none";
  question.style.fontSize = "100px";
})

const growButton = () => {
  let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = (currentSize * 1.5) + "px";
}

noButton.addEventListener("click", () => {
  let currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
  noButton.style.fontSize = (currentSize / 1.1) + "px";
  growButton();
  showMessage(index);
  changePic(index);
  index++;
})

function showMessage(index) {
  let messages = ["Estas segura?", "¿ya no me amas?", "yo te amo mucho:(", "terminaras diciendo que si porque me amas jijiji"];
  if (index < messages.length) {
    question.innerText = messages[index];
  }
}

function changePic(index) {
  let url = ["./public/image-3.png", "./public/image-4.gif", "./public/image-5.gif", "./public/image-6.gif"];
  if (index < url.length) {
    img.src = url[index];
  }
}
