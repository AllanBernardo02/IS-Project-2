import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPostCla, deleteClaPost } from '../../../actions/claPosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles';


const ClaPost = ({ clapost, setCurrentId }) => {
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
    <div><CardMedia className={classes.media} image={clapost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={clapost.title}/></div>
        <div className='haha'>{clapost.schoolyrcla}</div>
        <div>{clapost.schoolidcla}</div>
        <div>{clapost.coursecla}</div>
        <div>{clapost.fullnamecla}</div>
        <div>{clapost.contactcla}</div>
        <div>{clapost.emailcla}</div>
        <div>{clapost.organisationcla}</div>
        <div>{clapost.addresscla}</div>
        <div>
            {(user?.result?.googleId === clapost?.creator || user?.result?._id === clapost?.creator) && (
                <React.Fragment>
                <Button variant='contained' size="small" color="primary"  onClick={() => dispatch(countPostCla(clapost._id))}>
                Add Time
                </Button>
            
                </React.Fragment>
            )}
            <h2>Total Hrs : {clapost.hours}</h2>
        </div>
        <div>
            {(user?.result?.googleId === clapost?.creator || user?.result?._id === clapost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(clapost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === clapost?.creator || user?.result?._id === clapost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteClaPost(clapost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>
    </div>
    </React.Fragment>
  )
}

export default ClaPost