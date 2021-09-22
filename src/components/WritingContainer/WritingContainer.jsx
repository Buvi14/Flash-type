import React from 'react'
import ChallengeDetailscard from '../ChallengeDetailscard/ChallengeDetailscard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './WritingContainer.css'

export default function WritingContainer({ timerStarted, timeRemaining, characters, words, wpm, testInfo, onInputChange }) {
    return (
        <div className="writing-container">
            <div className="top-headers">
                {/* Word Details Card */}
                <ChallengeDetailscard Name="words" Value={words} />
                {/* Character Details Card */}
                <ChallengeDetailscard Name="characters" Value={characters} />
                {/* Words Per Minute Card */}
                <ChallengeDetailscard Name="Speed" Value={wpm} />
            </div>
            <div className="type-container">
                <TypingChallenge onInputChange={onInputChange}
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    testInfo={testInfo} />
            </div>
        </div>
    )
}
