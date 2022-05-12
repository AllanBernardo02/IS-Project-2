import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from '../../actions/coePosts'
import CoePosts from '../Posts/CoePosts'
import CoeForm from '../Form/CoeForm'


const Coe = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const coeposts = useSelector( (state) => state.coeposts)

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])



  return (
    <div>
        <h1>College Of Engineering</h1>
        <div>{coeposts.length}</div>
        <CoeForm currentId={currentId} setCurrentId={setCurrentId}/>
        <CoePosts setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Coe