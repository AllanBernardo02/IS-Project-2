import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Paper, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'

import { createCoePost, updateCoePost } from '../../actions/coePosts'
import './CoeForm.css'
import useStyles from './styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}








const CoeModal = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const [coePostData, setCoePostData] = useState({ schoolidcoe: '', coursecoe: '', fullnamecoe: '', contactcoe: '', emailcoe: '', addresscoe: '', schoolyrcoe: '',  organisationcoe: '', selectedFile: '' })

  const coepost = useSelector((state) => (currentId ? state.coeposts.find((message) => message._id === currentId) : null))
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))


  useEffect(() => {
      if (coepost) setCoePostData(coepost)
  }, [coepost])

  const clear = () => {
      setCurrentId(0);
      setCoePostData({ schoolidcoe: '', coursecoe: '', fullnamecoe: '', contactcoe: '', emailcoe: '', addresscoe: '', schoolyrcoe: '',  organisationcoe: '', selectedFile: '' })
  }

  const handleSubmit = async (e) => {
      e.preventDefault()

      if (currentId === 0) {
          dispatch(createCoePost({ ...coePostData, name: user?.result?.name }))
          clear()
      } else {
          dispatch(updateCoePost(currentId, { ...coePostData, name: user?.result?.name }))
          clear()
      }
  }

  if(!user?.result?.name) {
      return (
        <Paper>
          <Typography variant="h6">
            Please Sign In to create your own date and like other's memories.
          </Typography>
        </Paper>
      );
    }
 

 
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div style={modalStyle} className={classes.paper1}>
      <form className='form' autoComplete='off' noValidate onSubmit={handleSubmit}>
      <Typography className='title' variant="h4">{currentId ? `Editing "${coepost.name}"` : 'Creating Student'}</Typography>
      <h4>School ID</h4>
      <TextField className='textfield' name="schoolidcoe" variant="outlined" label="Student ID"   fullWidth value={coePostData.schoolidcoe} onChange={(e) => setCoePostData({ ...coePostData, schoolidcoe: e.target.value})}/>
      <h4>Course</h4>
      <TextField className='textfield' name="coursecoe" variant="outlined" label="Course"  fullWidth value={coePostData.coursecoe} onChange={(e) => setCoePostData({ ...coePostData, coursecoe: e.target.value})}/>
      <h4>Full Name</h4>
      <TextField className='textfield' name="fullnamecoe" variant="outlined" label="Full Name"  fullWidth value={coePostData.fullnamecoe} onChange={(e) => setCoePostData({ ...coePostData, fullnamecoe: e.target.value})}/>
      <h4>Contact Number</h4>
      <TextField className='textfield' name="contactcoe" variant="outlined" label="Contact"  fullWidth value={coePostData.contactcoe} onChange={(e) => setCoePostData({ ...coePostData, contactcoe: e.target.value})}/>
      <h4>Email</h4>
      <TextField className='textfield' name="emailcoe" variant="outlined" label="Email"  fullWidth value={coePostData.emailcoe} onChange={(e) => setCoePostData({ ...coePostData, emailcoe: e.target.value})}/>
      <h4>Address</h4>
      <TextField className='textfield' name="addresscoe" variant="outlined" label="Address"  fullWidth value={coePostData.addresscoe} onChange={(e) => setCoePostData({ ...coePostData, addresscoe: e.target.value})}/>
      <h4>School Year</h4>
      <TextField className='textfield' name="school yearcoe" variant="outlined" label="School year"  fullWidth value={coePostData.schoolyrcoe} onChange={(e) => setCoePostData({ ...coePostData, schoolyrcoe: e.target.value})}/>
      <h4>Organisation</h4>
      <TextField className='textfield' name="organisationcoe" variant="outlined" label="Organisation"  fullWidth value={coePostData.organisationcoe} onChange={(e) => setCoePostData({ ...coePostData, organisationcoe: e.target.value})}/>


      <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCoePostData({ ...coePostData, selectedFile: base64})}/></div>
      <Button className={classes.submit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
      {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
  </form>
      
    </div>
      </Modal>
    </div>
  );
}

export default CoeModal