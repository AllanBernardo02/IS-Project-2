import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPostCit, deleteCitPost } from '../../../actions/citPosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles';


const CitPost = ({ citpost, setCurrentId }) => {
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

    <div className='item'>
    <div><CardMedia className={classes.media} image={citpost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={citpost.title}/></div>
        <div className='haha'>{citpost.schoolyrcit}</div>
        <div>{citpost.schoolidcit}</div>
        <div>{citpost.coursecit}</div>
        <div>{citpost.fullnamecit}</div>
        <div>{citpost.contactcit}</div>
        <div>{citpost.emailcit}</div>
        <div>{citpost.organisationcit}</div>
        <div>{citpost.addresscit}</div>
        <div>
            {(user?.result?.googleId === citpost?.creator || user?.result?._id === citpost?.creator) && (
                <React.Fragment>
                <Button variant='contained' size="small" color="primary"  onClick={() => dispatch(countPostCit(citpost._id))}>
                Add Time
                </Button>
            
                </React.Fragment>
            )}
            <h2>Total Hrs : {citpost.hours}</h2>
        </div>
        <div>
            {(user?.result?.googleId === citpost?.creator || user?.result?._id === citpost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(citpost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === citpost?.creator || user?.result?._id === citpost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCitPost(citpost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>
    </div>
    </React.Fragment>
  )
}

export default CitPost