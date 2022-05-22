import { useRouter } from 'next/router'
import {useState} from "react";
import RoboPage from '../components/RoboPage';


const Robot = (props) => {
    const router = useRouter()
    const { id } = router.query
    
    return(
        <div className='bg-sky-100 h-max'>  
            <RoboPage robot={props.robots[id]} key={id}/>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props:{
            robots: data
        }
        
    }
}

export async function getStaticPaths() {
    return {
        paths:[
            "/0",
            '/1',
            '/2',
            '/3',
            '/4',
            '/5',
            '/6',
            '/7',
            '/8',
            '/9',
            '/10'
        ], 
        fallback:true
    }
}

export default Robot;