import React,{ useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../assets/css/react-slider.css'

const PropertyCarousel = ({images,dimensions,name,slug})=> {
    useEffect((images)=>{ return images?images:undefined }, [slug,images])
    return <Carousel >
    { images? images.map((image,index)=>(
        <div key={index}>
        <img alt={`${name}_${index}`} src={image}
        style={dimensions}
            />
        </div>
    )): undefined }
    </Carousel>
}
export default PropertyCarousel
