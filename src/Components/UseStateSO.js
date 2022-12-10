import React, { useState } from 'react'

const UseStateSO = () => {

    const [userdata , setUserdata] = useState({
        name:"Farhan khan" , branch:"IT" , year:"3rd"
    })

    const changename = ()=>{
        setUserdata({...userdata , name:"Osama"})
    }

  return (
    <div>
      <h1>Student Name - {userdata.name} , Branch - {userdata.branch} , Year - {userdata.year}</h1>
      <button id='changename' onClick={changename}>Change Name</button>
    </div>
  )
}

export default UseStateSO
