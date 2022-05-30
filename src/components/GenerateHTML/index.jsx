import React from 'react';

import PropTypes from 'prop-types';

import generateHTML from '../../utils/generateHTML';

export default function GenerateHTML({ optionToRender, dataToShow, searchedValue }){
    const childrenToRender = generateHTML(optionToRender, dataToShow, searchedValue);
    
    return (
        <React.Fragment>
            {childrenToRender}
        </React.Fragment>
    );
}

GenerateHTML.propTypes = {
    optionToRender: PropTypes.string.isRequired,
    dataToShow: PropTypes.instanceOf(Array).isRequired,
    searchedValue: PropTypes.string
};
