import React from 'react';
import './App.css';
import Header from './components/widgets/Header/Header'
import MainPage from './components/pages/MainPage/MainPage'
import NotFoundPage from './components/pages/FoundPage/NotFoundPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/widgets/Footer/Footer';
import AuthenticationSection from './components/pages/AuthenticationSection/AuthenticationSection';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { AuthenticationContext } from './types/AuthenticationContext';

const App: React.FC = () => {
  
  const [classAuthentication, setClassAuthentication] = useState<any>("AuthenticationSectionBackgroundClose");

  return (
    <AuthenticationContext.Provider value={{classAuthentication, setClassAuthentication}}>
      <BrowserRouter>
          <Header/>
          <AuthenticationSection className={classAuthentication}/>
          <Routes> 
            <Route path="/" element={<MainPage/>}/>
            <Route path="NotFoundPage" element={<NotFoundPage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
}

export default App;
