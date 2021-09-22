import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css'

export default function ChallengeSection({ timerStarted, timeRemaining, characters, words, wpm, testInfo, onInputChange, tryagain }) {
    return (
        <div className="challenge-container">
            <h1 className="challenge-header">Check your Typing Speed Now!</h1>
            <TestContainer words={words} characters={characters} wpm={wpm}
                timerStarted={timerStarted}
                timeRemaining={timeRemaining}
                testInfo={testInfo}
                onInputChange={onInputChange}
                tryagain={tryagain}
            />
        </div>
    )
}
