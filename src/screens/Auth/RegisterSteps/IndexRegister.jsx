import React, { useState } from 'react';
import { View } from 'react-native';
import { registerUser } from '../../../api/User.controller'
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
const [ country, setCountry] = useState('')
const [ phone, setPhone] = useState(null)
const [ profession, setProfession ] = useState('')
const [favoriteMovie, setFavoriteMovie] = useState('')
const [ favoriteSports, setFavoriteSports ] = useState('')
const [favoriteArtist, setFavoriteArtist ] = useState("")
const [ hobbies, setHobbies ] = useState('')
const [ selectedCommunity, setSelectedCommunity ] = useState('')
const [ selectedCity, setSelectedCity ] = useState('')
const [ madridZone, setMadridZone] = useState('')

const handleDataFromChildFour = (dataFromChild) => {
  console.log(JSON.stringify(dataFromChild))
  const {
    country,
    phone,
    profession,
    favoriteMovie,
    favoriteSports,
    favoriteArtist,
    hobbies,
    selectedCommunity,
    selectedCity,
    madridZone
  } = dataFromChild;

  setCountry(country);
  setPhone(phone);
  setProfession(profession);
  setFavoriteMovie(favoriteMovie);
  setFavoriteSports(favoriteSports);
  setFavoriteArtist(favoriteArtist);
  setHobbies(hobbies);
  setSelectedCommunity(selectedCommunity);
  setSelectedCity(selectedCity);
  setMadridZone(madridZone);

  signUpUser()
};

const returnGoback  = () => {
  setCurrentStep(currentStep - 1); 
}

const signUpUser = async () => {
  try {
    // Asegúrate de que el mes y el día tengan dos dígitos
    const formatDate = (date) => {
      const [day, month, year] = date.split('/');
      const formattedDay = day.padStart(2, '0');
      const formattedMonth = month.padStart(2, '0');
      return `${year}/${formattedMonth}/${formattedDay}`;
    };

    const formattedBirthdate = formatDate(birthDay);

    const data = {
      email,
      password,
      name,
      last_name,
      gender,
      birthdate: formattedBirthdate,
      bornCountry: country,
      phone: parseInt(phone, 10),
      city: "63226600f5dfcb0b768e02c3", // modificarlo
      zone: madridZone,
      animal: animalID,
      peliculas: favoriteMovie,
      deportes: favoriteSports,
      artista: favoriteArtist,
      cargo: profession,
      description: hobbies,
      community: selectedCommunity._id
    };

    console.log('Data antes del post: ' + JSON.stringify(data));
    const img = imageProfile; // base 64
    const requestBody = {
      data,
      img
    };

    // registerUser() metodo ya conectado a axios
   const response = await registerUser(requestBody);
    
  } catch (error) {
    console.error('Error durante user registration:', error);
  }
};




  return (
    <>
      {currentStep === 1 && (
        <Register onDataChange={handleDataFromChild} />
      )}
      {currentStep === 2 && (
        <RegisterDos onDataChange={handleDataFromChildTwo} returnGoback={returnGoback}/>
      )}
      {currentStep === 3 && (
        <RegisterTres onDataChange={handleDataFromChildThree}  returnGoback={returnGoback} />
      )}
      {currentStep === 4 && (
        <RegisterCuatro onDataChange={handleDataFromChildFour} returnGoback={returnGoback}/>
      )}
    </>
  );
}

export default IndexRegister;
