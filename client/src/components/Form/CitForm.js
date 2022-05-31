import { TextField, Paper, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64'

import { createCitPost, updateCitPost } from "../../actions/citPosts";

const CitForm = ({ currentId, setCurrentId}) => {
    const [citPostData, setCitPostData] = useState({ schoolidcit: '', coursecit: '', fullnamecit: '', contactcit: '', emailcit: '', addresscit: '', schoolyrcit: '',  organisationcit: '', selectedFile: '' })

    const citpost = useSelector((state) => (currentId ? state.citposts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if (citpost) setCitPostData(citpost)
    }, [citpost])

    const clear = () => {
        setCurrentId(0);
        setCitPostData({ schoolidcit: '', coursecit: '', fullnamecit: '', contactcit: '', emailcit: '', addresscit: '', schoolyrcit: '',  organisationcit: '', selectedFile: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentId === 0) {
            dispatch(createCitPost({ ...citPostData, name: user?.result?.name }))
            clear()
        } else {
            dispatch(updateCitPost(currentId, { ...citPostData, name: user?.result?.name }))
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
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Editing "${citpost.name}"` : 'Creating Student'}</Typography>
            <TextField name="schoolidcit" variant="outlined" label="School ID" fullWidth value={citPostData.schoolidcit} onChange={(e) => setCitPostData({ ...citPostData, schoolidcit: e.target.value})}/>
            <TextField name="coursecit" variant="outlined" label="Course" fullWidth value={citPostData.coursecit} onChange={(e) => setCitPostData({ ...citPostData, coursecit: e.target.value})}/>
            <TextField name="fullnamecit" variant="outlined" label="Full Name" fullWidth value={citPostData.fullnamecit} onChange={(e) => setCitPostData({ ...citPostData, fullnamecit: e.target.value})}/>
            <TextField name="contactcit" variant="outlined" label="Contact" fullWidth value={citPostData.contactcit} onChange={(e) => setCitPostData({ ...citPostData, contactcit: e.target.value})}/>
            <TextField name="emailcit" variant="outlined" label="Email" fullWidth value={citPostData.emailcit} onChange={(e) => setCitPostData({ ...citPostData, emailcit: e.target.value})}/>
            <TextField name="addresscit" variant="outlined" label="Address" fullWidth value={citPostData.addresscit} onChange={(e) => setCitPostData({ ...citPostData, addresscit: e.target.value})}/>
            <TextField name="school yearcit" variant="outlined" label="School year" fullWidth value={citPostData.schoolyrcit} onChange={(e) => setCitPostData({ ...citPostData, schoolyrcit: e.target.value})}/>
            <TextField name="organisationcit" variant="outlined" label="Organisation" fullWidth value={citPostData.organisationcit} onChange={(e) => setCitPostData({ ...citPostData, organisationcit: e.target.value})}/>

            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCitPostData({ ...citPostData, selectedFile: base64})}/></div>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
    </div>
  )
}

export default CitForm