import React, { useContext } from 'react';

import Loader from 'react-js-loader';

import Header from '../../components/Header';
import Container from '../../containers/MainContainer';
import InfoContainer from '../../containers/InfoContainer';
import DataContainer from '../../containers/DataContainer';
import LoadMoreButton from '../../components/LoadMoreButton';
import ScrollButton from '../../components/ScrollButton';
import RenderIf from '../../components/RenderIf';

import AppContext from '../../AppContext';

import './style.css';

export default function Home() {
    const {
        allReturnedData, searchedValue,
        loadMore
    } = useContext(AppContext);

    return (
        <div className="Home">
            <Header />

            <Container>
                <InfoContainer />

                <RenderIf condition={ allReturnedData.length }>
                    <DataContainer />
                </RenderIf>
            </Container>

            <RenderIf condition={ !allReturnedData.length }>
                <Loader type="spinner-default" bgColor="#000000" size={70} />
            </RenderIf>

            <RenderIf condition={ !searchedValue && allReturnedData.length }>
                <LoadMoreButton
                    funcLoadMore={loadMore}
                />
            </RenderIf>

            <ScrollButton direction="to-down" />
            <ScrollButton direction="to-up" />
        </div>
    );
}