import {useState} from 'react'
import './operations.css'
import Input from './Input'
import Button from './Button'
 let nums = [1,2,3,4,5,6,7,8,9,0]
 let operation = new Set(['+','-','/','*','='])
function Index() {
    let [inputVal,setInputVal] = useState()
    let [operand1,setoperand1]= useState()
    let [operand2,setoperand2]= useState()
    let [aroperation,setoperation]= useState()
    function updateInput(value){
        if(operation.has(value)){
            dothecalculation(value)
        }else{
        if(operand1){
            if(!operand2){
             setoperand2(String(value))
             setInputVal(String(value))
            }else{
             setoperand2(pre=> pre ? pre+String(value) : String(value))
             setInputVal(pre=> pre ? pre+String(value) : String(value))
            }
             

        }else{
          setInputVal(pre=> pre ? pre+String(value) : String(value))  
        }  
        console.log(operand1,operand2,aroperation)
    }

    }
    function handleButtonClick(value){
        updateInput(value)

    }

    function dothecalculation(value){
        if(value=== '='){
            if(aroperation === '+'){
            setInputVal(Number(operand1)+Number(operand2))
            }
            if(aroperation === '-'){
            setInputVal(Number(operand1)-Number(operand2));
            }
            if(aroperation === '*'){
            setInputVal(Number(operand1)*Number(operand2));
            }
            if(aroperation === '/'){
            setInputVal(Number(operand1)/Number(operand2));
            }
            setoperand1(String(inputVal))
            setoperation('')
            setoperand2('')
        }else{
            setoperation(value)
            setoperand1(Number(inputVal))

        }
       
    }
  return (
    <div className='calculator'>
        <span>{inputVal}</span>
        <Input placeholder="Enter value" value={inputVal} onInput={updateInput} />
        <div className="buttons">
            {[...nums].map((val,index)=> (
                <Button onClickEvent = {()=>handleButtonClick(val)} label ={val}  key={val} />
            )) }

            {[...operation].map((val,index)=> (
                <Button onClickEvent = {()=>handleButtonClick(val)} label ={val} cssclass="operator" key={val} />
            )) }
        </div>
        
        
    </div>
  )
}

export default Index