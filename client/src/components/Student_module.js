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



    return (
        <div>
            <div>        
                <Link  component={Link} to="/cos">
                    <Button>College of Science</Button>
                </Link>
            </div>
            <div>
                <Link  component={Link} to="/coe">
                    <Button>College of Engineering</Button>
                </Link>
            </div>
            <div>
                <Link  component={Link} to="/cit">
                    <Button>College of Industrial Technology</Button>
                </Link>
            </div>
            <div>
                <Link  component={Link} to="/cie">
                    <Button>College of Industrial Education</Button>
                </Link>
            </div>
            <div>
                <Link  component={Link} to="/cos">
                    <Button>College of Architecture and Fine Arts</Button>
                </Link>
            </div>
            <div>
                <Link  component={Link} to="/cos">
                    <Button>College of Liberal Arts</Button>
                </Link>
            </div>
    
        <Button onClick={back}>Back to Dashboard</Button> 
      
        </div>
    )
}


export default Student_module;