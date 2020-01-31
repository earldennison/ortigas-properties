import React from 'react'
import ImageFilter from 'react-image-filter'
import logo from '../assets/images/ortigasland.svg'
const About = () => (
    <section className="welcome-wrap wow fadeIn">
      <div className="welcome-container container">
        <div className="welcome-row row">
          <div className="welcome-left col-md-7 welcome-content">
            <div className="textwidget">
              <div className="welcome-content-wrap">
             
            <div className="welcome-logo">
              <img className="img-responsive"
                   alt="Ortigas Land"
                   src={logo}
                   style={{filter:"brightness(0) invert(1)"}}/>
            </div>
            <div className="welcome-divider">
              <span></span>
            </div>
          <div className="welcome-text">
           <p > Ortigas Land is one of the pioneers in the Philippine real estate landscape. It has been perfecting the art of life, work, and leisure by conceiving of and building master-planned developments that have become thriving communities over time -- paradigms of excellence in the Philippine real estate landscape.
           </p>
            <p>
<br/>
            The initial development strategy was two pronged: (1) develop industrial properties and allow subdivisions and community facilities to emerge around it; and (2) focus on "elite" motivation: first class homes made attractive by&nbsp;modern and accessible amenities like private schools, hospitals, churches, post offices, police stations, ample water supply, plus private sports and social clubs. 
        </p>
          </div>
          
              </div>
        </div>
        </div>
        </div>
      </div>
    </section>
)

export default About;
