import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cos from './components/Home/Cos';
import Coe from './components/Home/Coe';
import Cit from './components/Home/Cit';
import Cie from './components/Home/Cie'

import Auth from './components/Auth/Auth';
import Sana from './components/Sana'
import Student_module from './components/Student_module'
import Dashboard from './components/Dashboard';
import Company from './components/Home/Company';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
  <BrowserRouter>
    <Container maxWidth="lg">
   
      <Routes>
        <Route path="/" element={(!user ? <Sana /> : <Navigate to="/cos" />)}/>
        <Route path="/auth"  element={(!user ? <Auth />: <Navigate to="/cos" />)} />
       
        {/*<Route path="/cos" element={() => (user ?<Cos/> : <Sana/>)} />*/}
        <Route path="/cos" element={<Cos/>} />
        <Route path="/coe" element={<Coe/>} />
        <Route path="/cit" element={<Cit/>} />
        <Route path="/cie" element={<Cie/>} />
        <Route path="/student_module" element={<Student_module/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/organisation" element={<Company/>}/>
        </Routes>
        
      
    </Container>
  </BrowserRouter>
  )
};

export default App;
