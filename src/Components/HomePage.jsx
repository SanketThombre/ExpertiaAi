
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
                    <div className="automatedDiv">Automated Career Page</div>
                     <div className="professionals">100k+ Professionals</div>
                </div>
            </div>
        </>
    )
}