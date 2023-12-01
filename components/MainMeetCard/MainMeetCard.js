import React from 'react';
import './MainMeetCard.scss';

const Card = ({ name, photo }) => {
    return (
        <div className="div-hero-marquee">
            <div className="frame">
                <div className="text-wrapper">Sanskriti Garg</div>
                <div className="div">Marketing Lead</div>
            </div>
        </div>
    );
};

export default Card;