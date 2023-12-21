'use client'

import React, { useState } from 'react'

const Checkbox = ({ checked }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
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
