"use strict";

// *스크롤 트리거 불러오기(플러그인 안정화)

gsap.registerPlugin(ScrollTrigger);

// *lenis

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// *섹션1: 스크롤에 따라 움직이는 메인 타이틀

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
    gsap.to(".work-view-content-add #wa-main-title .wa-title", {
      scrollTrigger: {
        trigger: ".work-view-content-add .work-add-sec1",
        start: "0% 0%",
        end: "140% 100%",
        scrub: 1,
      },
      scale: 0.4,
      transform: "translateY(80px)",
    });
  },
});

gsap.to(".work-view-content-add #wa-main-title", {
  scrollTrigger: {
    trigger: ".work-view-content-add .work-add-sec1",
    start: "0% 0%",
    end: "100% 50%",
    scrub: 1,
  },
  top: "50vh",
});

// *섹션1: 타이핑 애니메이션

const content = "네오팜샵 쇼핑몰 구축";
const text = document.querySelector(
  ".work-view-content-add #wa-main-title .sub"
);
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 200);

// *섹션4: 이미지 슬라이드

var swiperSec4 = new Swiper(
  ".work-view-content-add .work-add-sec4 .swiper-container",
  {
    loopedSlides: 1,
    autoplay: {
      delay: 2000,
    },
    speed: 2000,
    loop: true,
    effect: "fade",
  }
);

// *섹션5: 슬라이더

const sec5ColorIcon = document.querySelectorAll(
  ".work-view-content-add .work-add-sec5 .main-box i"
);
const sec5TextIcon = document.querySelectorAll(
  ".work-view-content-add .work-add-sec5 .main-box span"
);
const sec5VisualBox = document.querySelector(
  ".work-view-content-add .work-add-sec5 .visual-box"
);

var swiperSec5 = new Swiper(
  ".work-view-content-add .work-add-sec5 .swiper-container",
  {
    loopedSlides: 1,
    // allowTouchMove: false,
    threshold: 100,
    loop: true,
    effect: "fade",
    controller: {
      control: textSwiperSec5,
    },
    on: {
      slideChangeTransitionStart: function () {
        for (var i = 0; i < sec5ColorIcon.length; i++) {
          sec5ColorIcon[i].style.display = "none";
        }
        for (var i = 0; i < sec5TextIcon.length; i++) {
          sec5TextIcon[i].style.display = "none";
        }
        sec5VisualBox.style.clipPath =
          "polygon(0% 0%, -15% 0px, 0% 100%, 100% 100%, 0% 100%)";
        sec5VisualBox.style.transition = "0.5s";

        setTimeout(() => {
          sec5VisualBox.style.clipPath =
            "polygon(0% 0%, 85% 0, 100% 100%, 100% 100%, 0% 100%)";
        }, 500);

        setTimeout(() => {
          sec5VisualBox.style.transition = "none";
        }, 1000);
      },
      slideChangeTransitionEnd: function () {
        setTimeout(() => {
          for (var i = 0; i < sec5ColorIcon.length; i++) {
            sec5ColorIcon[i].style.display = "block";
          }
          for (var i = 0; i < sec5TextIcon.length; i++) {
            sec5TextIcon[i].style.display = "block";
          }
        }, 500);
      },
    },
  }
);

var textSwiperSec5 = new Swiper(
  ".work-view-content-add .work-add-sec5 .text-swiper",
  {
    loopedSlides: 1,
    allowTouchMove: false,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    controller: {
      control: swiperSec5,
    },
    on: {
      slideChangeTransitionStart: function () {
        for (var i = 0; i < sec5ColorIcon.length; i++) {
          sec5ColorIcon[i].style.display = "none";
        }
        for (var i = 0; i < sec5TextIcon.length; i++) {
          sec5TextIcon[i].style.display = "none";
        }
        sec5VisualBox.style.clipPath =
          "polygon(0% 0%, -15% 0px, 0% 100%, 100% 100%, 0% 100%)";
        sec5VisualBox.style.transition = "0.5s";

        setTimeout(() => {
          sec5VisualBox.style.clipPath =
            "polygon(0% 0%, 85% 0, 100% 100%, 100% 100%, 0% 100%)";
        }, 500);

        setTimeout(() => {
          sec5VisualBox.style.transition = "none";
        }, 1000);
      },
      slideChangeTransitionEnd: function () {
        setTimeout(() => {
          for (var i = 0; i < sec5ColorIcon.length; i++) {
            sec5ColorIcon[i].style.display = "block";
          }
          for (var i = 0; i < sec5TextIcon.length; i++) {
            sec5TextIcon[i].style.display = "block";
          }
        }, 500);
      },
    },
  }
);

