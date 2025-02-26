import './styles/App.css';
import Button from './components/Button'
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const rows = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['=', '0', '.', '/']
  ]

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      try {
        setInput( isNaN(evaluate(input)) ? "Syntax error" : evaluate(input) );
      } catch (error) {
        setInput("Syntax error");
      }
      
    } else {
      alert("Bitte geben Sie Werte ein, um Berechnungen durchzuführen")
    }
  };

  return (
    <div className="App">
      
      <div className='calculator-container'>
        <Screen input={input}/>
        {rows.map( (row, index) =>{
          return (
            <div key={index} className="row">
              {row.map( (button, index) => {
                return (
                  <Button key={index} operateClick={ (button === '=') ? calculateResult : addInput}>
                    {button}
                  </Button>
                ); 
              })}
            </div>  
          );
        })}
        
        <div className='row'>
          <ButtonClear operateClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
