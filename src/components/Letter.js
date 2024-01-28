import React from 'react'

export default function Letter({letter}) {
  return (
    <div>
    <span> {()=>letter()} </span>
    </div>
  )
}
