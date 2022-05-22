import Link from "next/dist/client/link";
import 'tailwindcss/tailwind.css';
import RoboCard from "../component/RoboCard";


const Robots = (props) => {
    return (
        <>
            <div className="bg-gradient-to-r from-cyan-700 to-blue-900 h-screen text-center" >
                <h1 className="text-5xl text-sky-400 font-bold p-10">RobotFriends</h1>
                <input className="bg-blue-200 hover:bg-blue-300  py-2 px-4 rounded  mx-auto" placeholder="search robots"/>
                <div className="flex flex-wrap">
                    {
                        props.robots.map(robot => (
                                <RoboCard name={robot.name} email={robot.email} key={robot.id}></RoboCard>
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