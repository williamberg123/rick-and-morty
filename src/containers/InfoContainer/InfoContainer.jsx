import React from 'react';

import PropTypes from 'prop-types';

import Select from '../../components/Select/Select';
import InputSearch from '../../components/InputSearch/InputSearch';
import LoadingInfo from '../../components/LoadingInfo/LoadingInfo';

export default function InfoContainer({ funcChange, funcSearch, dataToShow, totalToLoad, searchedValue = '' }){
    return (
        <div className="Container-config">
            <Select funcChange={funcChange} />
            <InputSearch
                funcSearch={funcSearch}
                searchedValue={searchedValue}
            />
            <LoadingInfo
                total={totalToLoad}
                loaded={dataToShow.length}
            />

            {(!!searchedValue.length && !dataToShow.length) && (
                <p>Não há resultados para &quot;{searchedValue}&quot;</p>
            )}
        </div>
    );
}

InfoContainer.propTypes = {
    funcChange: PropTypes.func.isRequired,
    funcSearch: PropTypes.func.isRequired,
    dataToShow: PropTypes.instanceOf(Array).isRequired,
    totalToLoad: PropTypes.number.isRequired,
    searchedValue: PropTypes.string
};
