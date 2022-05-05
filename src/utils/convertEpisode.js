import React from 'react';

const convert = (episode) => {
    const temp = episode.slice(1, 3);
    const ep = episode.slice(4, 6);

    return <p>Temp: <span>{temp}</span>, Ep: <span>{ep}</span></p>;
};

export default convert;