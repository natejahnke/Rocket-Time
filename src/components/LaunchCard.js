import React from 'react';

const LaunchCard = props => (
  <div className='launch'>
    <img src={props.img} alt={props.alt} />
    <div>
      <h1 className='card_title'>{props.title}</h1>
      <p>{props.countdown}</p>
      <p>{props.location}</p>
      <p>{props.mission_description}</p>
    </div>
  </div>
);

export default LaunchCard;
