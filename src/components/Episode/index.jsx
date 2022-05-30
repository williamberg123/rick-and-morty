import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import convert from '../../utils/convertEpisode';

import './style.css';

function Episode({ id, name, air_date, episode }){
    const episodeSeason = convert(episode);

    return (
        <Link to={`/rick-and-morty/episode?id=${id}`}>
            <div className="Episode">
                <div className="Episode-name">#{id} - {name}</div>
                <div className="Episode-episode">{episodeSeason}</div>
                <div className="Episode-air-date">Data de exibição: {air_date}</div>
            </div>
        </Link>
    );
}

Episode.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    air_date: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired
};

export default memo(Episode);