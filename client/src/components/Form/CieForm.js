import React, { useEffect, useState } from 'react'
import { TextField, Paper, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'

import { createCiePost, updateCiePost } from '../../actions/ciePosts'
import './CoeForm.css'
import useStyles from './styles'



const CieForm = ({ currentId, setCurrentId}) => {
    const [ciePostData, setCiePostData] = useState({ schoolidcie: '', coursecie: '', fullnamecie: '', contactcie: '', emailcie: '', addresscie: '', schoolyrcie: '',  organisationcie: '', selectedFile: '' })

    const ciepost = useSelector((state) => (currentId ? state.cieposts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    useEffect(() => {
        if (ciepost) setCiePostData(ciepost)
    }, [ciepost])

    const clear = () => {
        setCurrentId(0);
        setCiePostData({ schoolidcie: '', coursecie: '', fullnamecie: '', contactcie: '', emailcie: '', addresscie: '', schoolyrcie: '',  organisationcie: '', selectedFile: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentId === 0) {
            dispatch(createCiePost({ ...ciePostData, name: user?.result?.name }))
            clear()
        } else {
            dispatch(updateCiePost(currentId, { ...ciePostData, name: user?.result?.name }))
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
        <form className='formss' autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography className='title' variant="h4">{currentId ? `Editing "${ciepost.name}"` : 'Creating Student'}</Typography>
            <h4>School ID</h4>
            <TextField className='textfields' name="schoolidcie" variant="outlined" label="Student ID"   fullWidth value={ciePostData.schoolidcie} onChange={(e) => setCiePostData({ ...ciePostData, schoolidcie: e.target.value})}/>
            <h4>Course</h4>
            <TextField className='textfields' name="coursecie" variant="outlined" label="Course"  fullWidth value={ciePostData.coursecie} onChange={(e) => setCiePostData({ ...ciePostData, coursecie: e.target.value})}/>
            <h4>Full Name</h4>
            <TextField className='textfields' name="fullnamecie" variant="outlined" label="Full Name"  fullWidth value={ciePostData.fullnamecie} onChange={(e) => setCiePostData({ ...ciePostData, fullnamecie: e.target.value})}/>
            <h4>Contact Number</h4>
            <TextField className='textfields' name="contactcie" variant="outlined" label="Contact"  fullWidth value={ciePostData.contactcie} onChange={(e) => setCiePostData({ ...ciePostData, contactcie: e.target.value})}/>
            <h4>Email</h4>
            <TextField className='textfields' name="emailcie" variant="outlined" label="Email"  fullWidth value={ciePostData.emailcie} onChange={(e) => setCiePostData({ ...ciePostData, emailcie: e.target.value})}/>
            <h4>Address</h4>
            <TextField className='textfields' name="addresscie" variant="outlined" label="Address"  fullWidth value={ciePostData.addresscie} onChange={(e) => setCiePostData({ ...ciePostData, addresscie: e.target.value})}/>
            <h4>School Year</h4>
            <TextField className='textfields' name="school yearcie" variant="outlined" label="School year"  fullWidth value={ciePostData.schoolyrcie} onChange={(e) => setCiePostData({ ...ciePostData, schoolyrcie: e.target.value})}/>
            <h4>Organisation</h4>
            <TextField className='textfields' name="organisationcie" variant="outlined" label="Organisation"  fullWidth value={ciePostData.organisationcie} onChange={(e) => setCiePostData({ ...ciePostData, organisationcie: e.target.value})}/>


            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCiePostData({ ...ciePostData, selectedFile: base64})}/></div>
            <Button className={classes.submit} color='primary' variant="contained" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
        
    </div>
  )
}

export default CieForm
