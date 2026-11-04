import {useEffect, useState} from "react";
import "../styles/DanceComp.css";

const rand = (max) => (Math.random() * 2 - 1) * max;

export default function DanceComp({children, interval = 1000, move = 1, rotate = 0, className = ""})
{
    const [offset, setOffset] = useState({x : 0, y : 0, r : 0});
    

    useEffect(()=> {
        const id = setInterval(() => {

            setOffset({ x: rand(move), y: rand(move), r: rand(rotate) });
        }, interval)

        return () => clearInterval(id);
    } , [interval, move, rotate]);

    return (
        <span 
        className={`DanceComp ${className}`} 
        style={{ transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.r}deg)` }}
        >
        {children}
        </span>
    );

}