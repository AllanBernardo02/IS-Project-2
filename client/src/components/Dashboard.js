import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { PieChart, BarChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector, useDispatch } from 'react-redux';
import Sana from './Sana';
import Posts from './Posts/Posts';
import Coechart from './Coechart';
import Orgchart from './Orgchart';
import { getPostsCoe } from '../actions/coePosts';
import { getPosts } from '../actions/posts';


// ito po sir
const Dashboard = () => {
    const posts = useSelector( (state) => state.posts)
    const coeposts = useSelector( (state) => state.coeposts)
    const user = JSON.parse(localStorage.getItem('profile'));
    const [overallPosts, setOverallPosts] = useState([])
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);

    useEffect(() => {
        dispatch(getPostsCoe())
      }, [currentId, dispatch])

     

    useEffect(() => {
        // gsto ko lang mkita yung structure ng data mo pwede mo send sa discord yung value sa console
        //cge po sir ok once running na patingin ng result... saan po makikita sir? sa console po ba sa inspect element?
        // f12 sa chrome, then console tab
        
        // so sa object n nto cocombine lang ntn yung posts array, so try mo ulit check ung console.. ok po sir
        // if you make this object an array, if my new post category ka add mo lang dto
        const allPosts = [
            
            {
                category: 'COE',
                data: coeposts ?? [],
                count: coeposts?.length ?? 0
            },
            {
                category: 'POST',
                data: posts ?? [],
                count: posts?.length ?? 0
            }
        ]

        setOverallPosts(allPosts)

        console.log({
            allPosts 
        })
    }, [posts, coeposts])

    if(!user?.result?.name) {
        return (
          <Sana/>
        );
      }

  return (
    <React.Fragment>
        <div>
       
            <div>      
                    <h1>Coordinator Dashboard</h1>
            </div>  

            <div>      
                {/* then sa react mo no need mo n i update you component kasi mag loop lang */}
                    <h1>POSTS Count</h1>
                    <ul>
                        {
                            overallPosts.map(({ count, category }) => <li key={category} setCurrentId={setCurrentId}>{category}: {count}</li>)
                        }
                       
                    </ul>

                
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
        <Coechart/>
        <Orgchart/>
        <PieChart data={[["Number of Students in COS", posts.length], ["Number of Students in COE", coeposts.length], 
        ["Number of Students in CIT", 13], ["Number of Students in CIE", 8],
        ["Number of Students in CLA", 23], ["Number of Students in CAFA", 18]]} />

        <BarChart data={[["Number of Students in COS", posts.length], ["Number of Students in COE", coeposts.length], 
            ["Number of Students in CIT", 13], ["Number of Students in CIE", 8],
            ["Number of Students in CLA", 23], ["Number of Students in CAFA", 18]]} />

        </React.Fragment>
 
  )
}

export default Dashboard