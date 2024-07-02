import React, { useState } from 'react';
import { View } from 'react-native';
import Register from './Register';
import RegisterDos from './RegisterDos';
import RegisterTres from './RegisterTres';
import RegisterCuatro from './RegisterCuatro';

function IndexRegister() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentStep, setCurrentStep] = useState(1); 
  // Función para recibir datos del hijo y actualizar el estado en el componente padre
  const handleDataFromChild = (dataFromChild) => {
    console.log('Datos recibidos del hijo:', dataFromChild);

    setIsChecked1(dataFromChild.isChecked1);
    setIsChecked2(dataFromChild.isChecked2);
    setEmail(dataFromChild.email);
    setPassword(dataFromChild.password);
    // Avanzar al siguiente paso
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {currentStep === 1 && (
        <Register onDataChange={handleDataFromChild} />
      )}
      {currentStep === 2 && (
        <RegisterDos />
      )}
      {currentStep === 3 && (
        <RegisterTres />
      )}
      {currentStep === 4 && (
        <RegisterCuatro />
      )}
    </>
  );
}

export default IndexRegister;
