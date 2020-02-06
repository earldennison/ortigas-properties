import React from 'react'
import { Link } from 'react-router-dom'
import { hero_images } from '../../assets/images'
import '../../assets/css/estates-feature.css'



var row_style = {
    alignItems:"center",
}
var itemStyle = {
    maxWidth:"45%"
    }

const EstateFeatureItem = ({
    link, image, pre_title, title,position,children}) => {
    
    console.log(position)
    return (
        <div className="searchmls-cta row"> 

          <div
            style={{
                display:"flex"}}
          >

            {position === 'right'?
             <div className="estate-paragraph-container-right">
               <p className="estate-paragraph-right"> 
                 {children}
               </p>
             </div>: undefined }
        <Link to={link} style={itemStyle} >

          <div className="searchmls-inner">
            <div className="searchmls-cta-title">
              <span >{pre_title} </span>
              {title}
            </div>
            <img alt="estate-image" src={image}/>
          </div>
        </Link>

            {position === "left" ? (<div className="estate-paragraph-container-right">
                                     <p className="estate-paragraph-right"> 
                                       {children}
                                     </p>
                                   </div>): undefined}

          </div>
        </div >
          
    )
}

const EstateFeature = () => {
    let [greenhills, center, capitol, east, circulo] = hero_images
    return (
        <div className="container">
        <div className="searchmls-sidebar" >
          <EstateFeatureItem
            image={capitol}
            pre_title="The"
            title="Capitiol Commons"
            link="/listing-list/capitol-commons"
            position="right">
            Capitol Commons is the new destination for luxury living.
          </EstateFeatureItem>
          <EstateFeatureItem
            image={center}
            pre_title="The"
            title="Ortigas Center"
            link="/listing-list/ortigas-center"
            position="left">
            Ortigas Center sets itself apaart as one of the most important central buisness districts (CBD) in Metro Manila
          </EstateFeatureItem>
          <EstateFeatureItem
            image={circulo}
            pre_title="The Sactuary"
            title="Circulo Verde"
            link ='/listing-list/circulo-verde'
            position="right">
            A suburban sanctuary in the city
          </EstateFeatureItem>

          <EstateFeatureItem
            image={east}
            pre_title="The new center"
            title="Ortigas East"
            link ='/listing-list/ortigas-east'
            position="left">
            Ortigas East is Ortias Land's 16-hectare eco-estate along
            the C5 corridor
          </EstateFeatureItem>
          <EstateFeatureItem
            image={greenhills}
            pre_title="A space reborn"
            title="Greenhills Center"
            link ='/listing-list/greenhills'
            position="right">
            Witness Greenhills Center's multi-billion redevelopment into a 
            complete shop-play-work-live community
          </EstateFeatureItem>
        </div>

          </div>
    )
}

export default EstateFeature
