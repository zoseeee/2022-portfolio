import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import "./css/app.scss";
import { Route, Routes } from "react-router-dom";
import Project01 from "./components/Project01/Project01";
import Project02 from "./components/Project02/Project02";
import About from "./components/About/About";

const App = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  });

  // LoadingPage 포함
  // return load === true ? (
  //   <LoadingPage />
  // ) : (
  //   <div className="wrapper">
  //     <Header />
  //     <Intro />
  //     <Routes>
  //       <Route path="/" element={<Project01 />} />
  //       <Route path="/project02" element={<Project02 />} />
  //     </Routes>
  //     <About />
  //   </div>
  // );

  return (
    <div className="wrapper">
      <Header />
      <Intro />
      <Routes>
        <Route path="/" element={<Project01 />} />
        <Route path="/project02" element={<Project02 />} />
      </Routes>
      <About />
    </div>
  );
};

export default App;
