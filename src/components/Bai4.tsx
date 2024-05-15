import React, {useState, ChangeEvent} from 'react'

export default function Bai4() {
    const [selectedProvince,setSelectedProvince] = useState<string>("");
    const procinces = [
        "--- Chọn tỉnh / Thành phố ---",
        "Hà Nội",
        "Hà Nam",
        "Ninh Bình",
        "Thanh Hóa",
        "Nghệ An",
        "Hà Tĩnh"
    ]
    const handleSelectedChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(event.target.value);
    }
  return (
    <div>
        <h1>Bài 4</h1>
        <label htmlFor="provinceSelect">Tỉnh / Thành phố:</label>
        <select id="provinceselect" value={selectedProvince} onChange={handleSelectedChange}>
            {procinces.map((province,index) => (
                <option key={index} value={province}>
                    {province}
                </option>
            ))}
        </select>
        {selectedProvince && selectedProvince !== "--- Chọn tỉnh / Thành phố ---" && (
            <p>Tỉnh / Thành phố: {selectedProvince}</p>
        )}
    </div>
  )
}
