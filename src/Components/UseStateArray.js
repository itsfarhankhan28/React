import React from 'react'
import { useState } from 'react';

const UseStateArray = () => {

    const [Playlist , setPlaylist] = useState([
        {
          frontend:"JavaScript",
          Backend:"Nodejs"
        },
        {
          frontend:"HTML",
          Backend:"Expressjs"
        },
        {
          frontend:"CSS",
          Backend:"MongoDB"
        }
      ])
    
      const clearData = ()=>{
        setPlaylist([])
        console.log('Data Cleared')
      }

      const delSubData = ()=>{
        
      }

  return (
    <>
    <div>
      {Playlist.map((elem)=>{
        return (<h1>{elem.frontend} and {elem.Backend} <button id='subdata-btn' onClick={delSubData}>Clear</button></h1>
        )
      })}
      <button id='clrbtn' onClick={clearData}>Clear</button>
      </div>
    </>
  )
}

export default UseStateArray
