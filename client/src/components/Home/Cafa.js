import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { getPostsCafa, getPostsBySearch } from '../../actions/cafaPosts'
import CafaPosts from '../Posts/CafaPosts'
import CafaForm from '../Form/CafaForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import './Cit.css'
import './CosFinal.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}


const Cafa = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const cafaposts = useSelector( (state) => state.cafaposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery()
  const page = query.get('page')
  const searchQuery = query.get('SearchQuery')
  const [search, setSearch] = useState('')


  useEffect(() => {
    dispatch(getPostsCafa())
  }, [currentId, dispatch])

  const searchCafaPost = () => {
    if(search.trim()) {
      dispatch(getPostsBySearch({search}))
      history(`/cafaposts/search?searchCafaQuery=${search || 'none' }`)
    } else {
      history('/')
    }
  } 

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchCafaPost()
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
          <h1>College of Architecture and Fine Arts</h1>
          <h3>Number of Student in CAFA : {cafaposts.length}</h3>
          
        </div>
        

        <form className='search'>
              <h2 className='h2'>Search Cafa</h2>
              <TextField  label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
            
              <Button className='but' onClick={searchCafaPost} color='primary' variant='contained'>Search</Button>
        </form>

        <CafaForm currentId={currentId} setCurrentId={setCurrentId}/>
        <CafaPosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Cafa