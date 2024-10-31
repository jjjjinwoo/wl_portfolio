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
    end: "100% 50%",
    scrub: 1,
  },
  top: "50vh",
});

// *섹션4: 이미지 슬라이드

var swiperSec4 = new Swiper(".sec4 .swiper-container", {
  autoplay: {
    delay: 2000,
  },
  speed: 2000,
  loop: true,
  effect: "fade",
});

// *섹션5: 슬라이더

const sec5ColorIcon = document.querySelectorAll(".sec5 .main-box i");
const sec5TextIcon = document.querySelectorAll(".sec5 .main-box span");
const sec5VisualBox = document.querySelector(".sec5 .visual-box");

var swiperSec5 = new Swiper(".sec5 .swiper-container", {
  // allowTouchMove: false,
  threshold:100,
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
});

var textSwiperSec5 = new Swiper(".sec5 .text-swiper", {
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
});

swiperSec5.controller.control = textSwiperSec5;
textSwiperSec5.controller.control = swiperSec5;

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

//떨어지는 섹션

//matter.js
const dropKeySection = document.querySelector(".drop-key-section");
const wallThickness = 200; //벽 두께
var sectionWidth = dropKeySection.clientWidth;
var sectionHeight = dropKeySection.clientHeight;

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  Composite = Matter.Composite;
var engine = Engine.create();

var objects = []; // 모든 오브젝트를 저장할 배열

// 초기 값
var render = Render.create({
  element: dropKeySection,
  engine: engine,
  options: {
    width: sectionWidth,
    height: sectionHeight,
    pixelRatio: 1,
    background: "transparent",
    wireframes: false,
  },
});
function createCircleBody(x, y, size, colors) {
  // 두 가지 색상 중 하나를 랜덤으로 선택
  var fillStyle = colors[Math.floor(Math.random() * colors.length)];
  var strokeColor = fillStyle === "black" ? "white" : "black"; // 색상에 따라 외곽선 색상 설정

  var body = Bodies.circle(x, y, size / 2, {
    // size를 반지름으로 사용
    render: {
      fillStyle: fillStyle, // 랜덤 선택된 색상
      strokeStyle: strokeColor, // 외곽선 색상 설정
      lineWidth: 2, // 선 두께
    },
    isStatic: false,
    restitution: 0.5,
    friction: 0.2,
  });

  objects.push(body);
  return body;
}
// 아이템의 기본적인 설정 함수
function createTextBody(x, y, width, height, fillStyle, strokeColor) {
  var body = Bodies.rectangle(x, y, width, height, {
    chamfer: {
      radius: Math.min(height / 2, 60), // height에 비례한 radius 값 설정
    },
    render: {
      fillStyle: fillStyle,
      strokeStyle: strokeColor, // 외곽선 색상
      lineWidth: 2, // 선 두께
    },
    mass: 3, //공기저항 0.001이면 아예 저항이 없음 올리면서 수치변경
    isStatic: false, //true로 생성된 물체는 움직이지 않음
    restitution: 0.5, //반발 계수 - 벽 or 다른 물체와 충돌 시 팅김 정도
    friction: 0.2, //마찰 계수 - 다른 물체와 접촉할때 마찰력 정도
  });

  objects.push(body);
  return body;
}
let textWidth;

