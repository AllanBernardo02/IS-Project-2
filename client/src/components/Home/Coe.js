import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getPosts } from '../../actions/coePosts'
import CoePosts from '../Posts/CoePosts'
import CoeForm from '../Form/CoeForm'


const Coe = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const coeposts = useSelector( (state) => state.coeposts)
  const history = useNavigate()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])


  const back = () => {
    history("/student_module")
  }

  

  return (
    <div>
        <h1>College Of Engineering</h1>
        <div>{coeposts.length}</div>
        <CoeForm currentId={currentId} setCurrentId={setCurrentId}/>
        <CoePosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Coe