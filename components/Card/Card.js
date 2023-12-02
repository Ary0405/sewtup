import React from 'react';
import './Card.scss';

const Card = ({ name, photo }) => {
    return (
        <div className="Card">
            <img src={photo} alt={name} className="Card__img" />
            <div className="Card__text">
                <div className="Card__text--name">{name}</div>
            </div>
        </div>
    );
};

export default Card;