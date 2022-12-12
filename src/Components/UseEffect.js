import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count , setCount] = useState(0)

    const changeCount = ()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        document.title = `Count ${count}`
    })

  return (
    <>
      <h1>Count:{count}</h1>
      <button id='countbtn' onClick={changeCount}>Click</button>
    </>
  )
}

export default UseEffect
