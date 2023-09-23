import React from "react";
import "../css/History.css";
function History(props){
    return(
        <div>
            <div>
                <div className="firstLine"><span className="year">{props.year}</span><p className="title">{props.title}</p></div>
                <p>{props.desc}</p>
            </div>
            
        </div>
    )
}

export default History;