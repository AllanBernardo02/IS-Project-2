import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ClaPost from './Post/ClaPost';

const ClaPosts = ({ setCurrentId }) => {
    const claposts = useSelector((state) => state.claposts)

    // ok check ntn kng ilan to
    useEffect(() => {
        console.log({
            claposts
        })
    }, [claposts])
    
    return (
        !claposts.length ? <CircularProgress/> : (
            <Grid container>
                {claposts.map((clapost) => (
                    <Grid key={clapost._id}>
                        <ClaPost clapost={clapost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default ClaPosts