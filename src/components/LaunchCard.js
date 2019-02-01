import React from "react";

const LaunchCard = props => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.countdown}</p>
    <p>{props.location}</p>
  </div>
);

export default LaunchCard;
