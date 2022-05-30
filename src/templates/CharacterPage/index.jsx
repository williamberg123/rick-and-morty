import React, { useState, useEffect } from 'react';

import Loader from 'react-js-loader';

import { useSearchParams } from 'react-router-dom';

import CharacterData from '../../components/CharacterData';

import fetchOne from '../../utils/fetchOne';

import './style.css';

export default function CharacterPage(){
    const [ characterData, setCharacterData ] = useState({});

    const [ searchParams ] = useSearchParams();
    
    const loadCharacterData = async () => {
        const data = await fetchOne('character', searchParams.get('id'));
        setCharacterData(data);
    };

    const onLoadPage = () => {
        const shadowEffect = document.querySelector('#shadow-effect') || undefined;
        const imageHeight = shadowEffect.nextSibling.clientHeight;

        if(imageHeight <= 420){
            shadowEffect.style.backgroundImage = `linear-gradient(to bottom, transparent, black ${imageHeight}px)`;
        }
    };

    useEffect(() => {
        loadCharacterData();
    }, []);

    return (
        <div onLoad={onLoadPage} className="CharacterPage">
            {!Object.keys(characterData).length
            ? <Loader type="spinner-default" bgColor="#FFFFFF" size={70} />
            : (
                <CharacterData characterData={characterData} />
            )
            }
        </div>
    );
}