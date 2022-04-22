import React from 'react';

import PropTypes from 'prop-types';

import Select from '../Select/Select';
import InputSearch from '../InputSearchCharacter/InputSearch';
import LoadingInfo from '../LoadingInfo/LoadingInfo';
import GenerateHTML from '../GenerateHTML/GenerateHTML';

import './Container.css';

export default function Container({ optionToRender, dataToShow, totalToLoad, funcChange, funcSearch, searchedValue }){
    return (
        <div className="Container">
            <div className="Container-config">
                <Select funcChange={funcChange} />
                <InputSearch
                    funcSearch={funcSearch}
                    resultsTotal={dataToShow.length}
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
            <div className="Container-data">
                {!!dataToShow.length && (
                    <GenerateHTML
                        optionToRender={optionToRender}
                        dataToShow={dataToShow}
                        searchedValue={searchedValue}
                    />
                )}
            </div>
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