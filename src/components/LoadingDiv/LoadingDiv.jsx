import React from 'react';

import './LoadingDiv.css';

export default function LoadingDiv(){
    return (
        <div className="LoadingDiv" data-testid="LoadingDiv">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
        </div>
    );
}