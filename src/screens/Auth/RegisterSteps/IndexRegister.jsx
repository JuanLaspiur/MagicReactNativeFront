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
  
  const handleDataFromChild = (dataFromChild) => {
    setIsChecked1(dataFromChild.isChecked1);
    setIsChecked2(dataFromChild.isChecked2);
    setEmail(dataFromChild.email);
    setPassword(dataFromChild.password);
    setCurrentStep(currentStep + 1);
  };

  const [ imageProfile, setImageProfile ] = useState('')
  const [ name, setName ] = useState('')
  const [ last_name, setLastName ] = useState('')
  const [ gender, setGender ] = useState('')
  const [ birthDay, setBirthDay ] = useState('')

 const handleDataFromChildTwo = (dataFromChild)  =>{

  setImageProfile(dataFromChild.profileImage)
  setName(dataFromChild.name)
  setLastName(dataFromChild.lastName)
  setGender(dataFromChild.gender)
  setBirthDay(dataFromChild.dateOfBirth)

  setCurrentStep(currentStep + 1);
 }

 const [animalID, setAnimalID] = useState('')

 const handleDataFromChildThree = (dataFromChild) => {
    setAnimalID(dataFromChild)
    setCurrentStep(currentStep + 1);
 }

 const handleDataFromChildFour = (dataFromChild) => { 
  console.log('Datos obtenidos ' + JSON.stringify(dataFromChild))
 }

  return (
    <>
      {currentStep === 1 && (
        <Register onDataChange={handleDataFromChild} />
      )}
      {currentStep === 2 && (
        <RegisterDos onDataChange={handleDataFromChildTwo} />
      )}
      {currentStep === 3 && (
        <RegisterTres onDataChange={handleDataFromChildThree} />
      )}
      {currentStep === 4 && (
        <RegisterCuatro onDataChange={handleDataFromChildFour}/>
      )}
    </>
  );
}

export default IndexRegister;
