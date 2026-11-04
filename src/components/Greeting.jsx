import { size } from "astro:schema";
import DanceComp from "./DanceComp";
import PopupComp from "./PopupComp";

export default function Greeting() {
     return (
     <h1>
        <div style={{display : "flex", justifyContent : "center", gap : "0.5em", alignItems : "center"}}>
            <span style={{fontSize : "6rem"}}>
                <PopupComp delay = {1000}>
                    <DanceComp move={2} rotate={6} interval={1000}>
                        Hi,
                    </DanceComp>
                </PopupComp>
            </span>
            <span style={{fontSize : "5rem"}}>
                <PopupComp delay = {1500}>
                    <DanceComp move={2} rotate={6} interval={1200}>
                        I'm 
                    </DanceComp>
                </PopupComp>
            </span>
        </div>
        
        <div style={{fontSize : "10rem"}}>
            <PopupComp delay = {2000}>
                <DanceComp move={3} rotate={3} interval={900}>
                    Vito Torres
                </DanceComp>
            </PopupComp>
        </div>
     </h1>
     );
   }