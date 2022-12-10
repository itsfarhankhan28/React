import React, { useState } from 'react'
import './Reactform.css'

const Reactform = () => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [newentry , setNewentry] = useState([])

  const changeVal = (e)=>{
    setEmail(e.target.value)
  }

  const submitForm = (e) =>{
    e.preventDefault()

    const newValues = {email:email , password:password}
    setNewentry({...newentry, newValues})
  }

  return (
    <>
     <form onSubmit={submitForm}>
        <div className='reactform'>
            <h1 id='heading'>Login Form</h1>
            <div className="email">
                <label id='emaillabel' htmlFor="email">Email:</label>
                <input id='emailfield' type="email" name='email' placeholder='Enter email' autoComplete='off' value={email} onChange={changeVal}/>
            </div>

            <div className="password">
                <label id='passlabel' htmlFor="password">Password:</label>
                <input id='passwordfield' type="password" name='password' placeholder='Enter password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="submit-btn">Submit</div>
        </div>
     </form> 
    </>
  )
}

export default Reactform
