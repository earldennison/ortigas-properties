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

const EstateFeatureItem = ({position,children}) => {
    
    console.log(position)
    return (
        <div className="searchmls-cta row"> 

          <div
            style={{
                display:"flex"}}
          >

            {position === 'right'?
             <div className="estate-paragraph-container-right">
               <p className="estate-paragraph-right">  ajdojfad lkajfljdlkf jaldhl
                 dgoiasdjflkadjfkl
                 daofjadslkjf
                 fklsadjflkasdjlk
                 fadlsjfklasdj
                 fasdljfkl asjdfkl
                 fjaodfja lkd
                 fjaosdfjalskdjf
                 dfjoadjflkasdjf
                 fodsjflkasdjflk jlj
                 jfaodjfkladjfkljasdklfjlkad
               </p>
             </div>: undefined }
        <Link style={itemStyle} >

          <div className="searchmls-inner">
            <div className="searchmls-cta-title">
              <span >The </span>
              Ortigas Center
            </div>
            <img alt="" src={hero_images[2]}/>
          </div>
        </Link>

            {position === "left" ? (<div className="estate-paragraph-container-right">
                                     <p className="estate-paragraph-right">  ajdojfad lkajfljdlkf jaldhl
                                       dgoiasdjflkadjfkl
                                       daofjadslkjf
                                       fklsadjflkasdjlk
                                       fadlsjfklasdj
                                       fasdljfkl asjdfkl
                                       fjaodfja lkd
                                       fjaosdfjalskdjf
                                       dfjoadjflkasdjf
                                       fodsjflkasdjflk jlj
                                       jfaodjfkladjfkljasdklfjlkad
                                     </p>
                                   </div>): undefined}

          </div>
        </div >
          
    )
}

const EstateFeature = () => {
    return (
        <div className="container">
        <div className="searchmls-sidebar" >

          <EstateFeatureItem  position="right"/>

          <EstateFeatureItem  position="left"/>
          <EstateFeatureItem  position="right"/>

          <EstateFeatureItem  position="left"/>
        </div>

          </div>
    )
}

export default EstateFeature
