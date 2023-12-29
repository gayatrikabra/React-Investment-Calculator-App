import { useState } from "react";
// import DisplayTable from './DisplayTable';

const InvestmentForm = (props) =>
{
   const initialUserInput =
   {
    'current-Savings':1000,
    'yearly-contribution': 1200,
    'expected-return':7,
    'duration':10
   }
const[userInput,setUserInput]=useState(initialUserInput);

  
    const inputChangeHandler = (input,value)=>
    {
      setUserInput((prevInput)=>{
        return{
          ...prevInput,
        [input]:+value        }
      })
    }
    const formSubmitHandler = (event) =>
    {
      event.preventDefault();
      props.onCalculate(userInput);
    } 
    const resetHandler = () =>
        {
            setUserInput(initialUserInput);
        }
    return(
        <div>
              <form className="form" onSubmit={formSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-Savings">Current Savings ($)</label>
            <input type="number" id="current-Savings" value={userInput['current-Savings']} onChange={(event)=>inputChangeHandler('current-savings',event.target.value)} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={userInput['yearly-contribution']}  onChange= {(event)=>inputChangeHandler('yearly-contribution',event.target.value)} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={userInput['expected-return']}   onChange= {(event)=>inputChangeHandler('expected-return',event.target.value)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={userInput['duration']} onChange = {(event)=>inputChangeHandler('duration',event.target.value)} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>

        </div>
    )
}
export default InvestmentForm;