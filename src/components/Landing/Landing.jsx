import React from 'react'
import typing from './type.jpg'
import './Landing.css';
import Typewriter from 'typewriter-effect';

export default function Landing() {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <img src={typing} alt="typing" className="typing-text" />
            </div>
            <div data-aos="fade-left" className="landing-right">
                <h1 className="typing-header">Can you type...</h1>
                <div className="typewriting-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Quick?', 'Correct?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
