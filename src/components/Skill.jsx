import React from "react";

import { experience } from "../constants";
import { project } from "../constants";

const Skill = () => {
  return (
    <section id="skill">
      <div className="slkll__inner">
        <h2 className="skill__title">
          experience <em></em>
        </h2>
        <div className="experience__desc">
          {experience.map((skill, key) => (
            <div key={key}>
              <span>{skill.name}</span>
              <h3>{skill.title}</h3>
              <pre>{skill.desc}</pre>
            </div>
          ))}
        </div>
      </div>
      <div className="slkll__inner">
        <h2 className="skill__title">
          project <em></em>
        </h2>
        <div className="project__desc">
          {project.map((skill, key) => (
            <div key={key}>
              <span>{skill.name}.</span>
              <h3>{skill.title}</h3>

              <pre>
                {skill.desc} <br />
                {skill.skillstasck.map((skill, key) => (
                  <span
                    style={{
                      fontFamily: "var(--mainNum-font)",
                      fontSize: "1.1rem",
                      background: "gray",
                      padding: "3px",
                      marginRight: "10px",
                      color: "white",
                    }}
                    key={key}
                  >
                    {skill.stask}
                  </span>
                ))}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
