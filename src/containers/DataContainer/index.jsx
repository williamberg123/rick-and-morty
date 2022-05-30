import React, { useContext } from 'react';

import AppContext from '../../AppContext';
import generateHTML from '../../utils/generateHTML';

export default function DataContainer(){
    const { filteredData, selectedRenderingOption } = useContext(AppContext);

    const optionToRender = selectedRenderingOption.name;

    const childrenToRender = generateHTML(optionToRender, filteredData);

    return (
        <div className="Container-data">
            {childrenToRender}
        </div>
    );
}
