import React from "react";
import "../css/Socials.css";
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


function Socials(){
    return(
        <div>
                <div className="socials"><a href="https://x.com" target="_blank"><BsTwitter size={30}/></a></div>
                <div className="socials"><a href="https://www.linkedin.com/in/richard-murray-596546184/" target="_blank"><BsLinkedin size={30}/></a></div>
                <div className="socials"><a href="https://github.com/richardisaninja2" target="_blank"><BsGithub size={30}/></a></div>
        </div>
    )
}
export default Socials;

