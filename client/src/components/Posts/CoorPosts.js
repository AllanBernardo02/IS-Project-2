import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CoorPost from './Post/CoorPost';

const CoorPosts = ({ setCurrentId }) => {
    const coorposts = useSelector((state) => state.coorposts)


    useEffect(() => {
        console.log({
            coorposts
        })
    }, [coorposts])
    
    return (
        !coorposts? <CircularProgress/> : (
            <Grid container>
                {coorposts.map((coorpost) => (
                    <Grid key={coorpost._id}>
                        <CoorPost coorpost={coorpost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default CoorPosts