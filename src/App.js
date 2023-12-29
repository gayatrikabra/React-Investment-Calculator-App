import InvestmentForm from './Componets/InvestmentForm';
import AppHeader from './Componets/AppHeader';
import { useState } from 'react';
import DisplayTable from './Componets/DisplayTable';


function App(props) {
//const [results,setResults] = useState(null);
const[userInput,setUserInput] = useState(null)
const calculateHandler = (userInput) => {
        setUserInput(userInput);
      }
const yearlyData = []; // per-year results
    if(userInput)
    {
              let currentSavings = +userInput['current-Savings'];
              const yearlyContribution = +userInput['yearly-contribution']; 
              const expectedReturn = +userInput['expected-return'] / 100;
              const duration = +userInput['duration'];
          
              
              for (let i = 0; i < duration; i++) {
                const yearlyInterest = currentSavings * expectedReturn;
                currentSavings += yearlyInterest + yearlyContribution;
                yearlyData.push({
                  
                  year: i + 1,
                  yearlyInterest: yearlyInterest,
                  savingsEndOfYear: currentSavings,
                  yearlyContribution: yearlyContribution,
                });
      };
   
    }
  return (
    <div>
    <AppHeader/>
    <InvestmentForm onCalculate={calculateHandler}/>
     
      {!userInput && <p style={{textAlign:'center'}}>No invetments</p>}
      {userInput && <DisplayTable data ={yearlyData} initialInvestment ={userInput['current-Savings']}/>}
      

      
    </div>
  );
}

export default App;
