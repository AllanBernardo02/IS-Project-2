import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CoePost from './Post/CoePost';

const CoePosts = ({ setCurrentId }) => {
    const coeposts = useSelector((state) => state.coeposts)

    // ok check ntn kng ilan to
    useEffect(() => {
        console.log({
            coeposts
        })
    }, [coeposts])
    
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