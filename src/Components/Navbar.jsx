
import "./Navbar.css";
import styled from "styled-components";



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
border:1px solid red;
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
                <img class="companylogo" src="https://www.expertia.ai/expertiaLogotext.png" alt="Company logo" width="11%" height="52%"/>
                <BtnDiv>
                    <button class="NavBtn">Request a demo</button>
                    <button class="NavBtn">Jobs</button>
                    <button class="NavBtn">Login</button>
                    <button class="GetStartBtn">Get Started</button>
                </BtnDiv>
            </div>
        </>
)
}