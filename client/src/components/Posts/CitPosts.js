import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CitPost from './Post/CitPost';

const CitPosts = ({ setCurrentId }) => {
    const citposts = useSelector((state) => state.citposts)

    // ok check ntn kng ilan to
    useEffect(() => {
        console.log({
            citposts
        })
    }, [citposts])
    
    return (
        !citposts.length ? <CircularProgress/> : (
            <Grid container>
                {citposts.map((citpost) => (
                    <Grid key={citpost._id}>
                        <CitPost citpost={citpost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default CitPosts