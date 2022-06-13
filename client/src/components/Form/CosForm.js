import React, { useEffect, useState } from 'react'
import { TextField, Paper, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'

import { createCosPost, updateCosPost } from '../../actions/cosPosts'
import './CoeForm.css'
import useStyles from './styles'
import CoeModal from './CoeModal'


const CosForm = ({ currentId, setCurrentId}) => {
    const [cosPostData, setCosPostData] = useState({ schoolidcos: '', coursecos: '', fullnamecos: '', contactcos: '', emailcos: '', addresscos: '', schoolyrcos: '',  organisationcos: '', selectedFile: '' })

    const cospost = useSelector((state) => (currentId ? state.cosposts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    useEffect(() => {
        if (cospost) setCosPostData(cospost)
    }, [cospost])

    const clear = () => {
        setCurrentId(0);
        setCosPostData({ schoolidcos: '', coursecos: '', fullnamecos: '', contactcos: '', emailcos: '', addresscos: '', schoolyrcos: '',  organisationcos: '', selectedFile: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentId === 0) {
            dispatch(createCosPost({ ...cosPostData, name: user?.result?.name }))
            clear()
        } else {
            dispatch(updateCosPost(currentId, { ...cosPostData, name: user?.result?.name }))
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
            <Typography className='title' variant="h4">{currentId ? `Editing "${cospost.name}"` : 'Creating Student'}</Typography>
            <h4>School ID</h4>
            <TextField className='textfields' name="schoolidcos" variant="outlined" label="Student ID"   fullWidth value={cosPostData.schoolidcos} onChange={(e) => setCosPostData({ ...cosPostData, schoolidcos: e.target.value})}/>
            <h4>Course</h4>
            <TextField className='textfields' name="coursecos" variant="outlined" label="Course"  fullWidth value={cosPostData.coursecos} onChange={(e) => setCosPostData({ ...cosPostData, coursecos: e.target.value})}/>
            <h4>Full Name</h4>
            <TextField className='textfields' name="fullnamecos" variant="outlined" label="Full Name"  fullWidth value={cosPostData.fullnamecos} onChange={(e) => setCosPostData({ ...cosPostData, fullnamecos: e.target.value})}/>
            <h4>Contact Number</h4>
            <TextField className='textfields' name="contactcos" variant="outlined" label="Contact"  fullWidth value={cosPostData.contactcos} onChange={(e) => setCosPostData({ ...cosPostData, contactcos: e.target.value})}/>
            <h4>Email</h4>
            <TextField className='textfields' name="emailcos" variant="outlined" label="Email"  fullWidth value={cosPostData.emailcos} onChange={(e) => setCosPostData({ ...cosPostData, emailcos: e.target.value})}/>
            <h4>Address</h4>
            <TextField className='textfields' name="addresscos" variant="outlined" label="Address"  fullWidth value={cosPostData.addresscos} onChange={(e) => setCosPostData({ ...cosPostData, addresscos: e.target.value})}/>
            <h4>School Year</h4>
            <TextField className='textfields' name="school yearcos" variant="outlined" label="School year"  fullWidth value={cosPostData.schoolyrcos} onChange={(e) => setCosPostData({ ...cosPostData, schoolyrcos: e.target.value})}/>
            <h4>Organisation</h4>
            <TextField className='textfields' name="organisationcos" variant="outlined" label="Organisation"  fullWidth value={cosPostData.organisationcos} onChange={(e) => setCosPostData({ ...cosPostData, organisationcos: e.target.value})}/>


            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCosPostData({ ...cosPostData, selectedFile: base64})}/></div>
            <Button className={classes.submit} color='primary' variant="contained" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
        
    </div>
  )
}

export default CosForm