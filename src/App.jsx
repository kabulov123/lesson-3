import { useState } from 'react'


import './App.css'

function App() {
  
  const [number,setNumber]=useState(0)

  return (
    <>
    
    <div className="tasbeh" >
    <button onClick={()=> setNumber(number-1)} >-</button>
    <h1>{number}</h1>
    <button onClick={()=> setNumber(number+1)}>+</button>
    <button onClick={()=> setNumber(0)} style={{width:"200px",color:"blue"}}>reset</button>

    </div>
    </>
  )
}

export default App
