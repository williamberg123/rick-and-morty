import React, { useContext } from 'react';

import Header from '../../components/Header/Header';
import Container from '../../containers/MainContainer/Container';
import InfoContainer from '../../containers/InfoContainer/InfoContainer';
import DataContainer from '../../containers/DataContainer/DataContainer';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import RenderIf from '../../components/RenderIf/RenderIf';
import LoadingDiv from '../../components/LoadingDiv/LoadingDiv';

import AppContext from '../../AppContext';

import './Home.css';

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
                <div>
                    <LoadingDiv />
                </div>
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