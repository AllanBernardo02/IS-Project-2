import React from 'react';
import {Button} from '@material-ui/core';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sana from './Sana';
import './Student_module.css'


const Student_module = () => {

    const history = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'));

    const back = () => {
        history('/dashboard')
    }

    if(!user?.result?.name) {
        return (
          <Sana/>
        );
      }

const back_cos = () => {
    history('/posts')
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
    return (
        <React.Fragment>
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
                <Button onClick={back} variant="contained" color="primary">Back to Dashboard</Button> 
            </div>
        </React.Fragment>
    )
}


export default Student_module;