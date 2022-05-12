import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { PieChart, BarChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector } from 'react-redux';


const Dashboard = () => {
    const posts = useSelector( (state) => state.posts)
    const coeposts = useSelector( (state) => state.coeposts)



  return (
    <React.Fragment>
        <div>
       
            <div>      
                    <h1>Coordinator Dashboard</h1>
            </div>  
        
            <div>
                <Link  component={Link} to="/student_module">  
                    <h2>Student Module</h2>
                </Link>
            </div>
            <div>
                <Link  component={Link} to=""> 
                    <h2>Coordinator Module</h2>
                </Link>
            </div>
            <div>
                <Link  component={Link} to="/cos">  
                    <h2>Organisation Module</h2>
                </Link>
            </div>

           
                            
        </div>

        <PieChart data={[["Number of Students in COS", posts.length], ["Number of Students in COE", coeposts.length], 
        ["Number of Students in CIT", 13], ["Number of Students in CIE", 8],
        ["Number of Students in CLA", 23], ["Number of Students in CAFA", 18]]} />

        <BarChart data={[["Number of Students in COS", posts.length], ["Number of Students in COE", 10], 
            ["Number of Students in CIT", 13], ["Number of Students in CIE", 8],
            ["Number of Students in CLA", 23], ["Number of Students in CAFA", 18]]} />

        </React.Fragment>
 
  )
}

export default Dashboard