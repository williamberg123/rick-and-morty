import React, { useState, useEffect, useMemo, useCallback } from 'react';
import AppRoutes from './routes';

import AppContext from './AppContext';
import getAllData from './utils/getAllData';

import './App.css';

export default function App(){
    const [allReturnedData, setAllReturnedData] = useState([]);
    const [renderingData, setRenderingData] = useState([]);
    const [lastPageLoaded, setLastPageLoaded] = useState(0);
    const [selectedRenderingOption, setSelectedRenderingOption] = useState({ name: 'character', maxPage: 42, totalItemsToRender: 826 });
    const [searchedValue, setSearchedValue] = useState('');
    const [renderOptions] = useState([
        { name: 'character', maxPage: 42, totalItemsToRender: 826 },
        { name: 'episode', maxPage: 3, totalItemsToRender: 51 },
        { name: 'location', maxPage: 7, totalItemsToRender: 126 }
    ]);

    const handleSearch = useCallback(
        (e) => {
            const inputValue = e.target.value.toLowerCase();
            setSearchedValue(() => inputValue);
        },
        []
    );

    const loadMore = useCallback(() => {
        const initialIndex = lastPageLoaded * 20;
        const lastIndex = initialIndex + 20;

        const newDataToAdd = allReturnedData.slice(initialIndex, lastIndex);

        setRenderingData((last) => [...last, ...newDataToAdd]);
        setLastPageLoaded((last) => last + 1);
    }, [lastPageLoaded, allReturnedData]);

    const handleChangeOption = useCallback((e) => {
        setAllReturnedData([]);
        setSearchedValue('');
        setLastPageLoaded(0);

        const { selectedIndex } = e.target;
        const selectedOption = renderOptions[selectedIndex];

        setSelectedRenderingOption(selectedOption);
    }, []);

    const loadAppData = useCallback(async (name, maxPage) => {
        try {
            const allData = await getAllData(name, maxPage);
    
            setAllReturnedData(allData);
            setRenderingData(allData.slice(lastPageLoaded * 20, (lastPageLoaded * 20) + 20));
            setLastPageLoaded(1);
        } catch (error) {
            location.href = '/rick-and-morty/error';
        }
    }, [lastPageLoaded]);

    useEffect(() => {
        const { name, maxPage } = selectedRenderingOption;
        loadAppData(name, maxPage);
    }, [selectedRenderingOption]);

    const filteredData = searchedValue.length
        ? allReturnedData.filter(item => {
            item.name = item.name.toLowerCase();
            return item.name.includes(searchedValue);
        })
        : renderingData;

    const isDisabled = renderingData.length >= allReturnedData.length;

    const memoizedAppContext = useMemo(() => (
        {
            allReturnedData, renderingData, lastPageLoaded, selectedRenderingOption, searchedValue,
            renderOptions, handleSearch, loadMore, handleChangeOption, filteredData, isDisabled
        }),
        [
            allReturnedData, renderingData, lastPageLoaded, selectedRenderingOption, searchedValue,
            renderOptions, handleSearch, loadMore, handleChangeOption, filteredData, isDisabled
        ]
    );
    
    return (
        <div className="App">
            <AppContext.Provider value={memoizedAppContext}>
                <AppRoutes />
            </AppContext.Provider>
        </div>
    );
}