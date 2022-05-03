import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import './ScrollButton.css';

function ScrollButton({ direction }){
    const scrollPageToUp = () => window.scrollTo(0, 0);
    const scrollPageToDown = () => {
        const bodyHeight = document.body.scrollHeight;
        window.scrollTo(0, bodyHeight);
    };

    return (
        <button
            type="button"
            onClick={
                direction === 'to-up'
                ? scrollPageToUp
                : scrollPageToDown
            }
            className={`ScrollButton ${
                direction === 'to-up'
                ? 'ScrollButton-to-up'
                : 'ScrollButton-to-down'
            }`}
        >
        
        {
            direction === 'to-up'
                ? <FaArrowUp className={direction} />
                : <FaArrowDown className={direction} />
        }
        </button>
    );
}

ScrollButton.propTypes = {
    direction: PropTypes.string.isRequired
};

export default memo(ScrollButton);