import {useState,useEffect} from "react";
import 'tailwindcss/tailwind.css';

const RoboCard = (props) => {

    return(
        <>
            <div className="p-5 ">
                <a href={`/${props.id - 1}`} className="inline-block max-w-sm p-6 duration-500 border-2 border-solid rounded-lg shadow-md bg-cyan-200 hover:scale-105 shrink">
                    <img src={`https://robohash.org/${props.name}.png`} width="200" height={200} ></img>
                    <h1 className="text-2xl font-bold">{props.name}</h1>
                    <h5>{props.email}</h5>
                </a>
            </div>
        </>
    )
}

export default RoboCard;