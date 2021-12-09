import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const CalcButton = (prop) => {
  console.log(prop);
  const { value, className, onClick } = prop;
  return (
    <button type="button" value={value} onClick={onClick} className={`calculator-button ${className}`}>{value}</button>
  );
};

const CalculatorDisplay = (prop) => {
  const { output } = prop;
  return <div className="calculator-display">{output}</div>;
};

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '0',
      operation: '',
    };
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="calculator">
        <CalculatorDisplay output={next || total + operation} />
        <div className="calculator-buttons">
          <CalcButton value="AC" className="calculator-clear-button" onClick={calculate(this.state, 'AC')} />
          <CalcButton value="+-" className="calculator-operationdup-button" onClick={calculate(this.state, '+-')} />
          <CalcButton value="%" className="calculator-operationdup-button" onClick={calculate(this.state, '%')} />
          <CalcButton value="/" className="calculator-operation-button" onClick={calculate(this.state, '/')} />
          <CalcButton value="7" className="calculator-number-button" onClick={calculate(this.state, '7')} />
          <CalcButton value="8" className="calculator-number-button" onClick={calculate(this.state, '8')} />
          <CalcButton value="9" className="calculator-number-button" onClick={calculate(this.state, '9')} />
          <CalcButton value="*" className="calculator-operation-button" onClick={calculate(this.state, '*')} />
          <CalcButton value="4" className="calculator-number-button" onClick={calculate(this.state, '4')} />
          <CalcButton value="5" className="calculator-number-button" onClick={calculate(this.state, '5')} />
          <CalcButton value="6" className="calculator-number-button" onClick={calculate(this.state, '6')} />
          <CalcButton value="-" className="calculator-operation-button" onClick={calculate(this.state, '-')} />
          <CalcButton value="1" className="calculator-number-button" onClick={calculate(this.state, '1')} />
          <CalcButton value="2" className="calculator-number-button" onClick={calculate(this.state, '2')} />
          <CalcButton value="3" className="calculator-number-button" onClick={calculate(this.state, '3')} />
          <CalcButton value="+" className="calculator-operation-button" onClick={calculate(this.state, '+')} />
          <CalcButton value="0" className="calculator-number-button zero-adjust" onClick={calculate(this.state, '0')} />
          <CalcButton value="." className="calculator-number-button" onClick={calculate(this.state, '.')} />
          <CalcButton value="=" className="calculator-equal-button span-two" onClick={calculate(this.state, '=')} />
        </div>
      </div>
    );
  }
}

export default Calculator;
