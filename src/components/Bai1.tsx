import React from 'react'

export default function Bai1() {
    const handleClick = () => {
        console.log("Clicked");
    }
  return (
    <div>
        <h1>Bài 1</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
