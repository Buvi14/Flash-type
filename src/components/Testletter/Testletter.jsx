import React from 'react'
import './Testletter.css'

export default function Testletter({ letterInfo }) {

    const { status } = letterInfo;

    let letterStatus = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notattempted: "test-letter-notattempted"
    }[status]

    return (
        <span className={`test-letter ${letterStatus}`}>{letterInfo.testletter}</span>
    )
}
