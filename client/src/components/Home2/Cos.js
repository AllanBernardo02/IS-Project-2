import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'


import { getPostsBySearch, getPostsCos } from '../../actions/cosPosts'
import CosPosts from '../Posts/CosPosts'

import CosForm from '../Form/CosForm'
import '../Home/Home.css'
import Dashboard from '../Dashboard'
import Sana from '../Sana'
import Table from '../Home/Table'
import '../Home/Coe.css'
import Paginate from '../Pagination'
import '../Home/CosFinal.css'

function useQuery(){
  return new URLSearchParams(useLocation()).search
}

const Cos2 = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const cosposts = useSelector( (state) => state.cosposts)
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const query = useQuery()
  
  const [search, setSearch] = useState('')
  

  useEffect(() => {
    dispatch(getPostsCos()) //cosposts -> 
  }, [currentId, dispatch])

  const searchCosPosts= () => {
    if(search.trim()){
      dispatch(getPostsBySearch({search}))
      history(`/cos2/search?searchCosQuery=${search||'none'}`)
    } 
    else {
      history('/')
    }
  }

  const handleKey = (e) => {
    if (e.KeyCode === 13){
      searchCosPosts()
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
          <h1>College Of Science </h1>
          <h3>Number of Student in COS : {cosposts.length}</h3>
        </div>
        
        
        <form className='search'>
          <h2>Search COS</h2>
          <TextField label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKey} value={search} onChange={(e) => setSearch(e.target.value)}/> 
          <Button className='but' onClick={searchCosPosts} color='primary' variant='contained'> Search </Button>
        </form>
        {/*<CosForm currentId={currentId} setCurrentId={setCurrentId}/>*/}
        <Table/>
        <CosPosts setCurrentId={setCurrentId}/>
       <Button onClick={back} variant="contained" color="primary">Back to Student Modules</Button>
    </div>
  )
}

export default Cos2