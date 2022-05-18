import React, { memo, useContext } from 'react';

import { FaPlus } from 'react-icons/fa';
import AppContext from '../../AppContext';

import './LoadMoreButton.css';

function LoadMoreButton(){
    const { isDisabled, loadMore } = useContext(AppContext);

    return (
        <button disabled={isDisabled} type="button" className="LoadMore" onClick={loadMore}>
            <div>CARREGAR MAIS</div> <FaPlus className="plus-icon" />
        </button>
    );
}

export default memo(LoadMoreButton);