import React from 'react';
import Form from "../components/CalculatorForm";
import BackButton from '../components/BackButton';

const Calculator = () => {

  return (
      <div className="Calculator" >
        <BackButton />
        <Form/>
      </div>
  );

};

export default Calculator;