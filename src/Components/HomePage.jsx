
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
                    <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/piggy.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/akvina.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/zluri.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/koovs.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/pokkt_logo.svg" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/tuorem.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/limechat-logo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/byjus.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/ninjacart.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/unisoninternationsal.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/spicaworks.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/optiwise.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/byjuslogo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/fello.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/paytmlogo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="https://www.expertia.ai/logosSocial/ranstad%20blue%20logoWOno.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/NeuroPixel%20Logo.png" alt="" width="100%"height="100%"/>
                    </div>
                     <div style={{width:"120px",height:"50px" }}>
                        <img src="	https://www.expertia.ai/logosSocial/xcelero.png" alt="" width="100%"height="100%"/>
                    </div>
                </div>
            </div>
        </>
    )
}