import {useEffect, useState} from "react";
import "../styles/PopupComp.css";

export default function PopupComp({children, delay = 0, className = ""})
{
    const [visible, setVisible] = useState(false);

    useEffect(()=> {
        const id = setTimeout(() => setVisible(true), delay);

        return () => clearTimeout(id);
    }, [delay]);

    return (
        <span className={`PopupComp ${className} ${visible ? "visible" : ""}`}>
        {children}
        </span>
    );

}