import React from "react";
import { Link } from "react-scroll/modules";
import TypeIt from "typeit-react";
import "../Intro/Intro.scss";

const Home = () => {
  return (
    <section className="home sec" id="home">
      <div className="wrapper">
        <div className="title hide">
          <p>
            <span>IM</span> ANTIFRAGILE
          </p>
          <p className="sub">
            : anti(반대) + fragile(부서지기 쉬운)의 합성어로, 시련을 맞을수록
            더욱 단단해진다는 뜻
          </p>
        </div>
        <div className="lng">
          <TypeIt
            options={{
              speed: 150,
              waitUntilVisible: true,
            }}
            getBeforeInit={(instance) => {
              instance
                .pause(800)
                .type("실패를 원동력으로 성장하는🚀 ")
                .pause(1000)
                .type("프론트엔드 개발자 이정은입니다.");
              // Remember to return it!
              return instance;
            }}
          ></TypeIt>
        </div>
      </div>
      <Link to="project" smooth="true" duration={1000}>
        <button>CLICK</button>
      </Link>
    </section>
  );
};

export default Home;
