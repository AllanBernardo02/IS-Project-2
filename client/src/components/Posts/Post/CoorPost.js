import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPost, deleteCoorPost } from '../../../actions/coorPosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
// import './CoorPost.css'
import useStyles from './styles'




const CoorPost = ({ coorpost, setCurrentId }) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles();



   

    

    if(!user?.result?.name) {
        return (
            <div></div>
        )
    }

  return (
      <React.Fragment>
    
    <div className='parent-div'>
    <div className='item'>
        <div className='image'>
            <CardMedia className={classes.media} image={coorpost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={coorpost.title}/>
        </div>
        <div>{coorpost.fullnamecoor}</div>
        <div>{coorpost.contactcoor}</div>
        <div>{coorpost.emailcoor}</div>
        <div>{coorpost.addresscoor}</div>
        

        

        <div>
            {(user?.result?.googleId === coorpost?.creator || user?.result?._id === coorpost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(coorpost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === coorpost?.creator || user?.result?._id === coorpost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCoorPost(coorpost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>

   









        
    </div>
    </div>
    </React.Fragment>
  )
}

export default CoorPost