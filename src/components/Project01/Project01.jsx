import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Project01/Project01.scss";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";

const DB = [
  {
    id: 1,
    title: "2022 BIFF",
    info: "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    url: "https://zoseeee.github.io/BIFF/",
  },
  {
    id: 2,
    title: "나이키 Nike",
    info: "본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너 등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. firebase를 통해서 사용자가 google 과 github를 통해 로그인 할수있으며, 사용자의 정보를 firebase에 realtime database에 저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한 cloudinary를 이용하여 사용자의 이미지를 저장을 할 수 있도록 구현하였습니다.",
    tools: "JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    url: "https://zoseeee.github.io/YouTube/",
  },
  {
    id: 3,
    title: "YouTube",
    info: "유튜브 사이트를 클론코딩하였습니다. 검색기능, 비디오 클릭시 상세화면으로 이동 등을 구현하였습니다.",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    url: "https://zoseeee.github.io/YouTube/",
  },

  {
    id: 4,
    title: "Find Golden Snitch!",
    info: "해리포터의 퀴디치 경기를 테마로 한 게임입니다. 골든 스위치 10개를 찾으면 게임 CLEAR !",
    tools: "JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    url: "https://zoseeee.github.io/YouTube/",
  },
  {
    id: 5,
    title: "Business Card Maker",
    info: "Card Maker입니다. Firebase를 이용해 로그인 기능을 구현하였고...",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    url: "https://zoseeee.github.io/YouTube/",
  },
  {
    id: 6,
    title: "2022 PORTFOLIO",
    info: "2022년 포트폴리오 사이트입니다.",
    tools: "REACT / JavaScript / HTML5 / CSS / Figma / 개인작업 100%",
    url: "https://zoseeee.github.io/YouTube/",
  },
];

const Project01 = () => {
  const [swiper, setSwiper] = useState(null);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation.update();
    },
    onSwiper: setSwiper,
  };

  return (
    <section className="project01 sec" id="project">
      <h2>MY PROJECT</h2>
      <ul className="lnb">
        <li>
          <NavLink
            className={({ isActive }) =>
              "navLink" + (isActive ? ".active" : "")
            }
            to="/"
          >
            01
            <span> PROJECT</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "navLink" + (isActive ? ".active" : "")
            }
            to="/project02"
          >
            02
            <span
            // className={({ isActive }) => "navLink" + (isActive ? ".on" : "")}
            >
              Web Design
            </span>
          </NavLink>
        </li>
      </ul>
      <Swiper
        {...swiperParams}
        ref={setSwiper}
        loop={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        {DB.map((slide, IDX) => (
          <SwiperSlide className="slide" key={slide.id}>
            <figure className="item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./images/project_0" +
                  (IDX + 1) +
                  ".png"
                }
                alt=""
              />
              <div className="des-wrapper">
                <div className="des">
                  <div className="title">
                    <h3>{slide.title}</h3>
                    <p className="tools">{slide.tools}</p>
                  </div>
                  <div className="button-wrapper">
                    <button>
                      <a
                        href={slide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WebPage
                      </a>
                    </button>
                    <button>
                      <a
                        href={slide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        ))}
        <div className="swiper-button">
          <button ref={navigationPrevRef} className="prevBtn">
            🡐
          </button>
          <button ref={navigationNextRef} className="nextBtn">
            🡒
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Project01;
