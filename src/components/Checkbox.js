'use client'

import React, { useState } from 'react'

const Checkbox = ({ id, name, checked, refetch }) => {
  const [isChecked, setIsChecked] = useState(Boolean(Number(checked)))

  const handleCheckboxChange = (e) => {
    // const completed = Boolean(e.target.checked) ? '1' : '0';

    // setIsChecked(e.target.checked)

    // fetch(`${process.env.apiURL}/api/task`, {
    //   method: 'PUT',
    //   body: new URLSearchParams({
    //     'id': id,
    //     'name': name,
    //     'completed': completed,
    //   })}
    // ).then(() => {
    //   refetch();
    // });
  }

  return (
    <input 
      type="checkbox"
      onChange={handleCheckboxChange}
      checked={isChecked}
    />
  )
}

export default Checkbox
