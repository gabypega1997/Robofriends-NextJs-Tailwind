import Link from "next/dist/client/link";
import 'tailwindcss/tailwind.css';
import RoboCard from "../components/RoboCard";

import {useState, useEffect} from "react";



const Robots = (props) => {
    const [robotSearch ,setRobotSearch] = useState(props.robots);
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        setRobotSearch (props.robots.filter((robot)=>(
            robot.name.toLowerCase().includes(inputValue.toLowerCase())
                )
        ))
    },[inputValue])

    const changeInput = (event) => {
        const input = event.target.value;
        setInputValue(input);
    }
    

    return (
        <>
            <div className="bg-gradient-to-r from-cyan-700 to-blue-900 h-screen text-center" >
                <h1 className="text-5xl text-sky-400 font-bold p-10">RobotFriends</h1>
                <input className="bg-blue-200 hover:bg-blue-300  py-2 px-4 rounded  mx-auto shadow-sm " placeholder="search robots" id="robotSearch" name="robotSearch" onChange={changeInput} />
                <div className="flex flex-wrap h-1/2 border overflow-auto m-5 border-black">
                    {
                        robotSearch.map(robot => (
                                <RoboCard name={robot.name} email={robot.email} key={robot.id} id={robot.id}> </RoboCard>
                        ))
                    }
                </div>
                
            </div>
        </>
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

export default Robots;