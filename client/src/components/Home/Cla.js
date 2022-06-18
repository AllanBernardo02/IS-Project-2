import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { getPostsCla, getPostsBySearch } from '../../actions/claPosts'
import ClaPosts from '../Posts/ClaPosts'
import ClaForm from '../Form/ClaForm'
import './Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import './Cit.css'
import './CosFinal.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}


const Cla = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const claposts = useSelector( (state) => state.claposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery()
  const page = query.get('page')
  const searchQuery = query.get('SearchQuery')
  const [search, setSearch] = useState('')


  useEffect(() => {
    dispatch(getPostsCla())
  }, [currentId, dispatch])

  const searchClaPost = () => {
    if(search.trim()) {
      dispatch(getPostsBySearch({search}))
      history(`/claposts/search?searchClaQuery=${search || 'none' }`)
    } else {
      history('/')
    }
  } 

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchClaPost()
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
          <h1>College of Liberal Arts</h1>
          <h3>Number of Student in CLA : {claposts.length}</h3>
          
        </div>
        

        <form className='search'>
              <h2 className='h2'>Search Cla</h2>
              <TextField  label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
            
              <Button className='but' onClick={searchClaPost} color='primary' variant='contained'>Search</Button>
        </form>

        <ClaForm currentId={currentId} setCurrentId={setCurrentId}/>
        <ClaPosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Module</Button>
    </div>
  )
}

export default Cla