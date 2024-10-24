"use strict";

// *스크롤 트리거 불러오기(플러그인 안정화)

gsap.registerPlugin(ScrollTrigger);

// 색상 변수

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

// *섹션2, 섹션3: 배경 반전

gsap.to(".sec1 .black-box", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 2,
  },
  backgroundColor: firstColor,
});

gsap.to(".sec2", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 2,
  },
  backgroundColor: firstColor,
});

gsap.to(".sec3", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 2,
    onEnter: () => {
      objects.forEach((body) => Composite.remove(engine.world, body));
      createObjects(sectionWidth, sectionHeight);
    },
  },
  backgroundColor: secondColor,
});

gsap.to(".sec3 .reverse-box", {
  scrollTrigger: {
    trigger: ".sec3",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 2,
  },
  opacity: 1,
});

// *섹션4: 배경 반전

gsap.to(".sec4 .reverse-box", {
  scrollTrigger: {
    trigger: ".sec3",
    start: "100% 50%",
    end: "100% 50%",
    scrub: 2,
  },
  opacity: 0,
});

// *섹션6: 디테일 텍스트 페이드인 - 스크롤 트리거

gsap.to(".sec6 .mobile-box.third .detail", {
  scrollTrigger: {
    trigger: ".sec6",
    start: "20% 50%",
    end: "20% 50%",
    scrub: 2,
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec6 .mobile-box.first .detail", {
  scrollTrigger: {
    trigger: ".sec6",
    start: "70% 50%",
    end: "70% 50%",
    scrub: 2,
  },
  opacity: 1,
  transform: "translateY(0px)",
});

// *섹션7: 가로 스크롤

let items = gsap.utils.toArray(".items"),
  pageWrapper = document.querySelector(".sec7");

items.forEach((container, i) => {
  let localItems = container.querySelectorAll(".item"),
    distance = () => {
      let lastItemBounds =
          localItems[localItems.length - 1].getBoundingClientRect(),
        containerBounds = container.getBoundingClientRect();
      return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
  gsap.to(container, {
    x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "bottom bottom",
      pinnedContainer: pageWrapper,
      end: () => "+=" + distance(),
      pin: pageWrapper,
      scrub: true,
      invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
    },
  });
});
