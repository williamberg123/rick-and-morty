import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../../components/Image/Image';
import LoadingDiv from '../../components/LoadingDiv/LoadingDiv';

import fetchOne from '../../utils/fetchOne';

import './CharacterPage.css';

export default function CharacterPage(){
    const [ characterData, setCharacterData ] = useState({});

    const params = useParams('/rick-and-morty/personagem/:id');
    const loadCharacterData = async () => {
        const data = await fetchOne('character', params.id);
        setCharacterData(data);
    };

    const onLoadPage = () => {
        const shadowEffect = document.querySelector('#shadow-effect') || undefined;
        const imageHeight = shadowEffect.nextSibling.clientHeight;

        if(imageHeight <= 420){
            shadowEffect.style.backgroundImage = `linear-gradient(to bottom, transparent, black ${imageHeight - 20}px)`;
        }
    };

    useEffect(() => {
        loadCharacterData();
    }, []);

    const { name, species, image, gender, location, origin, episode } = characterData;

    return (
        <div onLoad={onLoadPage} className="CharacterPage">
            {!Object.keys(characterData).length
            ? <LoadingDiv />
            : (
                <>
                    <div id="shadow-effect" className="shadow-effect"></div>
                    <Image
                    imageUrl={image || ''}
                    altName={name || ''}
                    />
                    <div className="CharacterPage-data">
                        <h1>{name.toUpperCase()}</h1>
                        <p>Espécie: <span>{species}</span></p>
                        <p>Gênero: <span>{gender}</span></p>
                        <p>Vive em: <span>{location.name}</span></p>
                        <p>Origem: <span>{origin.name === 'unknown' ? 'Desconhecida' : origin.name}</span></p>
                        <p>Está presente em: <span>{episode.length} episódio{episode.length > 1 ? 's' : ''}</span></p>
                    </div>
                </>
            )
            }
        </div>
    );
}