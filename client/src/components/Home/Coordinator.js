import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, TextField, Button} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'


import { getPostsBySearch, getPostsCoor } from '../../actions/coorPosts'
import CoorPosts from '../Posts/CoorPosts'

import CoorForm from '../Form/CoorForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import Table from './Table'

// import './Coor.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Coor = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const coorposts = useSelector( (state) => state.coorposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery()
  const page = query.get('page')
  const searchQuery = query.get('SearchQuery')
  const [search, setSearch] = useState('')

  

  useEffect(() => {
    dispatch(getPostsCoor())
  }, [currentId, dispatch])


  const searchCoorPost = () => {
    if(search.trim()) {
      dispatch(getPostsBySearch({search}))
      history(`/coorposts/search?searchCoorQuery=${search || 'none' }`)
    } else {
      history('/')
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchCoorPost()
    }
  }


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
        
        <form className='text'>
              <h2 className='h2'>Search Coordinator</h2>
              <TextField  label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
            
              <Button className='but' onClick={searchCoorPost} color='primary' variant='contained'>Search</Button>
        </form>

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