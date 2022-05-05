import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import './LoadMoreButton.css';

function LoadMoreButton({ funcLoadMore, isDisabled }){
    return (
        <button disabled={isDisabled} type="button" className="LoadMore" onClick={funcLoadMore}>
            <div>CARREGAR MAIS</div> <FaPlus className="plus-icon" />
        </button>
    );
}

LoadMoreButton.defaultProps = {
    isDisabled: false
};

LoadMoreButton.propTypes = {
    funcLoadMore: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool
};

export default memo(LoadMoreButton);