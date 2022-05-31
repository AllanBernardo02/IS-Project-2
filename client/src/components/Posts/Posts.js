import React, {useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';


const Posts = ({ setCurrentId }) => {
  // ok nandto, ok so if nandto ungb state ng post san mo gsto idisplay yung total counts
  // sa dashboard po sana sir, nsan yung dashboard component? pnta ka dun pls
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    console.log({
        posts
    })
  }, [posts])
  

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