swiperSec5.controller.control = textSwiperSec5;
textSwiperSec5.controller.control = swiperSec5;

// *섹션5: 영역 펼쳐지는 이벤트

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
    gsap.to(".work-view-content-add .work-add-sec5 .visual-box", {
      scrollTrigger: {
        trigger: ".work-add-sec5",
        start: "0% 50%",
        end: "0% 50%",
        scrub: 1,
      },
      clipPath: "polygon(0% 0%, 85% 0, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(".work-view-content-add .work-add-sec5 .main-box", {
      scrollTrigger: {
        trigger: ".work-add-sec5",
        start: "0% 50%",
        end: "100% 50%",
        scrub: 1,
        // markers: true,
      },
      "column-gap": "10px",
    });
  },
});

// *섹션6: 디테일 텍스트 페이드인 - 스크롤 트리거

gsap.to(".work-view-content-add .work-add-sec6 .mobile-box.third .detail", {
  scrollTrigger: {
    trigger: ".work-add-sec6",
    start: "20% 50%",
    end: "20% 50%",
    scrub: 2,
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec6 .mobile-box.first .detail", {
  scrollTrigger: {
    trigger: ".work-add-sec6",
    start: "70% 50%",
    end: "70% 50%",
    scrub: 2,
  },
  opacity: 1,
  transform: "translateY(0px)",
});

// 섹션6: 모바일 스크롤 트리거

gsap.to(".work-view-content-add .work-add-sec6.mob .img-area.second", {
  scrollTrigger: {
    trigger: ".work-add-sec6.mob",
    start: "50% 50%",
    end: "50% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec6.mob .img-area.third", {
  scrollTrigger: {
    trigger: ".work-add-sec6.mob",
    start: "70% 50%",
    end: "70% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

// *섹션7: 가로 스크롤

let items = gsap.utils.toArray(".work-view-content-add .items"),
  pageWrapper = document.querySelector(".work-view-content-add .work-add-sec7");

items.forEach((container, i) => {
  let localItems = container.querySelectorAll(".work-view-content-add .item"),
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

// 섹션7: 모바일 스크롤 트리거

gsap.to(".work-view-content-add .work-add-sec7.mob .img-area.first", {
  scrollTrigger: {
    trigger: ".work-add-sec7.mob",
    start: "0% 50%",
    end: "0% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec7.mob .img-area.second", {
  scrollTrigger: {
    trigger: ".work-add-sec7.mob",
    start: "20% 50%",
    end: "20% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec7.mob .img-area.third", {
  scrollTrigger: {
    trigger: ".work-add-sec7.mob",
    start: "40% 50%",
    end: "40% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec7.mob .img-area.fourth", {
  scrollTrigger: {
    trigger: ".work-add-sec7.mob",
    start: "60% 50%",
    end: "60% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

// *섹션8: 스크롤 트리거 콜백 함수

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
    gsap.to(".work-add-sec8", {
      scrollTrigger: {
        trigger: ".work-add-sec8",
        start: "40% 50%",
        end: "40% 50%",
        onEnter: sec8FadeIn,
      },
    });

    const sec8Con = document.querySelector(
      ".work-view-content-add .work-add-sec8.pc .wa-con"
    );

    function sec8FadeIn() {
      sec8Con.style.opacity = 1;
      sec8Con.style.display = "flex";
    }

    gsap.to(".work-view-content-add .work-add-sec8", {
      scrollTrigger: {
        trigger: ".work-view-content-add .work-add-sec8",
        start: "0% 50%",
        end: "0% 50%",
        onEnterBack: sec8FadeOut,
      },
    });

    function sec8FadeOut() {
      sec8Con.style.opacity = 0;
      setTimeout(() => {
        sec8Con.style.display = "none";
      }, 500);
    }
  },
});

// *섹션8: 모바일 스크롤 트리거 콜백 함수

gsap.to(".work-view-content-add .work-add-sec8.mob .solution.first", {
  scrollTrigger: {
    trigger: ".work-view-content-add .work-add-sec8.mob",
    start: "0% 50%",
    end: "0% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec8.mob .solution.second", {
  scrollTrigger: {
    trigger: ".work-view-content-add .work-add-sec8.mob",
    start: "30% 50%",
    end: "30% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".work-view-content-add .work-add-sec8.mob .solution.third", {
  scrollTrigger: {
    trigger: ".work-add-sec8.mob",
    start: "60% 50%",
    end: "60% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});
