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

import Cos2 from './components/Home2/Cos';
import Coe2 from './components/Home2/Coe';
import Cit2 from './components/Home2/Cit';
import Cie2 from './components/Home2/Cie';

import Auth from './components/Auth/Auth';
import AuthStudent from './components/Auth/AuthStudent';
import Sana from './components/Sana'
import Student_module from './components/Student_module'
import Dashboard from './components/Dashboard';
import Company from './components/Home/Company';
import PostDetails from './components/PostDetails/PostDetails';
import CoeModal from './components/Form/CoeModal';
import Coor from './components/Home/Coordinator';
import Student_module2 from './components/Student_module2';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const user1 = JSON.parse(localStorage.getItem('profileStudent'));

  

  return (
  <BrowserRouter>
    <div>
   
      <Routes>
        {/*<Route path="/" element={(!user ? <Sana /> : <Navigate to="/posts" />)}/>*/}
        <Route path="/" element={<Sana/>}/>
        <Route path="/auth"  element={(!user ? <Auth />: <Navigate to="/posts" />)} />
        <Route path="/auth_student" element={<AuthStudent/>}/>  
        {/*<Route path="/cos" element={() => (user ?<Cos/> : <Sana/>)} />*/}
        <Route path="/posts" element={<Cos/>} />
        <Route path="/posts/search" element={<Cos/>} />
        
        <Route path="/coe" element={<Coe/>} />
        <Route path="/coeposts/search" element={<Coe/>} />
        <Route path="/cit" element={<Cit/>} />
        <Route path="/citposts/search" element={<Cit/>} />
        <Route path="/cie" element={<Cie/>} />
        <Route path="/cieposts/search" element={<Cie/>} />
        <Route path="/student_module" element={<Student_module/>}/>
        <Route path="/student_module2" element={<Student_module2/>}/>
        
         <Route path="/dashboard" allowedRoles={user} element={<Dashboard/>}/>
        
         <Route path="/organisation" element={<Company/>}/>
         <Route path='/posts/:id' element={<PostDetails/>}/>
         <Route path='/modal/' element={<CoeModal/>}/>
         <Route path='/coor'element={<Coor/>}/>
         <Route path="/coorposts/search" element={<Coor/>} />
         <Route path='/cafa' element={<Cafa/>}/>
         <Route path='/cafaPosts/search' element={<Cafa/>}/>
         <Route path='/cla' element={<Cla/>}/>
         <Route path='/claposts/search' element={<Cla/>}/>
         <Route path='/cos' element={<CosFinal/>} />
         <Route path='/cosposts/search' element={<CosFinal/>} />



         <Route path='/cos2' element={<Cos2/>} />
         <Route path='/cos2/search' element={<Cos2/>} />

         <Route path='/coe2' element={<Coe2/>} />
         <Route path='/coe2/search' element={<Coe2/>} />

         <Route path='/cit2' element={<Cit2/>} />
         <Route path='/cit2/search' element={<Cit2/>} />

         <Route path='/cie2' element={<Cie2/>} />
         <Route path='/cie2/search' element={<Cie2/>} />

        </Routes>
        
      
    </div>
  </BrowserRouter>
  )
};

export default App;
