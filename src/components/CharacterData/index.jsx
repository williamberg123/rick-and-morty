import PropTypes from 'prop-types';

import Image from '../Image';

import './style.css';

export default function CharacterData({ characterData }) {
    const { name, species, image, gender, location, origin, episode } = characterData;

    return (
        <div className="CharacterData">
            <div id="shadow-effect" className="shadow-effect"></div>
            <Image
            imageUrl={image || ''}
            altName={name || ''}
            />
            <div className="CharacterInfo">
                <h1>{name.toUpperCase()}</h1>
                <p>Espécie: <span>{species}</span></p>
                <p>Gênero: <span>{gender}</span></p>
                <p>Vive em: <span>{location.name === 'unknown' ? 'Desconhecido' : location.name}</span></p>
                <p>Origem: <span>{origin.name === 'unknown' ? 'Desconhecida' : origin.name}</span></p>
                <p>Está presente em: <span>{episode.length} episódio{episode.length > 1 ? 's' : ''}</span></p>
            </div>
        </div>
    );
}

CharacterData.propTypes = {
    characterData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        location: PropTypes.instanceOf(Object).isRequired,
        origin: PropTypes.instanceOf(Object).isRequired,
        episode: PropTypes.instanceOf(Array).isRequired
    }).isRequired
};
