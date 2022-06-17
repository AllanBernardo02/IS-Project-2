import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPost, deleteCiePost } from '../../../actions/ciePosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import './CoePost.css'
import useStyles from './styles'




const CiePost = ({ ciepost, setCurrentId }) => {
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
            <CardMedia className={classes.media} image={ciepost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={ciepost.title}/>
        </div>
        <div className='haha'>{ciepost.schoolyrcie}</div>
        <div>{ciepost.schoolidcie}</div>
        <div>{ciepost.coursecie}</div>
        <div>{ciepost.fullnamecie}</div>
        <div>{ciepost.contactcie}</div>
        <div>{ciepost.emailcie}</div>
        <div>{ciepost.organisationcie}</div>
        <div>{ciepost.addresscie}</div>
        

        

        <div>
            {(user?.result?.googleId === ciepost?.creator || user?.result?._id === ciepost?.creator) && (
                <React.Fragment>
                <Button variant='contained' size="small" color="primary"  onClick={() => dispatch(countPost(ciepost._id))}>
                Add Time
                </Button>
            
                </React.Fragment>
            )}
            
        </div>
        <div>
            <h1>Total Hrs : {ciepost.hours}</h1>
        </div>
        <div>
            {(user?.result?.googleId === ciepost?.creator || user?.result?._id === ciepost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(ciepost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === ciepost?.creator || user?.result?._id === ciepost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCiePost(ciepost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>

   









        
    </div>
    </div>
    </React.Fragment>
  )
}

export default CiePost