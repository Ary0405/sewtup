import React from 'react';
import './MainMeetCard.scss';

const Card = ({ name, photo }) => {
    return (
        <div className="div-hero-marquee">
                <img src={photo} alt={name} className="card_photo" />
            <div className="frame">
                <div className="text-wrapper">{name}</div>
            </div>
        </div>
    );
};

export default Card;