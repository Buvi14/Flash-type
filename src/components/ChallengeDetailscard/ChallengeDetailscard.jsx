import React from 'react';
import './ChallengeDetailscard.css';

export default function ChallengeDetailscard({ Name, Value }) {
    return (
        <div className="challenge-details">
            <div className="challenge-name">{Name}</div>
            <div className="challenge-value">{Value}</div>
        </div>
    )
}
