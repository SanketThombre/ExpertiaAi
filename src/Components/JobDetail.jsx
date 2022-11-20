
import "./JobDetail.css";
import { Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";
import ResumeUploadPopup from "./ResumeUploadPopup";

export const JobDetail = () => {
    return (
        <>
            <div id="CompanyDetail">
                <div className="currentStatus">
                    Currently accepting applicants

                </div>

                <div className="companylogoAndInfo">
                    <div className="companyLogo">
                        <Link to="/companydetail">

                        <img src="https://5.imimg.com/data5/QU/TN/OI/SELLER-29195959/technologies-120x120.png" alt="" width="100%" height="100%"/>
                    </Link>
                    </div>
                    <div className="companyInfo">
                        <p style={{fontSize:"18px",margin:"0",marginBottom:"10px"}}>Windzard Technologies</p>
                    <h1>Key Account Sales Manager For Aditya Birla Capital<br/> Health</h1>
                    <p style={{fontSize:"18px",margin:"0",marginTop:"6px"}}>Date Posted : 20th Nov 2022</p>

                    <div style={{
                        width: "85%",
                        height: "25px",
                        // border: "1px solid",
                        // margin: "auto",
                        display: "flex",
                        alignItems: "center",
                            gap: "15px",
                        marginTop: "10px",
                        
                    }}>
                        <div style={{
                           width:"35%",
                            height: "100%",
                            border: "1px solid #61c1a0",
                            borderRadius: "5px",
                            color: "#61c1a0",
                                backgroundColor: "#f6ffed",
                                display: "flex",
                                alignItems: "center",
                            justifyContent: "center",

                        }}>

                            Junior (1 to 3 Years)
                        </div>
                        <div style={{
                           width:"20%",
                            height: "100%",
                            border: "1px solid #f5bf77",
                            borderRadius: "5px",
                            color: "#f5bf77",
                                backgroundColor: "#fff7e6",
                              display: "flex",
                                alignItems: "center",
                            justifyContent: "center",
                             
                        }}>Chennai</div>
                   

                    <div style={{
                        width: "25%",
                        height: "25px",
                        border: "1px solid",
                         borderRadius: "5px",
                            color: "#25a6ed",
                        backgroundColor: "#e6f7ff",
                            // marginTop: "15px",
                              display: "flex",
                                alignItems: "center",
                            justifyContent: "center",
                    }}>Full Time</div>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                            // marginTop: "15px",
                          display: "flex",
                                alignItems: "center",
                            justifyContent: "center",
                            }}>Rs. 100000 INR - Rs. 1280000 INR (PA)</div>

                        </div>
                        
                        <div className="applyDiv">
                            {/* <button className="applyBtn">Apply Now</button> */}
                            <ResumeUploadPopup/>
                    
                            <div style={{width: "0.4%",height: "100%",backgroundColor:"lightgray"}}></div>
                            <div className="linkOfCompanySocialMedia">
                                share via
                                <img src="https://www.pngitem.com/pimgs/m/108-1086954_linkedin-logo-png-transparent-background-linkedin-logo-png.png" alt="" width="55px" height="35px"/>
                                <img src="https://w7.pngwing.com/pngs/347/373/png-transparent-computer-icons-whatsapp-whatsapp-text-trademark-logo.png" alt="" width="40px" height="35px"/>
                                <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" width="40px" height="35px"/>

                            </div>
                            
                        </div>
                        <div style={{
                            position: "absolute",
                            bottom: "5%",
                            right: "1%",
                            cursor: "pointer",

                        }}><Link to="/companydetail">Visit Website <Icon name="external alternate" /></Link></div>
                        
                         <div style={{ position: "absolute",
                            top: "10%",
                            right: "1%",fontSize:"15px",cursor: "pointer",}}><Icon name="flag"/></div>

                    </div>
                   
                  
                </div>

            </div>

            <div className="jobDescrip">

                <h2>Job Description</h2>
                <hr style={{ width: "100%", margin: "auto", color: "gray" }} />
                
                <div style={{
                    marginTop: "15px",

                }}>
                    <button style={{marginLeft: "5px",padding:"5px 10px",backgroundColor:"#808080",color: "white",border:"none"}}>Sales</button>
                    <button style={{marginLeft: "15px",padding:"5px 10px",backgroundColor:"#808080",color: "white",border:"none"}}>Marketing</button>
                     <button style={{marginLeft: "15px",padding:"5px 10px",backgroundColor:"#808080",color: "white",border:"none"}}>Insurance</button>
                </div>


                <p style={{marginTop: "20px",fontSize:"18px"}}>The ideal candidate is a passionate, self-motivated, and detail-oriented team player who is committed to the success of our <br/>customers. You will focus on growing and developing existing clients, as well as generating new business by identifying,<br/> implementing and executing new strategies. </p>
           
                <h3>Responsibilities</h3>
                
                <ul style={{lineHeight: "25px",fontSize:"18px"}}>
                    <li>Operate as the primary point of contact for key account stakeholders</li>
                    <li>Develop a trusted advisory relationship with accounts, customer stakeholders and internal partners</li>
                    <li>Prepare and guarantee monthly, quarterly and annual sales forecasts</li>
                </ul>

                <h3>Qualifications</h3>

                <ul style={{lineHeight: "25px",fontSize:"18px"}}>
                    <li>Bachelor's degree or equivalent experience in Business</li>
                    <li>3+ years' of relevant work experience</li>
                    <li>Fluency in Microsoft Office suite (Outlook, Excel, Word, PowerPoint, etc.)</li>
                    <li>Excellent written and verbal communication skills</li>
                </ul>

            </div>

            <div style={{marginTop: "15px"}}>
                <img src="https://www.expertia.ai/PoweredByExpertia.png" alt="" width="10%" height="5%"/>
            </div>
        </>
    )
}