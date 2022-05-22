import react from "react";
import 'tailwindcss/tailwind.css';

const RoboCard = (props) => {
    return(
        <>
            <div>
                <a href="#" className="block p-6 max-w-sm bg-cyen-300 rounded-lg border border-cyen-500 shadow-md ">
                    <img src={`https://robohash.org/${props.name}.png`} width="200" height={200} ></img>
                    <h1 className="font-bold  text-2xl">{props.name}</h1>
                    <h5>{props.email}</h5>
                </a>
            </div>
        </>
    )
}

export default RoboCard;