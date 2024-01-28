import React from 'react'

export default function Letter({letter}) {
    console.log(letter)
  return (
    <div>
    <span> {()=>letter()} </span>
    </div>
  )
}
