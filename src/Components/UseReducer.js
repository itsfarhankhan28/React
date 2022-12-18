import React, { useReducer, useState } from 'react'

const initialState = 0
    const reducer = (state , action)=>{
        console.log(state,action)
        if(action.type === "INCREMENT"){
            return state+1
        }
        if(action.type === "DECREMENT"){
            return state-1
        }
        return state
    }

const UseReducer = () => {

    // const [count , setCount] = useState(0)

    const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <>
     <p id='display'>{state}</p>
     <button className="increBtn" onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
     <button className="decreBtn" onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>  
    </>
  )
}

export default UseReducer
