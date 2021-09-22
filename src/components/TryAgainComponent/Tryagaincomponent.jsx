import React from 'react';
import './Tryagaincomponent.css'

export default function Tryagaincomponent({ words, characters, wpm, tryagain }) {
    return (
        <div className="results-container">
            <h1 className="result-header">Test Results</h1>
            <div className="testresults">
                <p>
                    <b>Characters:</b>{characters}
                </p>
                <p>
                    <b>Words:</b>{words}
                </p>
                <p>
                    <b>Speed:</b>{wpm} wpm</p>
            </div>
            <button onClick={()=>tryagain()} className="retry">
                Retry
            </button>
        </div>
    )
}
