import React, { useState } from 'react'

export default function Function() {
    const [name,setName] = useState<string>("hoa");
    /*
    Event: sự kiện
    onclick
    onchange
    onkeydown

   */
  const handleChange = () => {
    console.log("11111");
    // đi xử lí 
    // khi muốn cập nhật tên thì dùng setName
    setName("hong");
    // khi setName thì component render lại 1 lần 
  }
  return (
    <div>
        <p>{name}</p>
        <button onClick={handleChange}>Click</button>
    </div>
  )
}
