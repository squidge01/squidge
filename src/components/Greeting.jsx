import DanceComp from "./DanceComp";
import PopupComp from "./PopupComp";

export default function Greeting() {
     return (
     <h1>
        <PopupComp delay = {1000}>
            <DanceComp move={10} rotate={15}>
                Hi, I'm Vito Torres
            </DanceComp>
            
        </PopupComp>
     </h1>
     );
   }