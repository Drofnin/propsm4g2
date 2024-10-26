import "./card.css"
import { CSSProperties } from "react";

type Props = {
    name: string;
    date: string;
    style: CSSProperties; 
}
const Card = ({name, date, style}:Props) => {
    return(

        <div className="birthday-card" style={style}>
            <div>{date}</div>
            <div className = "greeting">Til hamingju með daginn, {name} </div>
            <img src="kaka.jpg" alt="cake" className="cake-image"></img>

    
        </div>
    )
}

export default Card;