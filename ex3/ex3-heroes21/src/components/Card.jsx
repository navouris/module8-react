import React from "react";
import Portrait from "./Portrait";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Portrait img={props.img} attr={props.attr} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.life} />
      </div>
    </div>
  );
}

export default Card;
