import React from "react";
import { useState, useCallback } from "react";

const Child = React.memo(({calculateSquare})=>{

  const result = calculateSquare(5)

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-semibold">Child component</h3>
      <p>Square of 5:{result}</p>
    </div>
  )
})

export default Child