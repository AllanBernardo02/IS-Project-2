import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getPostsCit } from '../../actions/citPosts'
import CitPosts from '../Posts/CitPosts'
import CitForm from '../Form/CitForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import './Cit.css'


const Cit = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const citposts = useSelector( (state) => state.citposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPostsCit())
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
        <div className='headerss2'>
          <h1>College of Industrial Technology</h1>
          <h3>Number of Student in COE : {citposts.length}</h3>
          
        </div>
        
        <CitForm currentId={currentId} setCurrentId={setCurrentId}/>
        <CitPosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Cit