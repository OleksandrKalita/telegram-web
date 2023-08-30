import React from 'react';
import { RegistrationPage } from './components/Pages/RegistrationPage';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/Pages/MainPage';
import { LoginPage } from './components/Pages/LoginPage';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/login-page' element={<LoginPage />}/>
          <Route path='/registration-page' element={<RegistrationPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;