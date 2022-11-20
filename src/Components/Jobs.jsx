
import "./Jobs.css";
import {Link} from "react-router-dom"

export const Jobs = () => {
    return (
        <>
            <div id="jobDiv">
                <div>
                <h1 style={{fontSize:"50px",color:"#6c5ce7"}}>Featured Jobs</h1>
                    <button style={{
                        width: "35%",
                        height: "35px",
                        borderRadius: "18px",
                        border: "none",
                        backgroundColor: "#6c5ce7",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}>Post A Job</button>
                    </div>
            </div>
            
            <div className="companyJobs">
              
                <div className="innerDiv">
                     <Link to='/jobdetails' style={{textDecoration:"none",color:"black"}}>
                    <img src="https://5.imimg.com/data5/QU/TN/OI/SELLER-29195959/technologies-120x120.png" alt="" width="30%" height="30%" />
                
                    <p>Windzard Technologies</p>
                    <h2>Key Account Sales Manager For Aditya Birla Capital</h2>
                    <p>Posted on November 20th 2022</p>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        // border: "1px solid",
                        // margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        
                    }}>
                        <div style={{
                            flex: "2",
                            height: "100%",
                            border: "1px solid #61c1a0",
                            borderRadius: "5px",
                            color: "#61c1a0",
                            backgroundColor:"#f6ffed",

                        }}>

                            Junior (1 to 3 Years)
                        </div>
                        <div style={{
                            flex: "1",
                            height: "100%",
                            border: "1px solid #f5bf77",
                            borderRadius: "5px",
                            color: "#f5bf77",
                             backgroundColor:"#fff7e6",
                             
                        }}>Chennai</div>
                    </div>

                    <div style={{
                        width: "25%",
                        height: "25px",
                        border: "1px solid",
                         borderRadius: "5px",
                            color: "#25a6ed",
                        backgroundColor: "#e6f7ff",
                             marginTop: "15px",
                    }}>Full Time</div>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                         marginTop: "15px",
                        }}>Rs. 100000 INR - Rs. 1280000 INR (PA)</div>
                        </Link>
                    </div>
                    
                <div className="innerDiv">
                     <Link to='/jobdetails' style={{textDecoration:"none",color:"black"}}>
                    <img src="https://5.imimg.com/data5/QU/TN/OI/SELLER-29195959/technologies-120x120.png" alt="" width="30%" height="30%" />
                
                    <p>Windzard Technologies</p>
                    <h2>Business Development Manager For Aditya Birla</h2>
                    <p>Posted on November 20th 2022</p>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        // border: "1px solid",
                        // margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        
                    }}>
                        <div style={{
                            flex: "2",
                            height: "100%",
                            border: "1px solid #61c1a0",
                            borderRadius: "5px",
                            color: "#61c1a0",
                            backgroundColor:"#f6ffed",

                        }}>

                            Junior (1 to 3 Years)
                        </div>
                        <div style={{
                            flex: "1",
                            height: "100%",
                            border: "1px solid #f5bf77",
                            borderRadius: "5px",
                            color: "#f5bf77",
                             backgroundColor:"#fff7e6",
                             
                        }}>Chennai</div>
                    </div>

                    <div style={{
                        width: "25%",
                        height: "25px",
                        border: "1px solid",
                         borderRadius: "5px",
                            color: "#25a6ed",
                        backgroundColor: "#e6f7ff",
                             marginTop: "15px",
                    }}>Full Time</div>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                         marginTop: "15px",
                        }}>Rs. 100000 INR - Rs. 1280000 INR (PA)</div>
                        </Link>
                </div>

                <div className="innerDiv">
                     <Link to='/jobdetails' style={{textDecoration:"none",color:"black"}}>
                    <img src="https://5.imimg.com/data5/QU/TN/OI/SELLER-29195959/technologies-120x120.png" alt="" width="30%" height="30%" />
                
                    <p>Windzard Technologies</p>
                    <h2>Insurance Manager For Aditya Birla Capital Health</h2>
                    <p>Posted on November 20th 2022</p>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        // border: "1px solid",
                        // margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        
                    }}>
                        <div style={{
                            flex: "2",
                            height: "100%",
                            border: "1px solid #61c1a0",
                            borderRadius: "5px",
                            color: "#61c1a0",
                            backgroundColor:"#f6ffed",

                        }}>

                            Junior (1 to 3 Years)
                        </div>
                        <div style={{
                            flex: "1",
                            height: "100%",
                            border: "1px solid #f5bf77",
                            borderRadius: "5px",
                            color: "#f5bf77",
                             backgroundColor:"#fff7e6",
                             
                        }}>Chennai</div>
                    </div>

                    <div style={{
                        width: "25%",
                        height: "25px",
                        border: "1px solid",
                         borderRadius: "5px",
                            color: "#25a6ed",
                        backgroundColor: "#e6f7ff",
                             marginTop: "15px",
                    }}>Full Time</div>

                    <div style={{
                        width: "80%",
                        height: "25px",
                        border: "1px solid gray",
                        borderRadius: "5px",
                         marginTop: "15px",
                        }}>Rs. 100000 INR - Rs. 1280000 INR (PA)</div>
                        
                        </Link>
                </div>
            </div>
        </>
    )
}