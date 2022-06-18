import { TextField, Paper, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64'
import './CitForm.css'

import { createCafaPost, updateCafaPost } from "../../actions/cafaPosts";

const CafaForm = ({ currentId, setCurrentId}) => {
    const [cafaPostData, setCafaPostData] = useState({ schoolidcafa: '', coursecafa: '', fullnamecafa: '', contactcafa: '', emailcafa: '', addresscafa: '', schoolyrcafa: '',  organisationcafa: '', selectedFile: '' })

    const cafapost = useSelector((state) => (currentId ? state.cafaposts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if (cafapost) setCafaPostData(cafapost)
    }, [cafapost])

    const clear = () => {
        setCurrentId(0);
        setCafaPostData({ schoolidcafa: '', coursecafa: '', fullnamecafa: '', contactcafa: '', emailcafa: '', addresscafa: '', schoolyrcafa: '',  organisationcafa: '', selectedFile: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentId === 0) {
            dispatch(createCafaPost({ ...cafaPostData, name: user?.result?.name }))
            clear()
        } else {
            dispatch(updateCafaPost(currentId, { ...cafaPostData, name: user?.result?.name }))
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
        <form className="form" autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography className='title' variant="h6">{currentId ? `Editing "${cafapost.name}"` : 'Creating Student'}</Typography>
            <TextField className='textfield' name="schoolidcafa" variant="outlined" label="School ID" fullWidth value={cafaPostData.schoolidcafa} onChange={(e) => setCafaPostData({ ...cafaPostData, schoolidcafa: e.target.value})}/>
            <TextField className='textfield' name="coursecafa" variant="outlined" label="Course" fullWidth value={cafaPostData.coursecafa} onChange={(e) => setCafaPostData({ ...cafaPostData, coursecafa: e.target.value})}/>
            <TextField className='textfield' name="fullnamecafa" variant="outlined" label="Full Name" fullWidth value={cafaPostData.fullnamecafa} onChange={(e) => setCafaPostData({ ...cafaPostData, fullnamecafa: e.target.value})}/>
            <TextField className='textfield' name="contactcafa" variant="outlined" label="Contact" fullWidth value={cafaPostData.contactcafa} onChange={(e) => setCafaPostData({ ...cafaPostData, contactcafa: e.target.value})}/>
            <TextField className='textfield' name="emailcafa" variant="outlined" label="Email" fullWidth value={cafaPostData.emailcafa} onChange={(e) => setCafaPostData({ ...cafaPostData, emailcafa: e.target.value})}/>
            <TextField className='textfield' name="addresscafa" variant="outlined" label="Address" fullWidth value={cafaPostData.addresscafa} onChange={(e) => setCafaPostData({ ...cafaPostData, addresscafa: e.target.value})}/>
            <TextField className='textfield' name="school yearcafa" variant="outlined" label="School year" fullWidth value={cafaPostData.schoolyrcafa} onChange={(e) => setCafaPostData({ ...cafaPostData, schoolyrcafa: e.target.value})}/>
            <TextField className='textfield' name="organisationcafa" variant="outlined" label="Organisation" fullWidth value={cafaPostData.organisationcafa} onChange={(e) => setCafaPostData({ ...cafaPostData, organisationcafa: e.target.value})}/>

            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCafaPostData({ ...cafaPostData, selectedFile: base64})}/></div>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
    </div>
  )
}

export default CafaForm