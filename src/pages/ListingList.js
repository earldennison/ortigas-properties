import React, { useContext, useEffect, Fragment } from 'react'
import banner from '../assets/images-theme/greenhills_center.jpg'
import PagesContext from '../context/pages/pagesContext' 
import { useHistory } from 'react-router-dom'

import Banner from '../components/listing_list/Banner'
import PropertyListDetails from '../components/listing_list/PropertyListDetails'
import PropertyListDisplay from '../components/listing_list/PropertyListDisplay.js'
import propertyData from '../data/propertyData';



const ListingList = ({ match: { params } }) =>{
    const pagesContext = useContext(PagesContext)
    const { getProperties} = pagesContext
    useEffect( getProperties, [params.page])
    let history = useHistory()
    switch(params.page){
    case "residences":
    case "offices":
    case "ortigas-east":
    case "ortigas-center":
    case "circulo-verde":
    case "capitol-commons":
    case "greenhills-center":
        var listingList = pagesContext.properties
        break
    default:
        history.push("/page-not-found")
    }
    const filter = () => ( listingList.filter(
        ({name, estate,type})=> {
                switch(params.page){
                case "residences": return type === "Residential"
                case "offices": return type === "Office"
                case "ortigas-east": return estate ==="Ortigas East"
                case "ortigas-center": return estate ==="Ortigas Center"
                case "circulo-verde": return estate === "Circulo Verde"
                case "greenhills-center": return estate === "Greenhills Center"
                case "capitol-commons": return estate === "Capitol Commons"
                case "greenhills-center": return estate === "Greenhills Center"
                }}
    ))

    return <Fragment>

             <Banner banner_dir={banner}/>
             <PropertyListDetails />
             <PropertyListDisplay list={filter()}/>
           </Fragment>



}

export default ListingList
