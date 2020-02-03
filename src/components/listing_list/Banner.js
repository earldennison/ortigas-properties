import React from 'react'
import '../../assets/css/banner.css'
const Banner = ({banner_dir}) =>{
    return <div className="ip-banner-wrap">
             <div className="ip-banner">
               <canvas
                 width="1600"
                 height="350"
                 style={{
                     backgroundImage:`url(${banner_dir})`
                 }}
               />
             </div>
           </div>


}
export default Banner
