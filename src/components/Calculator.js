import React, { Component } from 'react';
import './calculator.css';

const CalcButton = (prop) => {
  const { value, className } = prop;
  return (
    <button type="button" value={value} className={`calculator-button ${className}`}>{value}</button>
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
      result: '0',
      number: '0',
      operator: '',
    };
  }

  render() {
    const { number, result, operator } = this.state;
    return (
      <div className="calculator">
        <CalculatorDisplay output={number || result + operator} />
        <div className="calculator-buttons">
          <CalcButton value="AC" className="calculator-clear-button" />
          <CalcButton value="+-" className="calculator-operationdup-button" onClick={this.handleNegateInput} />
          <CalcButton value="%" className="calculator-operationdup-button" onClick="" disabled="true" />
          <CalcButton value="/" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalcButton value="7" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="8" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="9" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="*" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalcButton value="4" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="5" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="6" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="-" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalcButton value="1" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="2" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="3" className="calculator-number-button" onClick={this.handleNumberInput} />
          <CalcButton value="+" className="calculator-operation-button" onClick={this.handleOperatorInput} />
          <CalcButton value="0" className="calculator-number-button zero-adjust" onClick={this.handleNumberInput} />
          <CalcButton value="." className="calculator-number-button" onClick={this.handleCommaInput} />
          <CalcButton value="=" className="calculator-equal-button span-two" onClick={this.handleEqualInput} />
        </div>
      </div>
    );
  }
}

export default Calculator;
