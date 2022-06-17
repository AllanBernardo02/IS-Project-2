import React, {useState, useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { PieChart, BarChart, AreaChart, ScatterChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector, useDispatch } from 'react-redux';
import Sana from './Sana';
import Posts from './Posts/Posts';
import Coechart from './Coechart';
import Orgchart from './Orgchart';

import * as api from '../api/index'
import './Dashboard.css'

import { getPostsCoe } from '../actions/coePosts';
import { getPostsCoor } from '../actions/coorPosts';
import { getPostsCos } from '../actions/cosPosts';
import { getPostsCit } from '../actions/citPosts';
import { getPosts } from '../actions/posts';

// ito po sir
const Dashboard = () => {
    const posts = useSelector( (state) => state.posts)
    const coeposts = useSelector( (state) => state.coeposts)
    // const coeposts = useSelector( (state) => state.coeposts)
    // const coeposts = useSelector( (state) => state.coeposts)
    // const coeposts = useSelector( (state) => state.coeposts)
    const [localState, setLocalState] = useState({})
    const user = JSON.parse(localStorage.getItem('profile'));
    const [overallPosts, setOverallPosts] = useState([])
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)
    const history = useNavigate()

    useEffect(() => {
        if(!user) {
        history('/dashboard')
        }
    }, [user])

    useEffect(() => {

        Promise.all([
            api.fetchCitPosts(),
            api.fetchCoePosts(),
            api.fetchCoorPosts(),
            api.fetchCosPosts(),
            api.fetchPosts(),
            api.fetchCiePosts()
        ]).then(data => {

            const [cit, coe, coor, cos, cie, posts] = data || {}

            const citCount = cit?.data?.length ?? 0
            const coeCount = coe?.data?.length ?? 0
            const coorCount = coor?.data?.length ?? 0
            const postsCount = posts?.data?.length ?? 0
            const cosCount = cos?.data?.length ?? 0
            const cieCount= cie?.data?.length ?? 0

            const localState = {
                coe: coe?.data,
               posts: posts?.data,
               cit: cit?.data,
               coor: coor?.data, 
              cos: cos?.data,
              cie: cie?.data,
               citCount,
               coeCount,
               coorCount,
               postsCount,
               cosCount,
               cieCount
            }
    
            setLocalState(localState)
            console.log(localState)
    
          
            console.log({
                // coe, posts, cit, coor, cos
                coe:coe?.data,
                cit:cit?.data
            })
            
        })

        
    

        // dispatch(getPosts());   
    }, [currentId, dispatch]);

    // useEffect(() => {
    //     dispatch(getPostsCoe())
    //   }, [currentId, dispatch])

    // useEffect(() => {
        // gsto ko lang mkita yung structure ng data mo pwede mo send sa discord yung value sa console
        //cge po sir ok once running na patingin ng result... saan po makikita sir? sa console po ba sa inspect element?
        // f12 sa chrome, then console tab
        
        // so sa object n nto cocombine lang ntn yung posts array, so try mo ulit check ung console.. ok po sir
        // if you make this object an array, if my new post category ka add mo lang dto
    //     const allPosts = [
            
    //         {
    //             category: 'COE',
    //             data: coe ?? [],
    //             count: coe?.length ?? 0
    //         },
    //         {
    //             category: 'POST',
    //             data: posts ?? [],
    //             count: posts?.length ?? 0
    //         }
    //     ]

    //     setOverallPosts(allPosts)

    //     console.log({
    //         allPosts 
    //     })
    // }, [posts, coeposts])

    if(!user?.result?.name) {
        return (
          <Sana/>
        );
      }

  return (
    <React.Fragment>
    <div className='divide'>
        <div className='sidebar'>
       
            <div className='name1'>      
                    <h1>Coordinator Dashboard</h1>
            </div>  

            {/*<div>      
                then sa react mo no need mo n i update you component kasi mag loop lang
                     <h1>POSTS Count</h1>
                    <ul>
                        {
                            overallPosts.map(({ count, category }) => <li key={category} setCurrentId={setCurrentId}>{category}: {count}</li>)
                        }
                       
                    </ul> 

                
                    </div>*/}
        
            <div className='module'>
                <Link  component={Link} to="/student_module">  
                    <h2>Student Module</h2>
                </Link>
            </div>
            <div className='module'>
                <Link  component={Link} to="/coor"> 
                    <h2>Coordinator Module</h2>
                </Link>
            </div>
            <div className='module'>
                <Link  component={Link} to="/posts">  
                    <h2>Organisation Module</h2>
                </Link>
            </div>

           
                            
        </div>

        <div>
        <div className='head'>
            <h1>Record Monitoring</h1>
        </div>
        <div className='div1'>
            <h1 className='bg'>COORDINATOR: {localState.coorCount}</h1>
            <h1 className='bg'>Organisation: {localState.postsCount}</h1>
        </div>
        <div className='div2'>
            <h1 className='bg'>CIT: {localState.citCount}</h1>
            <h1 className='bg'>COE: {localState.coeCount}</h1>
            <h1 className='bg'>COS: {localState.cosCount}</h1>
        </div>
        <div className='div3'>
            <h1 className='bg'>CIE: {localState.cieCount}</h1>            
            <h1 className='bg'>CAFA: {10}</h1>
            <h1 className='bg'>CLA: {10}</h1>
        </div>
        <div className='lupet'>
        <div className='chart'>
            <PieChart data={[["Number of Organization", localState.postsCount],["Number of Coordinator", localState.coorCount],["Number of Students in COS", localState.cosCount], ["Number of Students in COE", localState.coeCount], 
            ["Number of Students in CIT", localState.citCount], ["Number of Students in CIE", localState.cieCount],
            ["Number of Students in CLA", 23], ["Number of Students in CAFA", 18]]} />
        </div>
        <div className='chart'>
            <BarChart data={[["Number of Students in COS", posts.length], ["Number of Students in COE", coeposts.length], 
                ["Number of Students in CIT", 13], ["Number of Students in CIE", 8],
                ["Number of Students in CLA", 23], ["Number of Students in CAFA", 18]]} /> 
        </div>
        <AreaChart data={{"COS": localState.cosCount, "COE": localState.coeCount, "CIT": localState.citCount}} />
        <ScatterChart data={[[174.0, 80.0], [176.5, 82.3]]} xtitle="Size" ytitle="Population" />
        </div>
        </div>
    </div>
        </React.Fragment>
 
  )
}

export default Dashboard