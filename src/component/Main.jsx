import React, { useEffect, useState } from "react";
import "../css/Main.css";
import myFile from "../resources/RichardResumeC.pdf"
// import "../css/Main1.css"
import Socials from "./Socials";
import History from "./History";
import Projects from "./Projects";
import weatherApp from "../resources/weatherApp.PNG"
import expenseTracker from "../resources/expenseTracker.PNG"
function Main(){
    

    
    const [margin, setMargin] = useState({margin: "0 50px"});
    const [expMar, setExpMar] = useState({margin: "0 50px"})
    const [projExpMar, setProjExpMar] = useState({margin: "0 50px"})
    
    
    useEffect(()=> {
        //functionality to be worked on
        // const aboutPos = document.getElementsByClassName('about').scrollTop;
        // const expPos = document.getElementsByClassName('exp').scrollTop;
        // const projPos = document.getElementsByClassName('proj').scrollTop - 100;

        // if(aboutPos){
        //   console.log(aboutPos);  
        // }

        
            //figure a way to get these to spit out a number or change them to stagnant numbers
        function listenScrollEvent() {
            if(window.scrollY >= 2 && window.scrollY <= 400){
                setMargin({margin: "0 10px", transition: "margin .1s"});
                setExpMar({margin: "0 50px", transition: "margin .1s"});
                setProjExpMar({margin: "0 50px", transition: "margin .1s"});
                
    
            }
            if(window.scrollY >= 400 && window.scrollY <=  800){
                setMargin({margin: "0 50px", transition: "margin .1s"})
                setExpMar({margin: "0 10px", transition: "margin .1s"});
                setProjExpMar({margin: "0 50px", transition: "margin .1s"});
                
            }
            // if(window.scrollY >=  projPos){
            //     //do somethign here
            // }
        }


            window.addEventListener('scroll', function() {
                listenScrollEvent();

            });


    })

    return(
        
        <div className="body">
            <div className="nameSection"> 
            <div className="leftInnerGrid"></div>
            
            <div className="rightInnerGrid"></div>
                <div className="midInnerGrid">
                <h2>Richard Murray</h2>
                <h3>Full Stack Developer</h3>
                <p>I build accessible, inclusive products and digital experiences for the web.</p>

                <div className="leftMidSection">
                    <p> <span className="about" style={margin}>About &nbsp; &nbsp; &nbsp;</span></p>
                    <p><span className="exp" style={expMar} >Experience</span></p>
                    <p><span className="proj" >Projects &nbsp; &nbsp;</span></p>
                </div>

                <div className="leftBottomSection">
                  <Socials/>  
                </div>
                
                
            </div>
            </div>
            
            <div className="information">
                <div className="infoInner">
                    <div className="scrollingLeft"> 
                        <p>As a motivated software developer with 2+ years of experience in Java and Full Stack Development, I have a strong track record of developing REST APIs, writing unit and functional tests. I have a passion for problem-solving and working collaboratively to identify and resolve complex issues. I have experience working with SQL and NoSQL databases. In my previous role at GenSpark , I participated in multiple projects and implemented new technologies and processes that increased efficiency and improved decision-making processes. I am seeking a challenging role in a dynamic and innovative environment that allows for continued growth and development</p>

                        <History year="June 2022 - Feb 2023"
                        title="Associate Engineer, Tech Mahindra"
                        desc="As an Associate Engineer at Tech Mahindra, I streamlined operations by implementing SSH scripts for server automation, ensured seamless server migrations, diagnosed and resolved Linux machine issues, conducted code scans to maintain Java code integrity, and collaborated effectively with cross-functional teams for project success."
                        />

                        <History year="December 2021 - Feb 2023"
                        title="Full Stack Developer, GenSpark"
                        desc="In my role as a Java Full Stack Developer, I combined Java experience with full-stack capabilities to deliver robust and efficient software solutions, fostered effective collaboration, and maintained a commitment to quality through testing and version control practices."
                        />

                        <span ><h3><a className="spanAfter" href={myFile} target="_blank">View Full Resume</a></h3></span> 

                        <div className="projectCont">
                            <Projects name="Weateher App" shortDesc="Built a weather app  " description="This web app, developed as a project showing my utalization of data retrieved from api's, is built with React. js. It enables users to search for weather conditions worldwide and delivers current weather information. The app retrieves weather data using the Weatherapi.com API." image={weatherApp} link="https://richardisaninja2.github.io/weatherr/"/>

                            <Projects name="Weateher App" shortDesc="Expense Tracker " description="This web app, is built with React. js and has UI designed for mobile. It enables users to input subscription info and track due dates and how much monthly it is estimated their total in subcriptions will come out to. The app utilizes localStorage to store data." image={expenseTracker} link="https://richardisaninja2.github.io/weatherr/"/>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )



    
}

export default Main;