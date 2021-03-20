import React from "react";

function Portrait(props) {
  return <img className="circle-img" src={props.img} alt={props.attr} 
    title={props.attr}/>;
}

export default Portrait;
