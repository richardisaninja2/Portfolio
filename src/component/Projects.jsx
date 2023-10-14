import React from "react";
import  "../css/Projects.css";

export default function Projects(props){
    return(
        <div className="">
            <a href={props.link} target="_blank">
                <div className="project">
                    <img className="projThumbnail" src={props.image}/>
                    <div>
                        <span>{props.shortDesc}<i class="arrow right"></i></span><br/>
                        <span>{props.description}</span>
                    
                    </div>
                    
                </div>
            </a>
        </div>

    )
}