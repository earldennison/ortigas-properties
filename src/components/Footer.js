import React from 'react'
import logo from '../assets/images/ortigasland.svg'
import ImageFilter from 'react-image-filter'
const MenuItem = ({children, link}) =>(

    <li className="menu-item menu-item-object-page"
        style={{
            padding:"2px 10px",
            display:"inline-block",
            veriticalAlign:"top"
        }}
    >
      <a href={link?link:"#"}>{children}</a>
    </li>
)
const Footer = () => (
    <footer style={{
        marginTop:100,
        display:'block',clear:"both",color:"#FFF"
    }}>
      <div className="footer-top">
        <div className="footer-container container">
          <div className="textwidget">
            <div className="footer-label">
              Contact Us
            </div>
            <div className="footer-sublabel">
              Leave your email addrss below 
            </div>
            <div className="footer-form">
              <div style={{marginTop:30,padding:0}}>

                <form >
                <div className="subscribe-wrap">
                  <div className="cemail">
                    <input type="email" placeholder="Enter Email Address"/>
                  </div>
                  <div className="csend">
                    <input type="submit" className="contact-btn"/>
                  </div>
                </div>
                </form>
                  <div className="footer-smi smi">
                    <a className="ai-font-facebook" href=""></a>
                    <a className="ai-font-twitter" href=""></a>
                    <a className="ai-font-youtube" href=""></a>
                    <a className="ai-font-linkedin" href=""></a>
                    <a className="ai-font-google-plus" href=""></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container container">
          <div className="footer-bottom-row">
            <div className="footer-nav">
              <div className="menu-footer-menu-container">
                <ul className="footernav">
                  <MenuItem> Estates </MenuItem>
                  <MenuItem> Malls </MenuItem>
                  <MenuItem> Residences </MenuItem>
                  <MenuItem> Offices </MenuItem>
                  <MenuItem> About </MenuItem>
                  <MenuItem> Contact </MenuItem>
                </ul>
              </div>
              <div className="footer-copyright">
                Copyright 2020 Ortigas And Company. All Rights Reserved.
                <br/>
                Website Development by <a href="#" style={{textDecoration:"underline", fontWeight:"bold"}}>Edge Computing</a>
              </div>
              <div className="footer-realtor-logo">
                <img alt="" src={logo}
                     style={{filter:"brightness(0) invert(1)", width:100}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

)
export default Footer
