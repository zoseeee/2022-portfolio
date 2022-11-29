import React, { useState } from "react";
import "../Acc/Acc.scss";

const Acc = () => {
  const [active, setActive] = useState("Contact Me");
  return (
    <div className="accordion-wrapper">
      <Accordion title="About Me" active={active} setActive={setActive} />
      <Accordion title="Education" active={active} setActive={setActive} />
      <Accordion title="Skills" active={active} setActive={setActive} />
      <Accordion title="Contact Me" active={active} setActive={setActive} />
    </div>
  );
};

export default Acc;

const Accordion = ({ title, active, setActive }) => {
  return (
    <div className="accordion">
      <div className="accordionHeading" onClick={() => setActive(title)}>
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>
            {active === title ? "x" : "|||"}
          </span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur vel aliquam saepe quaerat eligendi, maxime
            reprehenderit alias optio velit error repellat enim praesentium
            magni ducimus fuga nam exercitationem rerum dolor! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Consequuntur vel aliquam
            saepe quaerat eligendi, maxime reprehenderit alias optio velit error
            repellat enim praesentium magni ducimus fuga nam exercitationem
            rerum dolor! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Consequuntur vel aliquam saepe quaerat eligendi, maxime
            reprehenderit alias optio velit error repellat enim praesentium
            magni ducimus fuga nam exercitationem rerum dolor!
          </p>
        </div>
      </div>
    </div>
  );
};
