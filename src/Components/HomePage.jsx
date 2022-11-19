
import "./HomePage.css";
import { TypeWriter } from "./Typewriter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



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
                           
                            <h1><i className="fa-regular fa-circle-play"></i></h1>
                            <div style={{fontSize:"18px",fontWeight:"500"}}>Watch Intro to Expertia</div>
                            <p>or</p>
                            <button className="accessBtn">Access For Free</button>
                        </div>
                    </div>
                </div>
                <div class="box2"></div>
            </div>
        </>
    )
}