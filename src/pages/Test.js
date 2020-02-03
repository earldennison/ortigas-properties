import React, {Fragment} from 'react'
import Banner from '../components/listing_list/Banner'
import imperiumBanner from '../assets/images/banners/Imperium_Banner021.jpg'
import PropertyListDetails from '../components/listing_list/PropertyListDetails'
const Test = () =>{
    return <Fragment >

             <Banner banner_dir={imperiumBanner}/>
             <PropertyListDetails/>
           </Fragment>

}
export default Test
