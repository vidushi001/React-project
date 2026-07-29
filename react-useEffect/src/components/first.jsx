import React, { useEffect,useState } from 'react'

function First() {
    let count=1
    const [val,setVal] = useState(0)
    useEffect(()=>{
        console.log("called use efftect",val)
    },[handleClick])

    function handleClick(){
        setVal(val+1)
        count = count+1
    }

  return (
    <>
    <div>first {val}</div>
   <button onClick={handleClick}>Increment</button>
   </>
   
  )
}

export default First