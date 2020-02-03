import React from 'react'
import '../assets/css/custom-slider.css'
import '../assets/css/listing-details.css'
const SlickSlider = ({children}) => {

    return <div className="ld-top">
             <div className="ld-bc"></div>
             <div className="ld-slide-nav slick-initialized slick-slider"> 
               <div className="slick-list draggable">
                 <div className="slick-track" >
                   <div className="slick-slide slick-cloned"
                        data-slick-index="-4"
                        aria-hidden="true"
                        style={{width:177}}
                        tabindex="-1">
                     <div>
                       <div className="ld-thumb-slide"
                            style={{width:"100%",display:"inline-block"}}>
                         <canvas
                           width="177"
                           height="134"
                           style={{
                               backgroundImage:"url(https://api-prod.corelogic.com/trestle/Media/SEFMIAMI.SEFMIAMI_MIAMI/Property/jpeg/278274988/20/MzczLzE5MTEvMjAvMjE/MjAvNTEzMC8xNTc5ODU5NjI2/Hq0FM9eyHZ3RYhdx7YjVFOIqYDxjFih4lUmLgpYNXug)"
                           }}></canvas>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="slide-arrows front-pra">
               <span className="ld-next">
                 Next
               </span>
               <span className="ld-prev">
                 Prev
               </span>
             </div>
           </div>



}
export default SlickSlider
