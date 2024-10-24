"use strict";

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
  },
});

gsap.to("#main-title", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
  },
  top: "50vh",
});

// *섹션4: 이미지 슬라이드

$(document).ready(function () {
  $(".sec4 .img-box").slick({
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    fade: true,
  });
});

// *섹션5: 영역 펼쳐지는 이벤트

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
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
      "column-gap": "10px",
    });
  },
});

// *섹션5: 슬라이더

$(document).ready(function () {
  $(".sec5 .slider.main").slick({
    // draggable: false,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: true,
    speed: 500,
    asNavFor: ".sec5 .slider.sub1",
  });

  const sec5ColorIcon = document.querySelectorAll(".sec5 .main-box i");
  const sec5TextIcon = document.querySelectorAll(".sec5 .main-box span");
  const sec5VisualBox = document.querySelector(".sec5 .visual-box");

  $(".sec5 .slider.main").on("beforeChange", function () {
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
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: true,
    fade: true,
    speed: 1000,
    arrows: false,
    dots: true,
    asNavFor: ".sec5 .slider.main",
  });
});

// 섹션6: 모바일 스크롤 트리거

gsap.to(".sec6.mob .img-area.second", {
  scrollTrigger: {
    trigger: ".sec6.mob",
    start: "50% 50%",
    end: "50% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec6.mob .img-area.third", {
  scrollTrigger: {
    trigger: ".sec6.mob",
    start: "70% 50%",
    end: "70% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

// 섹션7: 모바일 스크롤 트리거

gsap.to(".sec7.mob .img-area.first", {
  scrollTrigger: {
    trigger: ".sec7.mob",
    start: "0% 50%",
    end: "0% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec7.mob .img-area.second", {
  scrollTrigger: {
    trigger: ".sec7.mob",
    start: "20% 50%",
    end: "20% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec7.mob .img-area.third", {
  scrollTrigger: {
    trigger: ".sec7.mob",
    start: "40% 50%",
    end: "40% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec7.mob .img-area.fourth", {
  scrollTrigger: {
    trigger: ".sec7.mob",
    start: "60% 50%",
    end: "60% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

// *섹션8: 스크롤 트리거 콜백 함수

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
    gsap.to(".sec8", {
      scrollTrigger: {
        trigger: ".sec8",
        start: "40% 50%",
        end: "40% 50%",
        onEnter: sec8FadeIn,
      },
    });

    const sec8Con = document.querySelector(".sec8.pc .container");

    function sec8FadeIn() {
      sec8Con.style.opacity = 1;
      sec8Con.style.display = "flex";
    }

    gsap.to(".sec8", {
      scrollTrigger: {
        trigger: ".sec8",
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

gsap.to(".sec8.mob .solution.first", {
  scrollTrigger: {
    trigger: ".sec8.mob",
    start: "0% 50%",
    end: "0% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec8.mob .solution.second", {
  scrollTrigger: {
    trigger: ".sec8.mob",
    start: "30% 50%",
    end: "30% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});

gsap.to(".sec8.mob .solution.third", {
  scrollTrigger: {
    trigger: ".sec8.mob",
    start: "60% 50%",
    end: "60% 50%",
  },
  opacity: 1,
  transform: "translateY(0px)",
});
