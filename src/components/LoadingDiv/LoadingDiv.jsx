import React from 'react';

import './LoadingDiv.css';

export default function LoadingDiv(){    
    return (
        <div id="LoadingDiv" className="LoadingDiv" data-testid="LoadingDiv">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
        </div>
    );
}
