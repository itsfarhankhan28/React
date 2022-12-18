import React, { useRef, useState } from 'react'

const UseRefprac = () => {

    const name = useRef(null)

    const [show , setShow] = useState(false)

    const saveName = (e)=>{
        e.preventDefault()
        const data = name.current.value
        data == " " ? window.alert("Please fill the field") : setShow(true)
    }

  return (
    <>
        <form action="" onSubmit={saveName}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' ref={name}/>
            <button id='submitBtn'>Submit</button>
        </form> 
        <p id='displaData'>{show ? `The value is : ${name.current.value}`: " "}</p>
    </>
  )
}

export default UseRefprac
