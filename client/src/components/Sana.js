import React from 'react';
import {Button} from '@material-ui/core';

import { Link } from 'react-router-dom';
import './Sana.css'
import tuplogo from '../images/tuplogo.png'
const Sana = () => {
    return (
        <div className='body'>
            <div className='headers'>
                <img className='img' src={tuplogo}></img>
                <h1 className='main-title'>OJT RECORD MONITORING SYSTEM</h1>
            </div>
            <div className='content'>
                <div className='div-butt'>
                    <div className='coor-butt'>
                        <Button className='button1' component={Link} to="/auth" variant="contained" style={{backgroundColor: '#59b984'}}><h3>Log In as Coordinator</h3></Button>
                    </div>
                    <div className='stu-butt'>
                        <Button className='button2' component={Link} to="/" variant="contained" style={{backgroundColor: '#59b984'}}><h3>Log In as Student</h3></Button>
                    </div>
                </div>
                <div>
                    <div className='information'>
                    <h1 className='title'>ORMS-TUPM</h1>
                    <blockquote>This project system makes the coordinators work easily to monitor their respective handled students. Specially, in order to 
                    eliminate the problems encountered in the manual process. The system will also keep the records of the trainee electronically 
                    for easy retrieval. The system will be reliable and efficient to use.</blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sana;