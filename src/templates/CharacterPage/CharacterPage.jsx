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

    useEffect(() => {
        loadCharacterData();
    }, []);

    const { name, species, image, gender, location, origin } = characterData;

    return (
        <div className="CharacterPage">
            {!Object.keys(characterData).length
            ? <LoadingDiv />
            : (
                <>
                    <div className="shadow-effect"></div>
                    <Image
                    imageUrl={image || ''}
                    altName={name || ''}
                    />
                    <div className="CharacterPage-data">
                        <h2>{name?.toUpperCase()}</h2>
                        <p>Espécie: <span>{species}</span></p>
                        <p>Gênero: <span>{gender}</span></p>
                        <p>Vive em: <span>{location?.name}</span></p>
                        <p>Origem: <span>{origin?.name === 'unknown' ? 'Desconhecida' : origin?.name}</span></p>
                    </div>
                </>
            )
            }
        </div>
    );
}