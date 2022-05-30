import React, { useContext } from 'react';

import Select from '../../components/Select';
import InputSearch from '../../components/InputSearch';
import LoadingInfo from '../../components/LoadingInfo';
import RenderIf from '../../components/RenderIf';

import AppContext from '../../AppContext';

export default function InfoContainer(){
    const { searchedValue, filteredData } = useContext(AppContext);

    return (
        <div className="Container-config">
            <Select />
            <InputSearch />
            <LoadingInfo />

            <RenderIf condition={ searchedValue.length && !filteredData.length }>
                <p>Não há resultados para &quot;{searchedValue}&quot;</p>
            </RenderIf>
        </div>
    );
}
