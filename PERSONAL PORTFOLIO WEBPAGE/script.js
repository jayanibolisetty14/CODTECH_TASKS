const typingText = document.querySelector(".typing");
const textList = ["Front-End Developer", "Web Designer"];
let index = 0;
let charIndex = 0;

function typingEffect() {
  if (charIndex < textList[index].length) {
    typingText.innerHTML += textList[index].charAt(charIndex);
    charIndex++;
    setTimeout(typingEffect, 100);
  } else {
    setTimeout(eraseEffect, 1000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.innerHTML = textList[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    index = (index + 1) % textList.length;
    setTimeout(typingEffect, 200);
  }
}

typingEffect();

window.addEventListener("scroll", reveal);

function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}