function createObjects(width, height) {
  objects = []; //배열 초기화 (반응형때 렌더링을 새로 한다면 필요 아니면 X)

  var black = "black";
  var white = "white";
  var red = "red";

  var bodyData = [
    {
      text: "AI 기반 추천 엔진",
      color: black,
      strokeColor: white,
      textColor: "white",
    },
    {
      text: "모바일 최적화",
      color: black,
      strokeColor: white,
      textColor: "white",
    },
    {
      text: "사용자 행동 분석",
      color: black,
      strokeColor: white,
      textColor: "white",
    },
    {
      text: "옴니채널 전략",
      color: white,
      strokeColor: black,
      textColor: "black",
    },
    {
      text: "개인화된 프로모션",
      color: white,
      strokeColor: black,
      textColor: "black",
    },
    {
      text: "맞춤형 쇼핑 경험",
      color: red,
      strokeColor: white,
      textColor: "white",
    },
  ];

  var centerX = sectionWidth / 2;
  var yStart = -200; // 화면 상단에서 시작

  var padding = 40; // 텍스트 주변에 추가할 패딩 값
  var height = Math.min(120, Math.max(50, width * 0.1)); // 창 크기에 따라 조정

  // 텍스트 오브젝트 생성
  bodyData.forEach((data, index) => {
    // 텍스트의 실제 너비 계산
    var textWidth = getTextWidth(data.text);

    // 아이템 너비는 텍스트의 너비에 패딩 값을 추가한 값으로 설정
    var itemWidth = textWidth + 80;

    var x = centerX + (Math.random() - 0.5) * 600;
    var y = yStart + index * 10;
    var body = createTextBody(
      x,
      y,
      itemWidth, // 텍스트에 패딩을 추가한 너비
      height,
      data.color,
      data.strokeColor // 외곽선 색상 설정
    );
    body.text = data.text; // 텍스트를 Body에 추가 (하지만 Matter.js 자체에서 렌더링하지 않음)
    body.textColor = data.textColor;
  });

  // 원형 오브젝트 추가 (검정색과 하얀색, 외곽선 반대 색상으로 설정)
  var circleColors = ["black", "white"]; // 두 가지 색상 (검정, 하양)
  for (var i = 0; i < 3; i++) {
    // 원하는 수만큼의 원형 오브젝트 생성

    var x = centerX + (Math.random() - 0.5) * width * 0.8; // 랜덤한 X 위치
    var y = yStart + i * 10;

    var circleBody = createCircleBody(
      x,
      y,
      height, // 텍스트와 동일한 크기로 설정
      circleColors // 두 가지 색상 전달
    );
  }
  Composite.add(engine.world, objects);
}

// 벽설정 위부터 X Y width 벽의 두께 wallThickness = 30으로 지정
// 바닥
var ground = Bodies.rectangle(
  sectionWidth / 2,
  sectionHeight + wallThickness / 2,
  sectionWidth,
  wallThickness + 3,
  { isStatic: true } //벽 고정
);
// 왼쪽벽
var leftWall = Bodies.rectangle(
  0 - wallThickness / 2,
  sectionHeight / 2,
  wallThickness,
  sectionHeight * 10, //*10은 마우스로 던질때 가끔 물체가 벽을 넘어서 사라지는 경우 때문에 그냥 높게 설정
  { isStatic: true }
);
// 오른쪽벽
var rightWall = Bodies.rectangle(
  sectionWidth + wallThickness / 2,
  sectionHeight / 2,
  wallThickness,
  sectionHeight * 10,
  { isStatic: true }
);
//벽생성
Composite.add(engine.world, [ground, leftWall, rightWall]);

//마우스 옵션중 가장 쉽게 찾을 수 있는 코드였으며 여러가지 더 있는 것으로 보임
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 1, //탄성 차이를 느끼기 위해 0.001로 설정
    render: {
      visible: false, //true라면 위의 값의 움직임을 눈으로 확인 가능
    },
  },
});
// 마우스 옵션 추가
Composite.add(engine.world, mouseConstraint);
//render가 완료된 후 renderText함수 실행
Events.on(render, "afterRender", renderText);

Render.run(render); //렌더 실행
var renner = Runner.create(); //러너 생성
Runner.run(renner, engine); //생성한 업데이트와 물리 엔진 업데이트
var fontSize = "clamp(14px, 2vw, 32px)";
function getTextWidth(text) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  context.font = `500 ${fontSize} Pretendard Variable`;
  return context.measureText(text).width;
}

