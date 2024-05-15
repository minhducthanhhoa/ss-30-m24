import React, { useState, ChangeEvent } from 'react';
export default function Bai2() {
    const [inputValue, setInputValue] = useState<string>("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
  return (
    <div>
        <h1>Bài 2</h1>
        <label htmlFor="userInput">Dữ liệu người dùng nhập:</label>
            <input
                type="text"
                id="userInput"
                placeholder="Nhập dữ liệu"
                value={inputValue}
                onChange={handleInputChange}
            />
        <p>Dữ liệu người dùng nhập: {inputValue}</p>
    </div>
  )
}
