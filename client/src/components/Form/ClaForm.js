import { TextField, Paper, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64'
import './CitForm.css'

import { createClaPost, updateClaPost } from "../../actions/claPosts";

const ClaForm = ({ currentId, setCurrentId}) => {
    const [claPostData, setClaPostData] = useState({ schoolidcla: '', coursecla: '', fullnamecla: '', contactcla: '', emailcla: '', addresscla: '', schoolyrcla: '',  organisationcla: '', selectedFile: '' })

    const clapost = useSelector((state) => (currentId ? state.claposts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if (clapost) setClaPostData(clapost)
    }, [clapost])

    const clear = () => {
        setCurrentId(0);
        setClaPostData({ schoolidcla: '', coursecla: '', fullnamecla: '', contactcla: '', emailcla: '', addresscla: '', schoolyrcla: '',  organisationcla: '', selectedFile: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentId === 0) {
            dispatch(createClaPost({ ...claPostData, name: user?.result?.name }))
            clear()
        } else {
            dispatch(updateClaPost(currentId, { ...claPostData, name: user?.result?.name }))
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
            <Typography className='title' variant="h6">{currentId ? `Editing "${clapost.name}"` : 'Creating Student'}</Typography>
            <TextField className='textfield' name="schoolidcla" variant="outlined" label="School ID" fullWidth value={claPostData.schoolidcla} onChange={(e) => setClaPostData({ ...claPostData, schoolidcla: e.target.value})}/>
            <TextField className='textfield' name="coursecla" variant="outlined" label="Course" fullWidth value={claPostData.coursecla} onChange={(e) => setClaPostData({ ...claPostData, coursecla: e.target.value})}/>
            <TextField className='textfield' name="fullnamecla" variant="outlined" label="Full Name" fullWidth value={claPostData.fullnamecla} onChange={(e) => setClaPostData({ ...claPostData, fullnamecla: e.target.value})}/>
            <TextField className='textfield' name="contactcla" variant="outlined" label="Contact" fullWidth value={claPostData.contactcla} onChange={(e) => setClaPostData({ ...claPostData, contactcla: e.target.value})}/>
            <TextField className='textfield' name="emailcla" variant="outlined" label="Email" fullWidth value={claPostData.emailcla} onChange={(e) => setClaPostData({ ...claPostData, emailcla: e.target.value})}/>
            <TextField className='textfield' name="addresscla" variant="outlined" label="Address" fullWidth value={claPostData.addresscla} onChange={(e) => setClaPostData({ ...claPostData, addresscla: e.target.value})}/>
            <TextField className='textfield' name="school yearcla" variant="outlined" label="School year" fullWidth value={claPostData.schoolyrcla} onChange={(e) => setClaPostData({ ...claPostData, schoolyrcla: e.target.value})}/>
            <TextField className='textfield' name="organisationcla" variant="outlined" label="Organisation" fullWidth value={claPostData.organisationcla} onChange={(e) => setClaPostData({ ...claPostData, organisationcla: e.target.value})}/>

            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setClaPostData({ ...claPostData, selectedFile: base64})}/></div>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
    </div>
  )
}

export default ClaForm