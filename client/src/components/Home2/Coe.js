import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button, TextField} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate , useLocation } from 'react-router-dom'


import { getPostsBySearch, getPostsCoe } from '../../actions/coePosts'
import CoePosts from '../Posts/CoePosts'

import CoeForm from '../Form/CoeForm'
import '../Home/Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import Table from '../Home/Table'
import '../Home/Coe.css'
import '../Home/CosFinal.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Coe2 = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const coeposts = useSelector( (state) => state.coeposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery()
  const page = query.get('page')
  const searchQuery = query.get('SearchQuery')
  const [search, setSearch] = useState('')
  

  useEffect(() => {
    dispatch(getPostsCoe())
  }, [currentId, dispatch])

  const searchCoePost = () => {
    if(search.trim()) {
      dispatch(getPostsBySearch({search}))
      history(`/coe2/search?searchCoeQuery=${search || 'none' }`)
    } else {
      history('/')
    }
  } 

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchCoePost()
    }
  }

  const back = () => {
    history("/student_module2")
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
        
        <form className='search'>
              <h2 className='h2'>Search Coe</h2>
              <TextField  label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
            
              <Button className='but' onClick={searchCoePost} color='primary' variant='contained'>Search</Button>
        </form>
        
        {/*<CoeForm currentId={currentId} setCurrentId={setCurrentId}/>*/}
        <Table/>
        <CoePosts setCurrentId={setCurrentId}/>
        <Button onClick={back} variant="contained" color="primary">Back to Student Modules</Button>
    </div>
  )
}

export default Coe2