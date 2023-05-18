import './App.css';
import { useState, useRef } from 'react';

function App() {
const [result,setResult] =useState("") //defining the state of result variable
const [input,setInput] = useState("") //defining the state of input variable
const [display, setDisplay] = useState("") //defining the state of display variable
const inputNumber = useRef(null); 

function handleChange (e) { 
  setInput(e.target.value)
}
//Addition function
function add(e) {
  e.preventDefault();
  if (input<0) {
  setDisplay(display + '('+input.toString() +') + ')
  } else (setDisplay(display + input.toString() +'+ '))
  setInput("")
  inputNumber.current.focus()
}
 //Substraction function
function subtract(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +') - ')
    } else (setDisplay(display + input.toString() +'- '))
  setInput("")
  inputNumber.current.focus()
}
 //Multiplication function
function multiplcation(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +') * ')
    } else (setDisplay(display + input.toString() +'* '))
  setInput("")
  inputNumber.current.focus()
}
 //Division function
function division(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +') / ')
    } else (setDisplay(display + input.toString() +'/ '))
  setInput("")
  inputNumber.current.focus()
}
  
//Fuction to make ready for calculation
function ok(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +')')
    } else (setDisplay(display + input.toString()))
  setInput("")
}
  
//Fuction to calculate the the expression shown on display
function equal(e) {
  e.preventDefault()
  setInput("")
  try{
  setResult(eval(display))
  } catch {
    alert('Please enter a valid expression!')
    setResult("")
    setDisplay("")
    setInput("")
  }
 }
  
//Fucntion to reset the input 
function resetInput(e) {
  e.preventDefault();
  setInput("")
  setDisplay("")
}
  
//Function to reset the calculator
function resetCalculation (e) {
  e.preventDefault();
  setResult("")
  setDisplay("")
  setInput("")
}
  return (
    <div>
      <h1>CALCULATOR</h1>
      <h2>{display}</h2>
      <h2>Result:{result}</h2>
      <form>
          <input
          value={input}
          pattern='[0-9]'
          type='number'
          placeholder="Type a number"
          onChange={handleChange}
          ref={inputNumber}>
          </input>
      </form>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiplcation}>x</button>
      <button onClick={division}> /</button>
      <button onClick={ok}>ok</button>
      <button onClick={equal}>=</button>
      <br/>
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetCalculation}>Reset Calculation</button>
    </div>
    
  )
}

export default App;
