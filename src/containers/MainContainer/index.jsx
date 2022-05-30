import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Container({ children }){
    return (
        <div className="Container">
            { children }
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired
};