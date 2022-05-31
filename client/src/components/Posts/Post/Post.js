import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));

  console.log(post);

  const openPost = () => {
    history(`/posts/${post._id}`)
  }
  

  if(!user?.result?.name) {
    return (
      <div></div>
    );
  }



  return (
    // <Button>Hello</Button>
    <Card className={classes.card}>
    <ButtonBase className={classes.cardAction} onClick={openPost}>
    
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        
        {/*<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>*/}
      </div>
      
      <div className={classes.details}>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"> <h4>Name :</h4>  {post.organisationname}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"> <h4>Background :</h4> {post.organisationbg}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"> <h4>Contact Person :</h4> {post.contactp}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"> <h4>Contact Number :</h4> {post.contactn}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"> <h4>Address :</h4> {post.organisationadd}</Typography>
     
    </ButtonBase>
      <CardActions className={classes.cardActions}>
      {/*{(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <React.Fragment>
         
          <Button size="small" color="primary"  onClick={() => dispatch(likePost(post._id))}>
          Add Time   <h2>{post.hours}</h2>
          </Button>
         
          </React.Fragment>
      )}*/}

          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <div>
              <Button className={classes.action} variant='contained' color="primary" onClick={() => setCurrentId(post._id)}  size="small">
              <EditIcon fontSize='small'/> Edit
              </Button>
            </div>
            )}


          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button className={classes.action} variant='contained' size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}

    
      </CardActions>
        </Card>
  );
};

export default Post;
