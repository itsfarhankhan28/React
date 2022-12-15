import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [show , setShow] = useState(false)

    const name = useRef(null)

    const saveName = (e)=>{
        e.preventDefault()
        const data = name.current.value
        data ==="" ? window.alert("Please fill the form") : setShow(true)
    }

  return (
    <>
      <form action="" onSubmit={saveName}>
        <div className="form">
            <label htmlFor="Name">Name</label>
            <input type="text" id='name' ref={name} />
            <button id='submitBtn'>Submit</button>
        </div>
      </form>
      <p id='show'>{show ? `The saved value is ${name.current.value}` : " "}</p>
    </>
  )
}

export default UseRef
