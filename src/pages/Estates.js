import React,{Fragment} from 'react';
import PropertySlider from '../components/PropertySlider.js'
import ContentProperty from '../components/ContentProperty.js'
const Estates = () => (
    <Fragment>
     <PropertySlider/>
    <ContentProperty
               title="The Imperium"
               address1="Camino Verde Capitol Commons,"
               address2="Pasig City"
               estate="Capitol Commons"
               type="Residential"
             >
               <p >
                 The Imperium is the most luxurious residential tower set to rise 62 storeys high in Capitol Commons. With only four to a floor of 233 large and bright two- and three-bedroom units and suites, residents of The Imperium will have the most exclusive and highly coveted address in the city. The benefits are truly spectacular and one-of-a-kind, its simple yet elegant circular form provides its residents radiant and spacious living spaces. This is uniquely complemented by its trapezoidal canted windows, reducing the need for artificial lighting while adding illumination and offering a scenic view of the city as well as of the Capitol Commons park below. Among its amenities are an infinity edge pool, an outdoor play area, landscaped garden decks, grand lobby, high performance fitness facility, recreation room, residents' lounge, function rooms and a mini theater with recliner chairs. 
               </p>

             </ContentProperty>
    </Fragment>
)
export default Estates;
