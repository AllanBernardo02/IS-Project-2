import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CiePost from './Post/CiePost';

const CiePosts = ({ setCurrentId }) => {
    const cieposts = useSelector((state) => state.cieposts)

    // ok check ntn kng ilan to
    useEffect(() => {
        console.log({
            cieposts
        })
    }, [cieposts])
    
    return (
        !cieposts.length ? <CircularProgress/> : (
            <Grid container>
                {cieposts.map((ciepost) => (
                    <Grid key={ciepost._id}>
                        <CiePost ciepost={ciepost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default CiePosts