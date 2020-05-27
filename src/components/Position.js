import React from "react";
import "../styles/CareerStyles.scss";
import { colorWhite } from "../styles/centralStyles";
import { backgroundColorDark } from "../styles/centralStyles";

export default function Position(props) {
  const { title, positions, index } = props;

  return (
    <section>
      <h3
        style={{
          color: colorWhite,
          backgroundColor: backgroundColorDark,
        }}
      >
        {title}
      </h3>
      {positions.map((position) => (
        <div
          key={position.company}
          className={index % 2 ? "positionBlue" : "positionWhite"}
        >
          <h3>
            <strong>{position.company}</strong>
          </h3>
          <h4>{position.period}</h4>
          <p>
            {position.desc}
            {position.link === "" ? null : (
              <a href={position.link} target="_blank" rel="noopener noreferrer">
                {" "}
                >>project
              </a>
            )}
          </p>
          {position.desctwo === "" ? null : <p>{position.desctwo}</p>}
        </div>
      ))}
    </section>
  );
}
