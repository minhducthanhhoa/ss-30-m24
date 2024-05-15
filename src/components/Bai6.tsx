import React, {useState} from 'react'

export default function Bai6() {
    const [isShown, setIsShown] = useState<boolean>(true);
    const toggleButton = () => {
        setIsShown(!isShown);
    };
  return (
    <div>
        <h1>Bài 6</h1>
        <label>
            <input type="radio"name="visibility" checked={isShown} onChange={toggleButton} />
            Trước khi bấm:
        </label>
        <br />
        <button onClick={toggleButton}>
            {isShown ? "Hiện" : "Ẩn"}
        </button>
        <br />
        <label>
            <input type="radio" name="visibility" checked={!isShown} onChange={toggleButton}/>
            Sau khi bấm:
        </label>
    </div>
  )
}
