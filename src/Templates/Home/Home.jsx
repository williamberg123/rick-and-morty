import React, { useState, useEffect } from 'react';
import './Home.css';

import Header from '../../components/Header/Header';
import Container from '../../components/DivContainer/Container';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

import getAllData from '../../utils/getAllData';
import LoadingDiv from '../../components/LoadingDiv/LoadingDiv';

export default function App(){
    const [ allReturnedData, setAllReturnedData ] = useState([]);
    const [ renderingData, setRenderingData ] = useState([]);
    const [ lastPageLoaded, setLastPageLoaded ] = useState(0);
    const [ selectedRenderingOption, setSelectedRenderingOption ] = useState({name: 'character', maxPage: 42, totalItemsToRender: 826});
    const [ searchedValue, setSearchedValue ] = useState('');
    const [ renderOptions ] = useState([
        {name: 'character', maxPage: 42, totalItemsToRender: 826},
        {name: 'episode', maxPage: 3, totalItemsToRender: 51},
        {name: 'location', maxPage: 7, totalItemsToRender: 126}
    ]);

    const handleSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setSearchedValue(inputValue);
    };

    const loadMore = () => {
        const initialIndex = lastPageLoaded * 20;
        const lastIndex = initialIndex + 20;

        const newDataToAdd = allReturnedData.slice(initialIndex, lastIndex);
        renderingData.push(...newDataToAdd);

        setRenderingData(renderingData);
        setLastPageLoaded(lastPageLoaded + 1);
    };

    const handleChangeOption = async (e) => {
        const { selectedIndex } = e.target;
        const selectedOption = renderOptions[selectedIndex];

        const allData = await getAllData(selectedOption.name, selectedOption.maxPage);

        setAllReturnedData(allData);
        setRenderingData(allData.slice(0, 20));
        setSelectedRenderingOption({...selectedOption});
        setLastPageLoaded(1);
    };

    const firstRendering = async () => {
        const { name, maxPage } = selectedRenderingOption;

        const allData = await getAllData(name, maxPage);

        setAllReturnedData(allData);
        setRenderingData(allData.slice(lastPageLoaded * 20, (lastPageLoaded * 20) + 20));
        setLastPageLoaded(1);
    };

    useEffect(() => {
        firstRendering();
    }, []);

    const isDisabled = renderingData.length >= allReturnedData.length;

    const filteredData = searchedValue.length
        ? allReturnedData.filter(item => {
            item.name = item.name.toLowerCase();
            return item.name.indexOf(searchedValue) !== -1;
        })
        : renderingData;
        
    return (
        <div className="App">
            <Header />
            <Container
                optionToRender={selectedRenderingOption.name}
                allReturnedData={allReturnedData}
                dataToShow={filteredData}
                totalToLoad={selectedRenderingOption.totalItemsToRender}
                funcChange={handleChangeOption}
                funcSearch={(e) => handleSearch(e)}
                searchedValue={searchedValue}
            />
            <LoadingDiv />
            {(!searchedValue && !!allReturnedData.length) && (
                <LoadMoreButton
                    funcLoadMore={loadMore}
                    isDisabled={isDisabled}
                />
            )}
            
            <ScrollButton direction="to-down" />
            <ScrollButton direction="to-up" />
        </div>
    );
}