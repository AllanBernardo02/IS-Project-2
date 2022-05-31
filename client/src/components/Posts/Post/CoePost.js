import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { countPost, deleteCoePost } from '../../../actions/coePosts'
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import './CoePost.css'
import useStyles from './styles'




const CoePost = ({ coepost, setCurrentId }) => {
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
    {/*<Card>
        <CardMedia image={coepost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={coepost.title}/>
        <div>
            <Typography variant="h6">{coepost.name}</Typography>
            <Typography variant="body2">{moment(coepost.createdAt).fromNow()}</Typography>
        </div>
        
        <div>
            <Typography gutterBottom variant="h5" component="h2">{coepost.schoolyrcoe}</Typography>
        </div>
            <Typography gutterBottom variant="h5" component="h2">{coepost.schoolidcoe}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{coepost.coursecoe}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{coepost.fullnamecoe}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{coepost.contactcoe}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{coepost.emailcoe}</Typography>
            <Typography gutterBottom variant="h5" component="h2">{coepost.organisationcoe}</Typography>
            
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{coepost.addresscoe}</Typography>
            </CardContent>

            <div>
            {(user?.result?.googleId === coepost?.creator || user?.result?._id === coepost?.creator) && (
                <React.Fragment>
                <Button size="small" color="primary"  onClick={() => dispatch(countPost(coepost._id))}>
                Add Time   <h2>{coepost.hours}</h2>
                </Button>
               
                </React.Fragment>
            )}

            {(user?.result?.googleId === coepost?.creator || user?.result?._id === coepost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(coepost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}

            {(user?.result?.googleId === coepost?.creator || user?.result?._id === coepost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCoePost(coepost._id))}>
                  <DeleteIcon fontSize="small" /> Delete
                </Button>
            )}
            
            </div>

            </Card>*/}
    <div className='parent-div'>
    <div className='item'>
        <div className='image'>
            <CardMedia className={classes.media} image={coepost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={coepost.title}/>
        </div>
        <div className='haha'>{coepost.schoolyrcoe}</div>
        <div>{coepost.schoolidcoe}</div>
        <div>{coepost.coursecoe}</div>
        <div>{coepost.fullnamecoe}</div>
        <div>{coepost.contactcoe}</div>
        <div>{coepost.emailcoe}</div>
        <div>{coepost.organisationcoe}</div>
        <div>{coepost.addresscoe}</div>
        

        

        <div>
            {(user?.result?.googleId === coepost?.creator || user?.result?._id === coepost?.creator) && (
                <React.Fragment>
                <Button variant='contained' size="small" color="primary"  onClick={() => dispatch(countPost(coepost._id))}>
                Add Time
                </Button>
            
                </React.Fragment>
            )}
            
        </div>
        <div>
            <h1>Total Hrs : {coepost.hours}</h1>
        </div>
        <div>
            {(user?.result?.googleId === coepost?.creator || user?.result?._id === coepost?.creator) && (
                <div>
                    <Button color="primary" onClick={() => setCurrentId(coepost._id)}  size="small">
                        edit
                    </Button>
                </div>
            )}
        </div>
        <div>
            {(user?.result?.googleId === coepost?.creator || user?.result?._id === coepost?.creator) && (
                <Button size="small" color="secondary" onClick={() => dispatch(deleteCoePost(coepost._id))}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            )} 
        </div>

   









        
    </div>
    </div>
    </React.Fragment>
  )
}

export default CoePost