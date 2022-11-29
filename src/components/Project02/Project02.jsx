import { NavLink } from "react-router-dom";
// Import Swiper React components
import "../Project02/Project02.scss";

const DB = [
  {
    id: 1,
    url: "https://zoseeee.github.io/hince/",
  },
  {
    id: 2,
    url: "https://zoseeee.github.io/haagendazs/",
  },
  {
    id: 3,
    url: "https://zoseeee.github.io/hince/",
  },
  {
    id: 4,
    url: "https://zoseeee.github.io/kidZania/",
  },
  {
    id: 5,
    url: "https://zoseeee.github.io/jakomo/",
  },
  {
    id: 6,
    url: "https://zoseeee.github.io/hince/",
  },
  {
    id: 7,
    url: "https://zoseeee.github.io/hince/",
  },
  {
    id: 8,
    url: "https://zoseeee.github.io/hince/",
  },
];

const Project02 = () => {
  return (
    <section className="project02 sec" id="project">
      <h2>Web Design</h2>
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
            <span>Web Design</span>
          </NavLink>
        </li>
      </ul>
      <div className="container">
        {DB.map((it, idx) => (
          <div className={"item0" + (idx + 1)}>
            <a href={it.url} target="_blank" rel="noopener noreferrer">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./images/item__0" +
                  (idx + 1) +
                  ".png"
                }
                alt=""
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project02;
