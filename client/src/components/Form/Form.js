import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ organisationname: '', organisationbg: '', contactp: '', contactn: '', organisationadd: '', selectedFile: '' }); //new org
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ organisationname: '', organisationbg: '', contactp: '', contactn: '', organisationadd: '', selectedFile: '' }); //new org
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    
    // <Button component={Link} to="../Sana" variant="contained" color="primary">Helo</Button>
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.name}"` : 'Creating Organisation'}</Typography>
        <TextField InputlabelProps={{className: classes.floatinglabelFocusStyle}} inputProps={{ className: classes.input }} className={classes.input} name="organisation name" variant="outlined" label="Organisation Name" fullWidth value={postData.organisationname} onChange={(e) => setPostData({ ...postData, organisationname: e.target.value })} />

        <TextField InputlabelProps={{className: classes.floatinglabelFocusStyle}} inputProps={{ className: classes.input }} className={classes.input} name="organisation background" variant="outlined" label="Organisation Background" fullWidth value={postData.organisationbg} onChange={(e) => setPostData({ ...postData, organisationbg: e.target.value })}/>
        <TextField InputlabelProps={{className: classes.floatinglabelFocusStyle}} inputProps={{ className: classes.input }} className={classes.input} name="contact person" variant="outlined" label="Contact Person" fullWidth value={postData.contactp} onChange={(e) => setPostData({ ...postData, contactp: e.target.value })}/>
        <TextField InputlabelProps={{className: classes.floatinglabelFocusStyle}} inputProps={{ className: classes.input }} className={classes.input} name="contact number" variant="outlined" label="Contact Number" fullWidth value={postData.contactn} onChange={(e) => setPostData({ ...postData, contactn: e.target.value })}/>
        <TextField InputlabelProps={{className: classes.floatinglabelFocusStyle}} inputProps={{ className: classes.input }} className={classes.input} name="organisation address" variant="outlined" label="Organisation Address" fullWidth value={postData.organisationadd} onChange={(e) => setPostData({ ...postData, organisationadd: e.target.value })}/>
        
        
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained"  size="large" color='primary' type="submit" fullWidth>Submit</Button>
        {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
      </form>
    </Paper>
  );
};

export default Form;
