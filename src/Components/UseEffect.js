import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count , setCount] = useState(0)

    const changeCount = ()=>{
        setCount(count+1)
    }

    useEffect(()=>{
      if(count >= 1){
        document.title = `Count ${count}`
      }else{
        document.title = `Count`
      }
    })

  return (
    <>
      <h1>Count:{count}</h1>
      <button id='countbtn' onClick={changeCount}>Click</button>
    </>
  )
}

export default UseEffect
