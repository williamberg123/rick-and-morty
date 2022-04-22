import React from 'react';

import PropTypes from 'prop-types';

import './LoadingInfo.css';

export default function LoadingInfo({ total, loaded }){
    return (
        <div className="LoadingInfo">
            <div className="Loading-total">Total: <span>{total}</span></div>
            <div className="Loading-loaded-count">Carregado até o momento: <span>{loaded}</span></div>
        </div>
    );
}

LoadingInfo.propTypes = {
    total: PropTypes.number.isRequired,
    loaded: PropTypes.number.isRequired
};