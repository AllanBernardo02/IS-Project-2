import { TextField, Paper, Typography, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'

import { createCoePost, updateCoePost } from '../../actions/coePosts'

const CoeForm = ({ currentId, setCurrentId}) => {
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
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Editing "${coepost.name}"` : 'Creating Student'}</Typography>
            <TextField name="schoolidcoe" variant="outlined" label="School ID" fullWidth value={coePostData.schoolidcoe} onChange={(e) => setCoePostData({ ...coePostData, schoolidcoe: e.target.value})}/>
            <TextField name="coursecoe" variant="outlined" label="Course" fullWidth value={coePostData.coursecoe} onChange={(e) => setCoePostData({ ...coePostData, coursecoe: e.target.value})}/>
            <TextField name="fullnamecoe" variant="outlined" label="Full Name" fullWidth value={coePostData.fullnamecoe} onChange={(e) => setCoePostData({ ...coePostData, fullnamecoe: e.target.value})}/>
            <TextField name="contactcoe" variant="outlined" label="Contact" fullWidth value={coePostData.contactcoe} onChange={(e) => setCoePostData({ ...coePostData, contactcoe: e.target.value})}/>
            <TextField name="emailcoe" variant="outlined" label="Email" fullWidth value={coePostData.emailcoe} onChange={(e) => setCoePostData({ ...coePostData, emailcoe: e.target.value})}/>
            <TextField name="addresscoe" variant="outlined" label="Address" fullWidth value={coePostData.addresscoe} onChange={(e) => setCoePostData({ ...coePostData, addresscoe: e.target.value})}/>
            <TextField name="school yearcoe" variant="outlined" label="School year" fullWidth value={coePostData.schoolyrcoe} onChange={(e) => setCoePostData({ ...coePostData, schoolyrcoe: e.target.value})}/>
            <TextField name="organisationcoe" variant="outlined" label="Organisation" fullWidth value={coePostData.organisationcoe} onChange={(e) => setCoePostData({ ...coePostData, organisationcoe: e.target.value})}/>

            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCoePostData({ ...coePostData, selectedFile: base64})}/></div>
            <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
    </div>
  )
}

export default CoeForm
