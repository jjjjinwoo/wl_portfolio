"use strict";

// *스크롤 트리거 불러오기(플러그인 안정화)

gsap.registerPlugin(ScrollTrigger);

// 색상 변수 <- 블랙, 화이트 바꿀 때 이거 수정!!

const firstColor = "black";
const secondColor = "white";

// *섹션1: 타이핑 애니메이션

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

// *섹션1: 스크롤에 따라 움직이는 메인 타이틀

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

// *섹션2, 섹션3: 배경 반전

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

// *섹션4: 배경 반전

gsap.to(".sec4 .reverse-box", {
  scrollTrigger: {
    trigger: ".sec3",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 1,
  },
  opacity: 0,
});

// *섹션5: 영역 펼쳐지는 이벤트

gsap.to(".sec5 .visual-box", {
  scrollTrigger: {
    trigger: ".sec5",
    start: "0% 50%",
    end: "0% 50%",
    scrub: 1,
  },
  clipPath: "polygon(0% 0%, 85% 0, 100% 100%, 100% 100%, 0% 100%)",
});

gsap.to(".sec5 .main-box", {
  scrollTrigger: {
    trigger: ".sec5",
    start: "0% 50%",
    end: "100% 50%",
    scrub: 1,
    // markers: true,
  },
  "column-gap": "20px",
});

// *섹션5: 슬라이더

$(document).ready(function () {
  $(".sec5 .slider.main").slick({
    draggable: false,
    arrows: false,
    fade: true,
    speed: 0,
    asNavFor: ".sec5 .slider.sub1",
  });

  const sec5ColorIcon = document.querySelectorAll(".sec5 .main-box i");
  const sec5TextIcon = document.querySelectorAll(".sec5 .main-box span");

  $(".sec5 .slider.main").on("beforeChange", function () {
    for (var i = 0; i < sec5ColorIcon.length; i++) {
      sec5ColorIcon[i].style.display = "none";
    }
    for (var i = 0; i < sec5TextIcon.length; i++) {
      sec5TextIcon[i].style.display = "none";
    }
  });
  $(".sec5 .slider.main").on("afterChange", function () {
    for (var i = 0; i < sec5ColorIcon.length; i++) {
      sec5ColorIcon[i].style.display = "block";
    }
    for (var i = 0; i < sec5TextIcon.length; i++) {
      sec5TextIcon[i].style.display = "block";
    }
  });

  $(".sec5 .slider.sub1").slick({
    // draggable: false,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: ".sec5 .slider.main",
  });
});
