import React, { useEffect, useState } from "react";
import "../LoadingPage/LoadingPage.scss"

const DB = ["", "", "WELCOME", "TO", "MY", "2022", "PORTFOLIO"];

const LoadingPage = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const shuffle = () => {
      if (num > 5) {
        return;
      }
      setNum(num + 1);
    };
    const intervalID = setInterval(shuffle, 700);
    return () => clearInterval(intervalID);
  }, [num]);

  return (
    <div className="loadingPage sec">
      <div className="loading-word">{DB[num]}</div>
      <div className="Loading" data-text="LOADING">
        LOADING <i class="xi-spinner-2 xi-spin"></i>
      </div>
    </div>
  );
};

export default LoadingPage;
