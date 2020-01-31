import React  from 'react'
import useWindowDimensions from './utilities/useWindowDimensions'
import image1 from '../assets/images-theme/greenhills_center.jpg'
import '../assets/css/property-slider.css'
import {Slider as SlickSlider} from 'react-slick'
import SlideChangeHoooks from './testImport'
import PropertyContent from './content-property'
const SliderToggle = ()=>{
    let settings = {
        dots:true,
        infinite:true,
        speed:500
    }
    return <SlickSlider {...settings} >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
        </SlickSlider>
}

const SingleSlide = ({image,width, height }) => (
    <img alt="none" src={image} style={{width:width,height:height}}/>
)

const PropertySlider = (props) => {
    const  { width,height } = useWindowDimensions()
    return <>
             <div className="property-wrapper">
             <div className="main-property-slider-holder">
               <div className="property-slider">
                 <div className="property-slider-overlay" >
                   <SingleSlide width={width} height={height-150} image={image1}/>
                 </div>
               </div>
             </div>
             <div className="property-content-wrapper">
               <div className="property-content-container">
               </div>
             </div>
             </div> 

             <PropertyContent/>
           </>

}
export default PropertySlider
