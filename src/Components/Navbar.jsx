
import "./Navbar.css";
import styled from "styled-components";
import {Link} from "react-router-dom";


const FundingDiv = styled.div`
width:100%;
height : 50px;
border: 1px solid;
background-color:#230bda;
color: white;
display:flex;
align-items:center;
justify-content: center;
gap:20px;
position:sticky;
top:0;
z-index:2;

`
const ReadOnBtn = styled.button`
padding: 10px 20px;
border-radius:5px;
border:0;
font-size:16px;
font-weight:550;
color:#6c5ce7;
`

const BtnDiv = styled.div`
width:37%;
height:90%;
// border:1px solid red;
display:flex;
align-items: center;
// justify-content: space-between;
gap:10px;
margin-right:-100px;

`
export const Navbar = () => {
    return (
        <>
            <FundingDiv>
                <img src="https://www.expertia.ai/temp/rocket.png" alt="rocket icon" width="2.5%" height="70%" />
                <p>Expertia AI Raises $1.2M Seed round from Chiratae Ventures and Endiya Partners</p>
                <ReadOnBtn>Read-On</ReadOnBtn>
            </FundingDiv>
            
            <div id="NavMenu">
                <Link class="companylogo" to="/"><img  src="https://www.expertia.ai/expertiaLogotext.png" alt="Company logo" width="60%" height="50%"/></Link>
                <BtnDiv>
                    <button class="NavBtn">Request a demo</button>
                   <Link class="NavBtn" style={{ textDecorationLine: "none" ,color: "black" }} to="/jobs"><button class="NavBtn">Jobs</button></Link>
                    <button class="NavBtn">Login</button>
                    <button class="GetStartBtn">Get Started</button>
                </BtnDiv>
            </div>
        </>
)
}