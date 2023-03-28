import './App.css';
import { useState, useRef } from 'react';

function App() {
const [result,setResult] =useState("")
const [input,setInput] = useState("")
const [display, setDisplay] = useState("")
const inputNumber = useRef(null);

function handleChange (e) { 
  setInput(e.target.value)
}
function add(e) {
  e.preventDefault();
  if (input<0) {
  setDisplay(display + '('+input.toString() +') + ')
  } else (setDisplay(display + input.toString() +'+ '))
  setInput("")
  inputNumber.current.focus()
}
function subtract(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +') - ')
    } else (setDisplay(display + input.toString() +'- '))
  setInput("")
  inputNumber.current.focus()
}
function multiplcation(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +') * ')
    } else (setDisplay(display + input.toString() +'* '))
  setInput("")
  inputNumber.current.focus()
}
function division(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +') / ')
    } else (setDisplay(display + input.toString() +'/ '))
  setInput("")
  inputNumber.current.focus()
}
function ok(e) {
  e.preventDefault();
  if (input<0) {
    setDisplay(display + '('+input.toString() +')')
    } else (setDisplay(display + input.toString()))
  setInput("")
}
function equal(e) {
  e.preventDefault()
  setInput("")
  try{
  setResult(eval(display))
  } catch {
    {alert('Please enter a valid expression!')}
    setResult("")
    setDisplay("")
    setInput("")
  }
 } 
function resetInput(e) {
  e.preventDefault();
  setInput("")
  setDisplay("")
}
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
