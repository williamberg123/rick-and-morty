import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadingDiv from '../../components/LoadingDiv/LoadingDiv';

import fetchOne from '../../utils/fetchOne';
import convert from '../../utils/convertEpisode';
import GenerateHTML from '../../components/GenerateHTML/GenerateHTML';

import './EpisodePage.css';

export default function EpisodePage(){
    const [ episodeData, setEpisodeData ] = useState({});
    const [ charactersData, setCharactersData ] = useState([]);

    const params = useParams('/rick-and-morty/episode/:id');

    const loadFetchCharacters = async (characters) => {
        const array = [];

        for(const url of characters){
            const fetchData = await fetchOne('', '', url);
            array.push(fetchData);
        }

        setCharactersData(array);
    };

    const loadEpisodeData = async () => {
        const fetchEpisodeData = await fetchOne('episode', params.id);

        setEpisodeData(fetchEpisodeData);
        await loadFetchCharacters(fetchEpisodeData.characters);
    };

    useEffect(() => {
        loadEpisodeData();
    }, []);

    const { id, name, air_date, episode } = episodeData;

    return (
        <div className="EpisodePage">
            {
            !Object.keys(episodeData).length
                ? <LoadingDiv />
                : (
                    <div className="EpisodePage-data">
                        <h1>#{id} {name.toUpperCase()}</h1>
                        {convert(episode)}
                        <p>Exibido a primeira vez em: <span>{air_date}</span></p>
                        <h2>PERSONAGENS PRESENTES NESTE EPISÓDIO</h2>
                        {!charactersData.length && (<LoadingDiv />)}
                        <div className="EpisodePage-characters">
                            {
                            !!charactersData.length && (
                                <GenerateHTML
                                    optionToRender="character"
                                    dataToShow={charactersData}
                                />
                            )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}