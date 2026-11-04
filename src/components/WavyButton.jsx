import {useEffect, useState} from "react";
import "../styles/WavyButton.css";

export default function WavyButton({children, href, onClick, className = ""})
{

    const [hovered, setHovered] = useState(false);
    const props = {
        className: `WavyButton ${className} ${hovered? "hovered" : ""}`,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false)
    };
    if (href){
        return(<a href={href} {...props}>{children}</a>)
    }

    return <button onClick={onClick} {...props}>{children}</button>;
}