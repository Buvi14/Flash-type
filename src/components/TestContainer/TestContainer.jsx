import React from 'react';
import Tryagaincomponent from '../TryAgainComponent/Tryagaincomponent';
import './TestContainer.css';
import WritingContainer from '../WritingContainer/WritingContainer'
export default function TestContainer({ tryagain, timerStarted, timeRemaining, characters, words, wpm, testInfo, onInputChange }) {
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (<div className="typechalleng-container">
                    <WritingContainer
                        timeRemaining={timeRemaining}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timerStarted={timerStarted}
                        testInfo={testInfo}
                        onInputChange={onInputChange} />
                </div>) : (<div className="tryagain">
                    <Tryagaincomponent
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        tryagain={tryagain} />
                </div>)
            }
        </div>
    )
}
