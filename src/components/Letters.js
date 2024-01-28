import React from 'react'
import Letter from './Letter'
export default function Letters({ lettersArry }) {
    return (
        <div>
            <div>Availabe Letters.</div>
            <Letter letter={lettersArry}/>
        </div>
    )
}
