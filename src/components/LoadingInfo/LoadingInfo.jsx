import React, { useContext } from 'react';

import AppContext from '../../AppContext';

import './LoadingInfo.css';

export default function LoadingInfo(){
    const { allReturnedData, filteredData } = useContext(AppContext);
    
    const totalToLoad = allReturnedData.length;
    const totalLoaded = filteredData.length;

    return (
        <div className="LoadingInfo">
            <div className="Loading-total">Total: <span>{totalToLoad}</span></div>
            <div className="Loading-loaded-count">Carregado até o momento: <span>{totalLoaded}</span></div>
        </div>
    );
}
