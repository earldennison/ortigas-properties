import React from 'react'
import '../../assets/css/property-list.css'

const SinglePropertyDisplay = () => {
    return <div className="fp">
             <a className="dbl-tap-mob" href="">
               <div className="fp-img">
                 <canvas
                   height="497px"
                   width="708px"
                   style={{
                       backgroundImage:`url(https://www.carswellandassociates.com/wp-content/uploads/2019/07/Oriole_MLS-ORDER-1-1-1.jpg)`
                   }}
                 />
               </div>
               <div className="fp-details">
                 <div className="fp-details-wrapper">
                   <div className="fp-details-inside">
                     <div className="fp-address">
                       Oriole Drive <span>|</span> Sunset Strip
                     </div>
                   </div>
                   <div className="fp-ammenities">
                     6beds <span>|</span> 7baths
                   </div>
                 </div>
                 <div className="fp-btn btn-a">
									 <span>View More Details</span>
								 </div>
               </div>
               <div className="fp-statuses">
								 <div className="fp-statuses-holder">
									 <div className="fp-statuses-btn-holder">
                     <div className="fp-statuses-btn">Pre Selling</div>
                   </div>
								 </div>
							 </div>
             </a>
             
           </div>
}

const PropertyListDisplay =({property_list}) => {
    return <div className="ip-prop-section ip-prop-section-2">
             <div className="container new-container">
               <div className="ip-prop-list">
                 <SinglePropertyDisplay/>
                 <SinglePropertyDisplay/>
                 <SinglePropertyDisplay/>
                 <SinglePropertyDisplay/>
               </div>
             </div>
             
           </div>



}
export default PropertyListDisplay
