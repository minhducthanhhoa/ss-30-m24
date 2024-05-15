import React, { useState, ChangeEvent } from 'react'

export default function Bai3() {
    const [dateValue,setDateValue] = useState<string>("");
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDateValue(event.target.value);
    }
  return (
    <div>
        <h1>Bài 3</h1>
        <label htmlFor="dateInput">Thời gian:</label>
        <input type="date" id="dateInput" value={dateValue} onChange={handleDateChange} />
        <p>Thời gian: {dateValue}</p>
    </div>
  )
}
