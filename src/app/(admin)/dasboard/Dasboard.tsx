"use client";

import React, { useState } from 'react'

const Dasboard = () => {
 const [first, setfirst] = useState(false);

 const handlerClick = () => {
    setfirst(true);
    alert("tshs");
 }

  return (
    <div>
        <button onClick={handlerClick}> Click Me </button>
    </div>
  )
}

export default Dasboard