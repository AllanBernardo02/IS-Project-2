import React from 'react';
import {Button} from '@material-ui/core';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Student_module = () => {

    const posts = useSelector( (state) => state.posts)
    const coeposts = useSelector( (state) => state.coeposts)
    const history = useNavigate()

    const back = () => {
        history('/dashboard')
    }

    return (
        <div>
            <Link  component={Link} to="/cos">
            <Button>College of Science</Button>
            </Link>

            <Link  component={Link} to="/coe">
            <Button>College of Engineering</Button>
            </Link>

            <Link  component={Link} to="/cit">
            <Button>College of Industrial Technology</Button>
            </Link>

            <Link  component={Link} to="/cie">
            <Button>College of Industrial Education</Button>
            </Link>

            <Link  component={Link} to="/cos">
            <Button>College of Architecture and Fine Arts</Button>
            </Link>

            <Link  component={Link} to="/cos">
            <Button>College of Liberal Arts</Button>
            </Link>
        <div>{posts.length}</div>
        <div>{coeposts.length}</div>
        <Button onClick={back}>Back to Dash</Button>
        </div>
    )
}


export default Student_module;