import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPostCos, deleteCosPost } from '../../../actions/cosPosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import './CoePost.css'
import useStyles from './styles'




const CosPost = ({ cospost, setCurrentId }) => {
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
            <CardMedia className={classes.media} image={cospost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={cospost.title}/>
        </div>
        <div className='haha'>{cospost.schoolyrcos}</div>
        <div>{cospost.schoolidcos}</div>
        <div>{cospost.coursecos}</div>
        <div>{cospost.fullnamecos}</div>
        <div>{cospost.contactcos}</div>
        <div>{cospost.emailcos}</div>
        <div>{cospost.organisationcos}</div>
        <div>{cospost.addresscos}</div>
        

        

        <div>
            {(user?.result?.googleId === cospost?.creator || user?.result?._id === cospost?.creator) && (
                <React.Fragment>
                <Button variant='contained' size="small" color="primary"  onClick={() => dispatch(countPostCos(cospost._id))}>
                Add Time
                </Button>
            
                </React.Fragment>
            )}
            
        </div>
        <div>
            <h1>Total Hrs : {cospost.hours}</h1>
        </div>
        <div>
            {(user?.result?.googleId === cospost?.creator || user?.result?._id === cospost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(cospost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === cospost?.creator || user?.result?._id === cospost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCosPost(cospost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>

   









        
    </div>
    </div>
    </React.Fragment>
  )
}

export default CosPost