import React, {useState} from 'react'

export default function Bai5() {
    const [isShown, setIsShown] = useState<boolean>(true);
    const toggleButton = () => {
        setIsShown(!isShown);
    }
  return (
    <div>
        <h1>Bài 5</h1>
        <label>
            <input type="radio"name="visibility" checked={isShown} onChange={toggleButton} />
            Nếu giá trị là true:
        </label>
        <br />
        <button onClick={toggleButton}>
            {isShown ? "Hiện" : "Ẩn"}
        </button>
        <br />
        <label>
            <input type="radio" name="visibility" checked={!isShown} onChange={toggleButton}/>
            Nếu giá trị là false:
        </label>
    </div>
  )
}
