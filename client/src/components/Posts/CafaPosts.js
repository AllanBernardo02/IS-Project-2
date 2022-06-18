import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CafaPost from './Post/CafaPost';

const CafaPosts = ({ setCurrentId }) => {
    const cafaposts = useSelector((state) => state.cafaposts)

    // ok check ntn kng ilan to
    useEffect(() => {
        console.log({
            cafaposts
        })
    }, [cafaposts])
    
    return (
        !cafaposts.length ? <CircularProgress/> : (
            <Grid container>
                {cafaposts.map((cafapost) => (
                    <Grid key={cafapost._id}>
                        <CafaPost cafapost={cafapost} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default CafaPosts