import React, {Fragment} from 'react'
import Banner from '../components/listing_list/Banner'
import imperiumBanner from '../assets/images/banners/Imperium_Banner021.jpg'
import PropertyListDetails from '../components/listing_list/PropertyListDetails'
import PropertyListDisplay from '../components/listing_list/PropertyListDisplay.js'
import propertyData from '../data/propertyData';
const Test = () =>{
    return <Fragment >

             <Banner banner_dir={imperiumBanner}/>
             <PropertyListDetails/>
             <PropertyListDisplay list={propertyData}/>
           </Fragment>

}
export default Test
