import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import Sana from '../Sana';

// so anu need mo i count dot 
// sir ung mga post po or data
const Cos = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  // san mo iniistore yung posts data nsa posts componennt?
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  
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
