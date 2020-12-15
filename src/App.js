import './App.css';
import React, { useState } from 'react';
import RegisterValidations from './contexts/RegisterValidations'
import { validateName } from './models/register'
import Step1 from './auto/shared/Step1';
import Step2 from './auto/shared/Step2';
import Stepper from './components/Stepper';

function App() {

  const [currentStep, setCurrentStep] = useState(0);

  const form = [
    <Step1 key={0} onSend={onSend} />,
    <Step2 key={1} />
];

  return (
    <div className="App">
      <RegisterValidations.Provider value={{ customerName: validateName }} >

        <Stepper activeStep={currentStep} maxStep={form.length-1} changeStepAction={setCurrentStep}>
          {form}
        </Stepper>

      </RegisterValidations.Provider>

    </div>
  );
}

function onSend(dados) {
  console.log(dados);
}

export default App;
