import React from 'react'

function Button({label,cssclass,onClickEvent}) {
  return (
    <button label={label} onClick={onClickEvent} className={cssclass}>{label}</button>
  )
}

export default Button