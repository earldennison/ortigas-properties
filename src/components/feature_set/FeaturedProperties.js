import React from 'react'
import TitleLine from './TitleLine'

const FeatPropItem = (props) => {
    const {image,link, width} = props
    return <div
             className="featprop-item"
             style={{
                 width:width? width: 290,
                 display:'block',
                 float:"left",
                 height:"100%",
                 minHeight:"1px",
             }}>
             <div className="featprop-item-wrap">
               <a className="featprop-link" href={link?link:'#'}>
                 <div className="featprop-item-main">
                   <div className="featprop-img" style={{backgroundImage:`url(${image})`}}/>
                   <div className="featprop-overlay">
                     <div className="featprop-overlay-border">
                       <div className="featprop-center-item">
                         <span className="fp-price">$1,950,000</span>
                         <span className="fp-address">11938 N Lake Drive, <br/>
                           Boynton Beach FL 33436
                         </span>
                         <span className="fp-bedsbaths">3 Beds<br/> 3 | 1 Baths</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
           </div>
}

const FeaturedWrapper = (props) => {
    return (
        <section className="featprop-wrap">
          <div className="textwidget custom-html-widget">
            <TitleLine first="Featured" second="Properties"/>
            <div className="featprop-container container wow fadeInRight">
              <div className="featprop-slick-wrap">
                <div className="featprop-holder" style={{position:"relative",display:"block",boxSizing:"border-box"}}>
                  <FeatPropItem image="https://cdn.photos.sparkplatform.com/fl/20190628182857036028000000-o.jpg"/>
                  <FeatPropItem image="https://cdn.photos.sparkplatform.com/fl/20190628182857036028000000-o.jpg"/>
                  <FeatPropItem image="https://cdn.photos.sparkplatform.com/fl/20190628182857036028000000-o.jpg"/>
                  <FeatPropItem image="https://cdn.photos.sparkplatform.com/fl/20190628182857036028000000-o.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </section>
    )

}

export default FeaturedWrapper;
