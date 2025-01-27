import React,{useEffect, useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const[amount,setAmount]=useState(1);

    useEffect(()=>{
        // console.log("Bir State Degisti.")
    })
    
    useEffect(()=>{
        console.log("Component Mount Edildi.")
    },[])
    
    useEffect(()=>{
        console.log("Count State Degisti.")
    },[count])  

    useEffect(()=>{
        console.log("Amount State Degisti.")
    },[amount])


  return (
    <div style={{textAlign:"center"}}>
        <h1>Total Count</h1>
        {count}
        <div>
      <button onClick={()=>setCount((prev)=>prev+amount)}>Arttirma</button>
    </div>
    <hr/>
    <button onClick={()=>setAmount(1)}>+1</button>
    <button onClick={()=>setAmount(3)}>+3</button>
    <button onClick={()=>setAmount(10)}>+10</button>
    </div>
  )
}

export default Counter
