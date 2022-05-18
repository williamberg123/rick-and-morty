import React, { memo, useContext } from 'react';

import AppContext from '../../AppContext';

import './InputSearch.css';

function InputSearch(){
    const { handleSearch, searchedValue } = useContext(AppContext);

    return (
        <div className="InputSearch">
            <input
                id="inputSearch"
                onChange={handleSearch}
                type="search"
                placeholder="digite aqui para procurar"
                value={searchedValue}
            />
        </div>
    );
}

export default memo(InputSearch);