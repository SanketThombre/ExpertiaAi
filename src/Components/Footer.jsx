
import "./Footer.css"

export const Foooter = () => {
    return (
        <>
            <div id="Container">
                <div className="subscribe">
                    <div style={{textAlign: 'left'}}>
                        <h1 style={{margin:"0"}}>Stay up to date.</h1>
                        <p style={{margin:"0"}}>Join our journey for regular updates on Expertia's products and services</p>

                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder="Email" />
                        <button>Subscribe</button>

                    </div>

                </div>
                <div id="aboutInfo">
                    <div className="socialmedia">

                        <img src="https://www.expertia.ai/Full-Logo-Black.png" alt="" width="90%" height="27%" />
                        <p style={{marginTop:"15px",fontSize:"17px"}}>Expertia AI Technologies Pvt. Ltd,<br/>Sector 1, HSR Layout, Bangalore 560102</p>
                    
                        <div className="socialmediaLogos">
                            <img src="https://www.pngitem.com/pimgs/m/108-1086954_linkedin-logo-png-transparent-background-linkedin-logo-png.png" alt="" width="15%" height="15%"/>
                            <img src="data:image/png;base64,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" alt="" width="10%" height="10%"/>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/057/998/small/twitter-logo-on-transparent-background-free-vector.jpg" alt="" width="12%" height="12%"/>
                        </div>
                    <p style={{marginTop:"15px",fontSize:"17px"}}>© Copyright 2021 Expertia AI. All Rights Reserved</p>
                    </div>
                    <div className="products">

                        <h3>Product</h3>
                        <p>Get Started</p>
                        <p>Jobs</p>
                        <p>Companies</p>
                        <p>Request a demo</p>
                        <p>Interviews</p>
                        <p>Pricing</p>
                        <p>Integrations</p>
                    </div>
                    <div className="products">
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Contact Us</p>
                        <p>FAQs</p>
                    </div>
                    <div className="products">
                        <h3>Legal</h3>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>

                </div>
            </div>
        </>
    )
}