// 텍스트 생성함수
function renderText() {
  var context = render.context;
  var bodies = Composite.allBodies(engine.world);
  //폰트 사이즈 조절
  var windowWidth = window.innerWidth;

  context.textAlign = "center";
  context.textBaseline = "middle";

  for (var i = 0; i < bodies.length; i++) {
    var body = bodies[i];
    if (body.text) {
      var centerX = body.position.x;
      var centerY = body.position.y;

      context.save();
      context.translate(centerX, centerY);
      context.rotate(body.angle);

      context.fillStyle = body.textColor || "white"; // 텍스트 색상
      context.font = `500 ${fontSize} Pretendard Variable`; // 폰트 설정
      context.fillText(body.text, 0, 0); // 텍스트 출력
      context.restore();
    }
  }
}
let resizeChkWindow = false,
  resizeChkWindow02 = false,
  resizeChktrigger = false;
function handleResize(dropKeySection) {
  // 리사이즈 시 창의 너비,높이 받아와서 캔버스 사이즈 변경
  sectionWidth = dropKeySection.clientWidth;
  sectionHeight = dropKeySection.clientHeight;
  render.canvas.width = sectionWidth;
  render.canvas.height = sectionHeight;
  //바닥의 위치 변경 setPosition(아이템,X,Y)
  Matter.Body.setPosition(
    ground, //아이템
    Matter.Vector.create(
      sectionWidth / 2, //X
      sectionHeight //Y
    )
  );
  //오른쪽 벽의 위치변경
  Matter.Body.setPosition(
    rightWall,
    Matter.Vector.create(sectionWidth + wallThickness / 2, sectionHeight / 2)
  );
  Composite.remove(engine.world, ground); // 기존 바닥 제거
  ground = Bodies.rectangle(
    sectionWidth / 2,
    sectionHeight + wallThickness / 2,
    sectionWidth,
    wallThickness,
    { isStatic: true }
  );
  Composite.add(engine.world, ground); // 새 바닥 추가

  //창크기가 1024보다 작을때
  if (sectionWidth < 1024 && !resizeChkWindow) {
    resizeChkWindow = true;
    resizeChkWindow02 = false;
    objects.forEach((body) => Composite.remove(engine.world, body));
    createObjects(sectionWidth, sectionHeight);
  }
  //창크기가 1024보다 클때
  if (sectionWidth >= 1024 && !resizeChkWindow02) {
    resizeChkWindow02 = true;
    resizeChkWindow = false;
    objects.forEach((body) => Composite.remove(engine.world, body));
    createObjects(sectionWidth, sectionHeight);
  }
}
// 초기창 크기 체크
if (sectionWidth < 1024 && !resizeChkWindow) {
  resizeChkWindow = true;
  resizeChkWindow02 = false;
}
if (sectionWidth >= 1024 && !resizeChkWindow02) {
  resizeChkWindow02 = true;
  resizeChkWindow = false;
}
window.addEventListener("resize", () => handleResize(dropKeySection));

createObjects(sectionWidth, sectionHeight);

// 마우스 포인터 스타일 변경을 위한 마우스 오버 이벤트 핸들러 추가
Events.on(mouseConstraint, "mousemove", function (event) {
  // 마우스 위치에서 해당하는 바디가 있는지 확인
  const bodiesUnderMouse = Matter.Query.point(objects, event.mouse.position);

  if (bodiesUnderMouse.length > 0) {
    // 바디가 있을 때 grab 커서 스타일 적용
    dropKeySection.style.cursor = "grab";
  } else {
    // 마우스 포인터가 텍스트 바디 외부에 있을 때 기본 스타일로 되돌림
    dropKeySection.style.cursor = "default";
  }
});

// 아이템을 드래그하는 중 커서를 'grabbing'으로 변경
Events.on(mouseConstraint, "startdrag", function () {
  dropKeySection.style.cursor = "grabbing";
});

// 드래그가 끝나면 커서를 'default'로 되돌림
Events.on(mouseConstraint, "enddrag", function () {
  dropKeySection.style.cursor = "default";
});
