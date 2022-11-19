
import "./HomePage.css";
import { TypeWriter } from "./Typewriter";


export const HomePage = () => {
    return (
        <>
            <div id="Main">
                <div className="box1">
                    <div>
                        <h1>Your AI Powered</h1>
                        <h1>
                            <TypeWriter/>
                        </h1>
                        <h1>Invite. Identify. Interview.</h1>
                        <h1>Qualified Professionals from <br/>over 25+ job platforms!</h1>
                    </div>
                </div>
                <div class="box2"></div>
            </div>
        </>
    )
}