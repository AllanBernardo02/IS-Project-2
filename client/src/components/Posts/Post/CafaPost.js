import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPostCafa, deleteCafaPost } from '../../../actions/cafaPosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles';


const CafaPost = ({ cafapost, setCurrentId }) => {
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
    <div><CardMedia className={classes.media} image={cafapost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={cafapost.title}/></div>
        <div className='haha'>{cafapost.schoolyrcafa}</div>
        <div>{cafapost.schoolidcafa}</div>
        <div>{cafapost.coursecafa}</div>
        <div>{cafapost.fullnamecafa}</div>
        <div>{cafapost.contactcafa}</div>
        <div>{cafapost.emailcafa}</div>
        <div>{cafapost.organisationcafa}</div>
        <div>{cafapost.addresscafa}</div>
        <div>
            {(user?.result?.googleId === cafapost?.creator || user?.result?._id === cafapost?.creator) && (
                <React.Fragment>
                <Button variant='contained' size="small" color="primary"  onClick={() => dispatch(countPostCafa(cafapost._id))}>
                Add Time
                </Button>
            
                </React.Fragment>
            )}
            <h2>Total Hrs : {cafapost.hours}</h2>
        </div>
        <div>
            {(user?.result?.googleId === cafapost?.creator || user?.result?._id === cafapost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(cafapost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === cafapost?.creator || user?.result?._id === cafapost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCafaPost(cafapost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>
    </div>
    </React.Fragment>
  )
}

export default CafaPost