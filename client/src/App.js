import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cos from './components/Home/Cos';
import Coe from './components/Home/Coe';
import Cit from './components/Home/Cit';
import Cie from './components/Home/Cie'
import Cafa from './components/Home/Cafa';
import Cla from './components/Home/Cla';
import CosFinal from './components/Home/CosFinal';

import Auth from './components/Auth/Auth';
import Sana from './components/Sana'
import Student_module from './components/Student_module'
import Dashboard from './components/Dashboard';
import Company from './components/Home/Company';
import PostDetails from './components/PostDetails/PostDetails';
import CoeModal from './components/Form/CoeModal';
import Coor from './components/Home/Coordinator';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
  <BrowserRouter>
    <div>
   
      <Routes>
        <Route path="/" element={(!user ? <Sana /> : <Navigate to="/posts" />)}/>
        <Route path="/auth"  element={(!user ? <Auth />: <Navigate to="/posts" />)} />
       
        {/*<Route path="/cos" element={() => (user ?<Cos/> : <Sana/>)} />*/}
        <Route path="/posts" element={<Cos/>} />
        <Route path="/posts/search" element={<Cos/>} />
        
        <Route path="/coe" element={<Coe/>} />
        <Route path="/coeposts/search" element={<Coe/>} />
        <Route path="/cit" element={<Cit/>} />
        <Route path="/citposts/search" element={<Cit/>} />
        <Route path="/cie" element={<Cie/>} />
        <Route path="/student_module" element={<Student_module/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/organisation" element={<Company/>}/>
         {/*/<Route path='/posts/:id' element={<PostDetails/>}/>*/}
         <Route path='/modal/' element={<CoeModal/>}/>
         <Route path='/coor'element={<Coor/>}/>
         <Route path="/coorposts/search" element={<Coor/>} />
         <Route path='/cafa' element={<Cafa/>}/>
         <Route path='/cla' element={<Cla/>}/>
         <Route path='/cos' element={<CosFinal/>} />
         <Route path='/cosposts/search' element={<CosFinal/>} />
        </Routes>
        
      
    </div>
  </BrowserRouter>
  )
};

export default App;
