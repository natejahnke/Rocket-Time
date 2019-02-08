import React from 'react';
import Countdown from './Countdown';

const LaunchCard = props => (
  <div className='launch'>
    <div className='thumbnail-container'>
      <img src={props.img} alt={props.alt} />
    </div>
    <div>
      <h1 className='card_title'>{props.title}</h1>
      <Countdown date={props.countdown} />
      <p>{props.location}</p>
      <p>{props.mission_description}</p>
    </div>
  </div>
);

export default LaunchCard;
