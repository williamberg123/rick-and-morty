import React from 'react';

import PropTypes from 'prop-types';

import GenerateHTML from '../../components/GenerateHTML/GenerateHTML';

export default function DataContainer({ dataToShow, optionToRender, searchedValue }){
    return (
        <div className="Container-data">
            {!!dataToShow.length && (
                <GenerateHTML
                    optionToRender={optionToRender}
                    dataToShow={dataToShow}
                    searchedValue={searchedValue}
                />
            )}
        </div>
    );
}

DataContainer.propTypes = {
    dataToShow: PropTypes.instanceOf(Array).isRequired,
    optionToRender: PropTypes.string.isRequired,
    searchedValue: PropTypes.string
};