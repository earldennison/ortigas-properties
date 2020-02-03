import React from 'react'
const ListingSpecs = ({estate, type, update}) => {
    return <div className="col-md-4">
             <div className="ip-ld-specs-content">
               <div className="ip-ld-specs">
                 <div className="ip-specs-right-bg"></div>
                 <div className="ip-ld-specs-inner">
                   <div className="ip-ld-price">
                     Project Specifications
                   </div>
                   <div className="ip-ld-neighborhood">
                     <span>Estate:</span> {estate} <br/>
                     <span>Type:</span> {type}
                   </div>
                   <div className="ip-ld-specs-info">
                     <span className="ip-ld-specs-border top">
                       <img src="https://www.carswellandassociates.com/wp-content/themes/carswellandassociates.com/images/listing-details/specs-border.png" alt="border" className="img-responsive"/>
                     </span>
                     Construction Update
                     <span className="ip-ld-specs-border bottom">
		                   <img src="https://www.carswellandassociates.com/wp-content/themes/carswellandassociates.com/images/listing-details/specs-border.png" alt="border" className="img-responsive"/>
										 </span>
                   </div>
                 </div>
               </div>
    <div className="ip-oh-specs" style={{height:"62px"}}>
      <div className="ip-oh-specs-wrapper"  style={{height:"62px"}}>
                   <span></span>
                 </div>
               </div>
             </div>
           </div>
}
export default ListingSpecs
