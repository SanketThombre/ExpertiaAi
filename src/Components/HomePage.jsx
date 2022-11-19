
import "./HomePage.css";
import { TypeWriter } from "./Typewriter";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Icon} from "semantic-ui-react";


export const HomePage = () => {
    return (
        <>
            <div id="Main">
                <div className="box1">
                    <div className="typewriterBox">
                        <h1 style={{fontSize:" 4rem",fontWeight:"500",margin:"0"}}>Your AI Powered</h1>
                        <h1 style={{fontSize:" 4rem",fontWeight:"600",margin:"0",color:"#6c5ce7"}}>
                            <TypeWriter/>
                        </h1>
                        <h2>Invite. Identify. Interview.</h2>
                        <h2>Qualified Professionals from <br />over 25+ job platforms!</h2>
                        
                        <div className="VideoDiv">
                            <Icon style={{fontSize:"20px"}} name="play circle outline"/>
                           
                            <div style={{fontSize:"18px",fontWeight:"500"}}>Watch Intro to Expertia</div>
                            <p style={{fontSize:"18px",marginTop:"15px"}}>or</p>
                            <button className="accessBtn">Access For Free  <Icon style={{fontSize:"20px"}} name='angle double right' size='small' /></button>
                        </div>
                    </div>
                </div>
                <div class="box2">

                    <div className="careerPathDiv">
                        <img src="https://www.expertia.ai/Group%20794.png" alt="" width="100%" height="100%"/>
                    </div>

                    <div className="premiumBoardDiv"> <Icon name="check"/> 50+ Premium Job Boards</div>
                    <div className="screeningDiv"><Icon name="check"/> AI Screening</div>
                    <div className="automatedDiv"><Icon name="check"/> Automated Career Page</div>
                    <div className="professionals"><Icon name="check" /> 100k+ Professionals</div>
                    
                    <div className="speedo">
                        <img src="https://www.expertia.ai/speedo.png" alt="speedo img" width="100%" height="70%"/>
                        <h4 style={{margin:"0"}}>Expertia Score</h4>
                    </div>
                </div>
            </div>

            <div className="companies">
                <h1 style={{ fontSize: " 2.2rem", fontWeight: "700" }}>Helping Businesses Grow</h1>
                <div className="elements">
                    <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/piggy.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/akvina.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/zluri.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/koovs.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/pokkt_logo.svg" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/tuorem.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/limechat-logo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/byjus.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/ninjacart.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/unisoninternationsal.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/spicaworks.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/optiwise.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/byjuslogo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/fello.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/paytmlogo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="https://www.expertia.ai/logosSocial/ranstad%20blue%20logoWOno.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/NeuroPixel%20Logo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"40px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/xcelero.png" alt="" width="100%"height="100%"/>
                    </div>
                </div>
            </div>

            <div className="jobCareer">
                <div className="gifDiv">
                    <img src="https://cdn.dribbble.com/users/1998175/screenshots/6239769/dribbble.gif" alt="" width="100%" height="100%"/>
                </div>
                <div className="jobInfo">
                    <h2 className="title">AI CAREER PAGE</h2>
                    <h1 className="heading">Power your Career Page with <br/>Expertia’s AI Intelligence.</h1>
                    <p className="description">In one-click create and post your jobs on your <br/>career page and over 25+ Job boards and <br/>automate your entire application process building <br/>an intuitive cloud based talent pool.</p>
                </div>
            </div>
             <div className="jobCareer">
               
                <div className="jobInfo">
                    <h2 className="title">AI TALENT ADVISOR</h2>
                    <h1 className="heading">Screen and Identify your<br/>Professionals</h1>
                    <p className="description">In one-click create and post your jobs on your <br/>career page and over 25+ Job boards and <br/>automate your entire application process building <br/>an intuitive cloud based talent pool.</p>
                </div>
                 <div className="gifDiv">
                    <img src="https://arthurgrand.com/wp-content/uploads/2022/03/submit-resume.gif" alt="" width="100%" height="100%"/>
                </div>
            </div>

             <div className="jobCareer">
                <div className="gifDiv">
                    <img src="http://delphiniumsw.com/wp-content/uploads/2021/07/webdesigngif.gif" alt="" width="100%" height="100%"/>
                </div>
                <div className="jobInfo">
                    <h2 className="title">AI SKILL CLOUD</h2>
                    <h1 className="heading">Unified Hyperprofiles, Search and<br/> Manage your Talent</h1>
                    <p className="description">In one-click create and post your jobs on your <br/>career page and over 25+ Job boards and <br/>automate your entire application process building <br/>an intuitive cloud based talent pool.</p>
                </div>
            </div>

            <div className="onDemand">

                <div className="Box1">
                    <button className="newBtn">NEW</button>
                    <h1>On-Demand <br/><span style={{color:"#6c5ce7"}}>Technical</span> Of Interview</h1>
                    <p style={{fontSize:"16px",fontWeight:"500"}}>Get the best, hire faster</p>
                    <button style={{
                        height: "40px",
                        width: "100px",
                        fontSize: "15px",
                        fontWeight: "700",
                         backgroundColor:"#6c5ce7",
                        color: "white",
                        border: "none",
                            borderRadius: "5px",
                    }}>Get Started</button>
                </div>
                <div className="Box2">
                    <div className="blackBox"></div>
                    <div className="save">
                        <Icon name="chevron left" />
                        <Icon name="chevron right" />
                        Save 1000s Of Hours By <br/>Using Expertia AI
                    </div>
                    <div className="action">
                         <Icon name="thumbs up outline" />
                        <Icon name="thumbs down outline" />
                       Actionable Decisions<br/> available immediately!
                    </div>
                </div>
                
            </div>/

            <h1 style={{fontSize:"40px"}}>What's More</h1>
            <div className="WhatMoreContainer">

                <div>
                    <img src="https://www.expertia.ai/GIfs/icons8-document.gif" alt="" width="20%" height="23%" />
                    <p style={{fontSize:"20px",marginTop:"15px"}}>Use our Auto Job <br/>Description tool to <br/>create a custom job<br/> description for your <br/>company</p>
                </div>
                <div>
                     <img src="	https://www.expertia.ai/GIfs/icons8-done.gif" alt="" width="20%" height="23%" />
                    <p style={{fontSize:"20px",marginTop:"15px"}}>Use our Auto Job <br/>Description tool to <br/>create a custom job<br/> description for your <br/>company</p>
                
                </div>
                <div>
                     <img src="https://www.expertia.ai/GIfs/icons8-mind-map.gif" alt="" width="20%" height="23%" />
                    <p style={{fontSize:"20px",marginTop:"15px"}}>Use our Auto Job <br/>Description tool to <br/>create a custom job<br/> description for your <br/>company</p>
                
                </div>
                <div>
                     <img src="	https://www.expertia.ai/GIfs/icons8-search%20(1).gif" alt="" width="20%" height="23%" />
                    <p style={{fontSize:"20px",marginTop:"15px"}}>Use our Auto Job <br/>Description tool to <br/>create a custom job<br/> description for your <br/>company</p>
                
                </div>
                <div>
                     <img src="	https://www.expertia.ai/GIfs/icons8-omnichannel.gif" alt="" width="20%" height="23%" />
                    <p style={{fontSize:"20px",marginTop:"15px"}}>Use our Auto Job <br/>Description tool to <br/>create a custom job<br/> description for your <br/>company</p>
                
                </div>
                <div>
                     <img src="	https://www.expertia.ai/GIfs/icons8-share.gif" alt="" width="20%" height="23%" />
                    <p style={{fontSize:"20px",marginTop:"15px"}}>Use our Auto Job <br/>Description tool to <br/>create a custom job<br/> description for your <br/>company</p>
                
                </div>
                
            </div>


            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}