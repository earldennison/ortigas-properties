import React from 'react'
import ImageFilter from 'react-image-filter'


const ClickBox =({fadeInPos, link, image, width, height, line1, line2 } ) =>{

    return <div className={`cta-col-1 col-md-3 col-sm-6 wow fadeIn${fadeInPos?fadeInPos:"Right"}`} style={{margin:"20px 0"}} data-wow-delay="1s">
             <a className="cta-link" href={link?link:'#'}>
               <div className="cta-item-wrap">
                 <div className="cta-item-img">
                   <ImageFilter
                     image={image}
                     className="img-responsive"
                     style={{
                         width:width? width:263,
                         height:height? height:181.65
                     }}
                     filter={'grayscale'}
                   />
                 </div>
                 <div className="cta-overlay">
                   <div className="cta-center">
                     <div className="cta-center-item">
                       <span className="cta-l1"> {line1}  </span>
                       <span className="cta-l2"> {line2}</span>
                     </div>
                   </div>
                 </div>
               </div>
             </a>
           </div>

}
export default ClickBox
