import React from 'react'

function Input({placeholder,onInput=()=> {}, value=''} = {}) {
   

  function onInput2(e){
    onInput(e.target.value)
  }

  return (
    <input className="display" type="text" value={value} onInput={onInput2} placeholder={placeholder} />
  )
}

export default Input