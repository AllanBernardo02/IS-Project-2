import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CoePost from './Post/CoePost';

const CoePosts = ({ setCurrentId }) => {
    const coeposts = useSelector((state) => state.coeposts)
    
    return (
        !coeposts.length ? <CircularProgress/> : (
            <Grid container>
                {coeposts.map((coepost) => (
                    <Grid key={coepost._id}>
                        <CoePost coepost={coepost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default CoePosts