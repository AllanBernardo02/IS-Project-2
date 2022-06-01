import React, { useEffect, useState } from 'react'
import { TextField, Paper, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'

import { createCoorPost, updateCoorPost } from '../../actions/coorPosts'
// import './CoorForm.css'
import useStyles from './styles'
import CoeModal from './CoeModal'


const CoorForm = ({ currentId, setCurrentId}) => {
    const [coorPostData, setCoorPostData] = useState({ fullnamecoor:'', contactcoor:'',emailcoor:'',addresscoor:'',selectedFile:'' })

    const coorpost = useSelector((state) => (currentId ? state.coeposts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    useEffect(() => {
        if (coorpost) setCoorPostData(coorpost)
    }, [coorpost])

    const clear = () => {
        setCurrentId(0);
        setCoorPostData({ fullnamecoor: '', contactcoor: '', emailcoor: '', addresscoor: '', selectedFile: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (currentId === 0) {
            dispatch(createCoorPost({ ...coorPostData, name: user?.result?.name }))
            clear()
        } else {
            dispatch(updateCoorPost(currentId, { ...coorPostData, name: user?.result?.name }))
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
        <form className='form' autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Typography className='title' variant="h4">{currentId ? `Editing "${coorpost.name}"` : 'Creating Student'}</Typography>
            <h4>Full Name</h4>
            <TextField className='textfield' name="fullnamecoor" variant="outlined" label="Full Name"  fullWidth value={coorPostData.fullnamecoor} onChange={(e) => setCoorPostData({ ...coorPostData, fullnamecoor: e.target.value})}/>
            <h4>Contact Number</h4>
            <TextField className='textfield' name="contactcoor" variant="outlined" label="Contact"  fullWidth value={coorPostData.contactcoor} onChange={(e) => setCoorPostData({ ...coorPostData, contactcoor: e.target.value})}/>
            <h4>Email</h4>
            <TextField className='textfield' name="emailcoor" variant="outlined" label="Email"  fullWidth value={coorPostData.emailcoor} onChange={(e) => setCoorPostData({ ...coorPostData, emailcoor: e.target.value})}/>
            <h4>Address</h4>
            <TextField className='textfield' name="addresscoor" variant="outlined" label="Address"  fullWidth value={coorPostData.addresscoor} onChange={(e) => setCoorPostData({ ...coorPostData, addresscoor: e.target.value})}/>
            <div><FileBase type="file" multiple={false} onDone={({ base64}) => setCoorPostData({ ...coorPostData, selectedFile: base64})}/></div>
            <Button className={classes.submit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
            {/*<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>*/}
        </form>
        <CoeModal/>
    </div>
  )
}

export default CoorForm
