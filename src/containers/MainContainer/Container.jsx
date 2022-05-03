import React from 'react';

import PropTypes from 'prop-types';

import InfoContainer from '../InfoContainer/InfoContainer';
import DataContainer from '../DataContainer/DataContainer';

import './Container.css';

export default function Container({optionToRender, dataToShow, totalToLoad, funcChange, funcSearch, searchedValue }){
    return (
        <div className="Container">
            <InfoContainer
                funcChange={funcChange}
                funcSearch={funcSearch}
                dataToShow={dataToShow}
                totalToLoad={totalToLoad}
                searchedValue={searchedValue}
            />

            <DataContainer
                dataToShow={dataToShow}
                optionToRender={optionToRender}
                searchedValue={searchedValue}
            />
        </div>
    );
}

Container.propTypes = {
    optionToRender: PropTypes.string.isRequired,
    totalToLoad: PropTypes.number.isRequired,
    funcChange: PropTypes.func.isRequired,
    funcSearch: PropTypes.func.isRequired,
    dataToShow: PropTypes.instanceOf(Array).isRequired,
    searchedValue: PropTypes.string.isRequired
};