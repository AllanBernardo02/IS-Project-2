import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button} from 'react-bootstrap'

import { getPostsCoor } from '../../actions/coorPosts'
import CoorPosts from '../Posts/CoorPosts'

import CoorForm from '../Form/CoorForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import Table from './Table'
// import './Coor.css'



const Coor = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const coorposts = useSelector( (state) => state.coorposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));

  

  useEffect(() => {
    dispatch(getPostsCoor())
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
          <h1>School Coordinator </h1>
          <h3>Number of Coordinator : {coorposts.length}</h3>
        </div>
        
        <div className='main-div'>
          <div>
            <CoorForm currentId={currentId} setCurrentId={setCurrentId}/>
          </div>
          <div>
            <CoorPosts setCurrentId={setCurrentId}/>
          </div>
          
        </div>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Coor