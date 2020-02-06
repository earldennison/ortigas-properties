import React from 'react'
import TitleLine from './TitleLine'
import { Link  } from 'react-router-dom'
import { galleon_images,
         imperium_images,
         royalton_images,
         connor_images,
       } from '../../assets/images'

const FeatPropItem = (props) => {
    const {image,link, width, estate, propertyName, updateStatus} = props
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
               <Link className="featprop-link" to={link}>
                 <div className="featprop-item-main">
                   <div className="featprop-img" style={{backgroundImage:`url(${image})`}}/>
                   <div className="featprop-overlay">
                     <div className="featprop-overlay-border">
                       <div className="featprop-center-item">
                         <span className="featprop-price">
                           {propertyName}
                         </span>
                         <span className="featprop-address">
                           {estate}
                         </span>
                         <span className="fp-bedsbaths">{updateStatus}</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </Link>
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
                  <FeatPropItem
                    link="/properties/galleon"
                    propertyName="The Galleon"
                    estate="Ortigas Center"
                    updateStatus="Pre-Selling"
                    image={galleon_images[0]}/>
                  <FeatPropItem
                    link="/properties/imperium"
                    propertyName="The Imperium"
                    estate="Capitol Commons"
                    updateStatus="Pre-Selling"
                    image={imperium_images[0]}/>

                  <FeatPropItem
                    link="/properties/connor"
                    propertyName="Connor"
                    estate="Greenhills Center"
                    image={connor_images[0]}/>
                  <FeatPropItem
                    link="/properties/royalton"
                    propertyName="Royalton"
                    estate="Capitiol Commons"
                    updateStatus="Turnover"
                    image={royalton_images[0]}/>
                </div>
              </div>
            </div>
          </div>
        </section>
    )

}

export default FeaturedWrapper;
