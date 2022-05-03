import React, { memo } from 'react';

import PropTypes from 'prop-types';

import './InputSearch.css';

function InputSearch({ funcSearch, searchedValue }){
    return (
        <div className="InputSearch">
            <input
                id="inputSearch"
                onChange={funcSearch}
                type="search"
                placeholder="digite aqui para procurar"
                value={searchedValue}
            />
        </div>
    );
}

InputSearch.propTypes = {
    funcSearch: PropTypes.func.isRequired,
    searchedValue: PropTypes.string
};

export default memo(InputSearch);