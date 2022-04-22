import React from 'react';

import PropTypes from 'prop-types';

import './Episode.css';

export default function Episode({ id, name, air_date, episode }){
    const convert = () => {
        const temp = episode.slice(1, 3);
        const ep = episode.slice(4, 6);

        return `Temp: ${temp}, Ep: ${ep}`;
    };

    const episodeSeason = convert();

    return (
        <div className="Episode">
            <div className="Episode-name">#{id} - {name}</div>
            <div className="Episode-episode">{episodeSeason}</div>
            <div className="Episode-air-date">Data de exibição: {air_date}</div>
        </div>
    );
}

Episode.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    air_date: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired
};