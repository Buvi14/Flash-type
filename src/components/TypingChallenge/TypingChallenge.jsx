import React from 'react';
import Testletter from '../Testletter/Testletter';
import './TypingChallenge.css';


// Here we trigger the text area to write and check the details

export default function TypingChallenge({ timerStarted, timeRemaining, testInfo, onInputChange }) {
    return (
        <div className="typingchallenge-container" >
            <div className="timer-container">
                <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="info">{!timerStarted && 'Start type to start the test'}</p>
            </div>
            <div className="text-container">
                <div className="textarea-left">
                    <div className="textarea text-paragraph">
                        {/* {selectedParagraph} */}
                        {testInfo.map((letterinfo, i) => {
                            return <Testletter key={i} letterInfo={letterinfo} />
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea onChange={(e) => { onInputChange(e.target.value) }} className="textarea" id="type" cols="30" rows="10" placeholder="Start typing here..."></textarea>
                </div>
            </div>
        </div >
    )
}
