import React, { memo } from 'react';

import PropTypes from 'prop-types';

import './style.css';

function Location({ name, type, dimension }){
    return (
        <div className="Location">
            <div className="Location-name">{name}</div>
            <div className="Location-hidden-info">
                <div className="Location-type">Tipo: 
                    <span>
                        {type === 'unknown'
                            ? 'Desconhecido'
                            : type
                        }
                    </span>
                </div>
                <div className="Location-dimension">
                    Dimensão:
                    <span>
                        {dimension === 'unknown'
                            ? 'Desconhecida'
                            : dimension
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}

Location.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired
};

export default memo(Location);