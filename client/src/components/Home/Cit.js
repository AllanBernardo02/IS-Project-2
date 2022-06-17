import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { getPostsCit, getPostsBySearch } from '../../actions/citPosts'
import CitPosts from '../Posts/CitPosts'
import CitForm from '../Form/CitForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import './Cit.css'
import './CosFinal.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}


const Cit = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const citposts = useSelector( (state) => state.citposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery()
  const page = query.get('page')
  const searchQuery = query.get('SearchQuery')
  const [search, setSearch] = useState('')


  useEffect(() => {
    dispatch(getPostsCit())
  }, [currentId, dispatch])

  const searchCitPost = () => {
    if(search.trim()) {
      dispatch(getPostsBySearch({search}))
      history(`/citposts/search?searchCitQuery=${search || 'none' }`)
    } else {
      history('/')
    }
  } 

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchCitPost()
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
        <div className='headerss2'>
          <h1>College of Industrial Technology</h1>
          <h3>Number of Student in COE : {citposts.length}</h3>
          
        </div>
        

        <form className='search'>
              <h2 className='h2'>Search Cit</h2>
              <TextField  label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
            
              <Button className='but' onClick={searchCitPost} color='primary' variant='contained'>Search</Button>
        </form>

        <CitForm currentId={currentId} setCurrentId={setCurrentId}/>
        <CitPosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Cit