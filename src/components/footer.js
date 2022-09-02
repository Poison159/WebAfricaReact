import React from "react"


const Footer = () => {
    return(
        <div style={{backgroundColor:"#1A8EAE",fontSize:"15px"}}>
            <div className="row" style={{paddingTop:53,paddingBottom:53,paddingLeft:53,paddingRight:53}}>
                <div className="col-md-3">
                    <p style={{fontWeight:"bold"}}>OUR PRODUCTS</p>
                    <ul style={{listStyleType:"none",textAlign:"left",display:"inline-block"}}>
                        <a style={{color:"white"}} href="#"><li>Fibre internet</li></a>
                        <a style={{color:"white"}} href="#"><li>Fixed LTE</li></a>
                        <a style={{color:"white"}} href="#"><li>ADSL</li></a>
                        <a style={{color:"white"}} href="#"><li>Voice(VoIP)</li></a>
                        <a style={{color:"white"}} href="#"><li>Hardware</li></a>
                        <a style={{color:"white"}} href="#"><li>Anti-Virus Software</li></a>
                        <a style={{color:"white"}} href="#"><li>Moving Home ? </li></a>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p style={{fontWeight:"bold"}}>USEFUL LINKS</p>
                    <ul style={{listStyleType:"none",textAlign:"left",display:"inline-block"}}>
                        <a style={{color:"white"}} href="#"><li>About Us</li></a>
                        <a style={{color:"white"}} href="#"><li>Careers</li></a>
                        <a style={{color:"white"}} href="#"><li>Contact Us</li></a>
                        <a style={{color:"white"}} href="#"><li>Network Status</li></a>
                        <a style={{color:"white"}} href="#"><li>Legal</li></a>
                        <a style={{color:"white"}} href="#"><li>Support</li></a>
                        <a style={{color:"white"}} href="#"><li>Blog</li></a>
                        <a style={{color:"white"}} href="#"><li>Vulnerebility  Disclosure</li></a>
                        <a style={{color:"white"}} href="#"><li>ISPA</li></a>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p style={{fontWeight:"bold"}}>MY COSTOMER ZONE</p>
                    <ul style={{listStyleType:"none",textAlign:"left",display:"inline-block"}}>
                        <a style={{color:"white"}} href=""><li>Login</li></a>
                        <a style={{color:"white"}} href="#"><li>My Account Details</li></a>
                        <a style={{color:"white"}} href="#"><li>Contact Us</li></a>
                        <a style={{color:"white"}} href="#"><li>My Services</li></a>
                        <a style={{color:"white"}} href="#"><li>My Usage</li></a>
                        <a style={{color:"white"}} href="#"><li>My Invoices</li></a>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p style={{fontWeight:"bold"}}>MY COSTOMER ZONE</p>
                    <div>
                        <h4>WebAfrica</h4>
                        <p style={{paddingTop:"20px"}}>
                            The Boulevard Office Park, Block E,
                            Searle Street, Woodstock, 7925
                        </p>
        
                        <p><span style={{fontWeight:"bold"}}>Whatsapp Support:</span> 021 464 9500</p>
                        <p><span style={{fontWeight:"bold"}}>General Enquiries:</span> 086 000 9500</p>
                        <p><span style={{fontWeight:"bold"}}>Sales:</span> 086 000 9555</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;