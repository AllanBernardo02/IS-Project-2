import React from 'react';
import {Button} from '@material-ui/core';

import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <div>
                <h1>OJT RECORD MONITORING SYSTEM</h1>
            </div>
           <div>
                <Button component={Link} to="/auth" variant="contained" color="primary">Log In as Coordinator</Button>
           </div>
            <div>
                <Button component={Link} to="/" variant="contained" color="primary">Log In as Student</Button>
            </div>
        </div>
    )
}


export default App;