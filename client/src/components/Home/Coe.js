import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button} from 'react-bootstrap'

import { getPostsCoe } from '../../actions/coePosts'
import CoePosts from '../Posts/CoePosts'

import CoeForm from '../Form/CoeForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import Table from './Table'
import './Coe.css'



const Coe = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const coeposts = useSelector( (state) => state.coeposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));

  

  useEffect(() => {
    dispatch(getPostsCoe())
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
          <h1>College Of Engineering </h1>
          <h3>Number of Student in COE : {coeposts.length}</h3>
        </div>
        
        
        
        <CoeForm currentId={currentId} setCurrentId={setCurrentId}/>
        <Table/>
        <CoePosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Coe