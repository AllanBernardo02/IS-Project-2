import React, {useEffect, useState} from 'react';
import {Button, Typography, Avatar} from '@material-ui/core';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sana from './Sana';
import './Student_module.css'
import './Home/Home.css'
import * as actionType from '.././constants/actionTypes'


const Student_module = () => {

    // const history = useNavigate()
    // const user = JSON.parse(localStorage.getItem('profile'));

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();
    const user1 = JSON.parse(localStorage.getItem('profileStudent'));


    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history('/');
        setUser(null);
      };
    
    const back = () => {
        history('/dashboard')
    }

    if(!user?.result?.name) {
        return (
          <Sana/>
        );
      }

const back_cos = () => {
    history('/cos')
}

const back_coe = () => {
    history('/coe')
}

const back_cit = () => {
    history('/cit')
}

const back_cie = () => {
    history('/cie')
}
const back_cafa = () =>{
    history('/cafa')
}

const back_cla = () =>{
    history('/cla')
}

const subok = () => {
  if(!user?.result?.name){
      return(
          <h1>hahaha</h1>
      )
  } else {
      return(
      <h1>heheeh</h1>
      )
  }
    
    

}


    return (
        <React.Fragment>
      
        <div className="navbar">
            <div className='sm'>Student Module</div>
            <div className='logo'>
                <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            </div>
            <div className='name'>
                <Typography  variant="h6">{user?.result.name}</Typography>
            </div>
            <div className='ton'>
                <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
            </div>
         
        </div>
            <div className='bahay'>
                <div className='lolo'>
                    <div className='anak' onClick={back_cos}>        
                        
                            <Button >College of Science</Button>
                        
                    </div>
                    <div className='anak' onClick={back_coe}>
                        
                            <Button>College of Engineering</Button>
                      
                    </div>
                </div>
                <div className='lolo'>
                    <div className='anak' onClick={back_cit}>
                        
                            <Button>College of Industrial Technology</Button>
                        
                    </div>
                    <div className='anak' onClick={back_cie}>
                        
                            <Button>College of Industrial Education</Button>
                        
                    </div>
                </div>
                <div className='lolo'>
                    <div className='anak' onClick={back_cafa}>
                        
                            <Button>College of Architecture and Fine Arts</Button>
                        
                    </div>
                    <div className='anak' onClick={back_cla}>
                        
                            <Button>College of Liberal Arts</Button>
                        
                    </div>
                </div>
            </div>
            <div className='dashboardd'>
            {(user1) ?
                <h1>hahaha</h1> : <Button onClick={back} variant="contained" color="primary">Back to Dashboard</Button> 
                }
            </div>
            <h1>{subok()}</h1>
           
        </React.Fragment>
    )
}


export default Student_module;