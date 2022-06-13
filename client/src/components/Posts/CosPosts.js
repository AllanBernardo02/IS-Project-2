import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CosPost from './Post/CosPost';

const CosPosts = ({ setCurrentId }) => {
    const cosposts = useSelector((state) => state.cosposts)

    // ok check ntn kng ilan to
    useEffect(() => {
        console.log({
            cosposts
        })
    }, [cosposts])
    
    return (
        !cosposts.length ? <CircularProgress/> : (
            <Grid container>
                {cosposts.map((cospost) => (
                    <Grid key={cospost._id}>
                        <CosPost cospost={cospost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default CosPosts