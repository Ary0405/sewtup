import { useState } from 'react';
import './PricingSlider.scss';

const PricingSlider = ({ onChange }) => {
    const [price, setPrice] = useState(50);

    const handleSliderChange = (event) => {
        const newPrice = parseInt(event.target.value, 10);
        setPrice(newPrice);
        if (onChange && typeof onChange === 'function') {
            onChange(newPrice);
        }
    };

    return (
        <div className="pricing-slider">
            <label htmlFor="price" className="pricing-slider-text">${price}</label>
            <input
                type="range"
                id="price"
                name="price"
                min="1"
                max="10000"
                value={price}
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default PricingSlider;
