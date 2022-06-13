import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { getPostsCos } from '../../actions/cosPosts'
import CosPosts from '../Posts/CosPosts'

import CosForm from '../Form/CosForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import Table from './Table'
import './Coe.css'



const CosFinal = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const cosposts = useSelector( (state) => state.cosposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));

  

  useEffect(() => {
    dispatch(getPostsCos())
  }, [currentId, dispatch])


  const back = () => {
    history("/student_module")
  }

  if(!user?.result?.name) {
    return (
      <Sana/>
    );
  }


  return (
    <div>
        <div className='headerss'>
          <h1>College Of Science </h1>
          <h3>Number of Student in COS : {cosposts.length}</h3>
        </div>
        
        
        
        <CosForm currentId={currentId} setCurrentId={setCurrentId}/>
        <Table/>
        <CosPosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Modules</Button>
    </div>
  )
}

export default CosFinal