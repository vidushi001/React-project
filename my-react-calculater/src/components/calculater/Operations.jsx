// import React from 'react'
// import './operations.css'

// function Operations({showInput,onClick,doSeprateCal}) {

//     function addValue(e){
//         console.log(e.target.value)
//         showInput((prev)=> 
//                 prev ? prev+e.target.value : e.target.value )
//         doSeprateCal(e.target.value)
//     }
//   return (

//     <div className="buttons">
//         <button className="operator">AC</button>
//         <button className="operator">DEL</button>
//         <button className="operator">%</button>
//         <button className="operator" onClick={addValue} value="/">/</button>

//         <button onClick={addValue} value="7">7</button>
//         <button onClick={addValue} value="8">8</button>
//         <button onClick={addValue} value="9">9</button>
//         <button className="operator" onClick={addValue} value="*">*</button>

//         <button onClick={addValue} value="4">4</button>
//         <button onClick={addValue} value="5">5</button>
//         <button onClick={addValue} value="6">6</button>
//         <button className="operator" onClick={addValue} value="-">-</button>

//         <button onClick={addValue} value="1">1</button>
//         <button onClick={addValue} value="2">2</button>
//         <button onClick={addValue} value="3">3</button>
//         <button className="operator" onClick={addValue} value="+">+</button>

//         <button onClick={addValue} value="00">00</button>
//         <button onClick={addValue} value="0">0</button>
//         <button>.</button>
//         <button className="equal" onClick={onClick}>=</button>
//     </div>
//   )
// }

// export default Operations