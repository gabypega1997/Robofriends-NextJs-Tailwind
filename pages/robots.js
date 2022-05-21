import Link from "next/dist/client/link";
import 'tailwindcss/tailwind.css';
const Robots = (props) => {
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline">Robots</h1>
                <Link href="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button>
                </Link>
                <div>
                    {
                        props.robots.map(robot => (
                            <li key={robot.id}>
                                <Link href={`/robots/${robot.id}`}>
                                {robot.name}
                                </Link>
                            </li>
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