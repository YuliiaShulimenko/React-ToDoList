import React from "react";
import s from "./WorksContainer.module.css";
import Works from "../Works/Works";


function WorksContainer({works}) {
  // console.log(works)
  return (
    <div>
      <div className={s.title_works}>
        <h3>Featured works</h3>
      </div>
      <div>
        {works.map((elem) => (
          <Works {...elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
}

export default WorksContainer;
