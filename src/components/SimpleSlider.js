import React,{ useState } from 'react'
import listingData from '../data/sliderData'
import '../assets/css/custom-slider.css'

const SingleSlide = ({image}) => {
    return <div className="simple-slider-img-container">
             <canvas
               width="177px"
               height="144px"
               style={{
                   backgroundImage:`url(${image})`
               }}
             />
           </div>
}
const SimpleSlider = (props) => {
    const curr_prop = listingData.properties.Imperium
    const [ index,setIndex ] = useState(0)
    const nextImage = () => setIndex(index+1)
    const prevImage = () => setIndex(index-1)
    return(
        <div style={{height:"100vh"}}>
          <div className="container">
            <div className="row" style={{marginTop:"500px"}}>
              <button
                onClick={() => nextImage()}
              > Next </button>
              <button
                onClick={() => prevImage()}
              > Prev </button>
            </div>
            {curr_prop.images.length}
            <div className="simple-slider-cards-slider">
              <div className="simple-slider-cards-slider-wrapper"
                   style={{
                       transform:`translateX(-${index*100/7}%)`
                   }}
                   other={index}
              >


                {curr_prop.images.map(
                    (image,i) =>{
                        return <SingleSlide key={i} image={image} />
                    }
                )}
              </div>
            </div>
          </div>
        </div>


    )

}
export default SimpleSlider
