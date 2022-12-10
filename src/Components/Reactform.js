import React from 'react'
import './Reactform.css'

const Reactform = () => {
  return (
    <>
     <form action="">
        <div className='reactform'>
            <h1 id='heading'>Login Form</h1>
            <div className="email">
                <label id='emaillabel' htmlFor="email">Email:</label>
                <input id='emailfield' type="email" name='email' placeholder='Enter email' autoComplete='off' />
            </div>

            <div className="password">
                <label id='passlabel' htmlFor="password">Password:</label>
                <input id='passwordfield' type="password" name='password' placeholder='Enter password' autoComplete='off' />
            </div>
            <div className="submit-btn">Submit</div>
        </div>
     </form> 
    </>
  )
}

export default Reactform
