"use strict";

// *스크롤 트리거 불러오기(플러그인 안정화)

gsap.registerPlugin(ScrollTrigger);

// 색상 변수

const firstColor = "black";
const secondColor = "white";

// *섹션1 타이핑

const content = "네오팜샵 쇼핑몰 구축";
const text = document.querySelector("#main-title .sub");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 200);

// *섹션1 메인 타이틀

gsap.to("#main-title", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
  },
  top: "50vh",
});

gsap.to("#main-title .title", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "0% 0%",
    end: "140% 100%",
    scrub: 1,
  },
  scale: 0.4,
  transform: "translateY(80px)",
});

// *섹션2, 섹션3 배경 반전

gsap.to(".sec1 .black-box", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 1,
  },
  backgroundColor: firstColor,
});

gsap.to(".sec2", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 1,
  },
  backgroundColor: firstColor,
});

gsap.to(".sec3", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 1,
  },
  backgroundColor: secondColor,
});

gsap.to(".sec3 .reverse-box", {
  scrollTrigger: {
    trigger: ".sec3",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 1,
  },
  opacity: 1,
});

// *섹션4

gsap.to(".sec4 .reverse-box", {
  scrollTrigger: {
    trigger: ".sec3",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 1,
  },
  opacity: 0,
});

// *섹션5

gsap.to(".sec5 .visual-box", {
  scrollTrigger: {
    trigger: ".sec5",
    start: "0% 50%",
    end: "10% 50%",
    scrub: 1,
  },
  clipPath: "polygon(0% 0%, 85% 0, 100% 100%, 100% 100%, 0% 100%)",
});

gsap.to(".sec5 .visual-box", {
  scrollTrigger: {
    trigger: ".sec5",
    start: "10% 50%",
    end: "50% 50%",
    scrub: 1,
    onEnter: sec5Enter,
  },
  width: "58%",
});

const sec5ColorIcon = document.querySelectorAll(".sec5 .main-box i");

function sec5Enter() {
  for (var i = 0; i < sec5ColorIcon.length; i++) {
    sec5ColorIcon[i].style.display = "block";
  }
}
