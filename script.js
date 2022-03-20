"use strict";

gsap.registerPlugin(ScrollTrigger);
let text = document.querySelector("#section_one h1");
text.innerHTML = spanWrapper(text.textContent);

window.addEventListener("DOMContentLoaded", start);

function start(){
    document.querySelector(".navigation").addEventListener("click", toggleMenu);
    // element scolls in the same time when you scroll - this one is nice and smooth :))
    gsap.to(".pic_1", { scrollTrigger: { trigger: "#the_div", scrub: true, pin: true, start: "top center" }, rotate: 360});

    // opacity on section two
    gsap.to("#section_two", { scrollTrigger: { trigger: "h2", scrub: true, start: "top center" }, opacity: 1});

    // opacity on section three
    gsap.to("#section_three", { scrollTrigger: { trigger: "#section_three h2", scrub: true, start: "top center" }, opacity: 1});

    // Fade in letters in h1
    gsap.from("span", {x: 400, opacity: 0, duration: 1, stagger: {amount: 1}});

}
function spanWrapper(text) {
  const textArr = text.split("");
  textArr.forEach((element, i, arr) => {
    arr[i] = `<span>${element}</span>`;
  });
  console.log(textArr);
  return textArr.join("");
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector(".menu").classList.toggle("hidden");
  let erSkjult = document.querySelector(".menu").classList.contains("hidden");
  if (erSkjult == true) {
    document.querySelector(".menu_button").textContent = "☰";
  } else {
    document.querySelector(".menu_button").textContent = "✕";
  }
}
