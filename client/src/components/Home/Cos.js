import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';



import { getPosts, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import Sana from '../Sana';

function useQuery() {
  return new URLSearchParams(useLocation().search) // SEARCH
}

// so anu need mo i count dot 
// sir ung mga post po or data
const Cos = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery() // SEARCH
  const history = useNavigate() //search
  const page = query.get('page') || 1 // search
  const searchQuery = query.get('SearchQuery') // search
  const [search, setSearch] = useState('')

  const user = JSON.parse(localStorage.getItem('profile'));

  // san mo iniistore yung posts data nsa posts componennt?
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => { // search
    if(search.trim()) {
      // distpath > fetch search
      dispatch(getPostsBySearch({ search }))
      history(`/posts/search?searchQuery=${search || 'none'}`)
    } else {
      history('/')
    }
  }

  const handleKeyPress = (e) => { // search
    if(e.keyCode === 13) {
      // search
      searchPost()
    }
  }
 
  
  if(!user?.result?.name) {
    return (
      <Sana/>
    );
  }

  return (
    <Grow in>
      <Container >
      <div className="header">
        <Navbar className="header"/>
      </div>
       
        <Grid container justify="space-between" alignItems="stretch" spacing={1}>
          <Grid item xs={12} sm={4}>
           <form className='text'>
              <h2 className='h2'>Search Organisation</h2>
              <TextField  label='Search' name='search' variant='outlined' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
            
              <Button className='but' onClick={searchPost} color='primary' variant='contained'>Search</Button>
              </form>
            
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          
        </Grid>
      </Container>
    </Grow>
  );
};

export default Cos;
