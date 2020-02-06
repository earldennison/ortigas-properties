import React, { useContext, useEffect, Fragment } from 'react'
import banner from '../assets/images-theme/greenhills_center.jpg'
import PagesContext from '../context/pages/pagesContext' 
import { useHistory } from 'react-router-dom'

import Banner from '../components/listing_list/Banner'
import PropertyListDetails from '../components/listing_list/PropertyListDetails'
import PropertyListDisplay from '../components/listing_list/PropertyListDisplay.js'
import propertyData from '../data/propertyData';

let pages ={
    residences:{
        pre_title:"Our Luxiourious",
        title:"Residences",
        description:` 
        Ortigas Land is the benchmark for modern urban living in Metro Manila. For more than 8 decades, Ortigas has built a legacy of building great places for work and play, thereby becoming an important landmark in the metro. `
    },
    offices:{
        pre_title:"Our Towering",
        title:"Offices",
        description:`
Ortigas Center is one of the most important financial and commercial districts in the country, home to the Philippines’ most esteemed organizations and corporations, as well as malls that set the standard of city entertainment. It is a bustling nest of industries, from banks to BPOs, retail to real estate, and media to manufacturing.
`
    },
    ortigasEast:{
        pre_title:"The New Center",
        title:"Ortigas East",
        description:`
Ortigas East, formerly known as Frontera Verde, is a 16-hectare development project at the corner of Ortigas Avenue and E. Rodriguez Jr. Avenue (C-5) in Barangay Ugong, Pasig City.
`
    },

    ortigasCenter:{
        pre_title:"The Business District",
        title:"Ortigas Center",
        description:`
Before Ortigas Land acquired development rights to the area, the 4,033-hectare estate was unused and barren. Eventually, fractions of the huge land were sold in big parcels and others were developed by Ortigas, including the CBD. During the 1960s, it started blooming into a financial center, initially housing structures like the Chronicle Building (now Benpres) and the Meralco building.
`
    },

    greenhillsCenter:{
        pre_title:"A Space Reborn",
        title:"Greenhills Center ",
        description:`
Greenhills Center takes in pride in being Metro Manila’s first-ever shopping complex. Widely known for years as a must-stop destination for tourists, foreign dignitaries, and celebrities, it is currently undergoing a multi-billion redevelopment. Soon, the Greenhills Center that has shaped generations will be ready to serve the new generation.
`
    },
    circuloVerde:{
        pre_title:"The Sanctuary",
        title:"Circulo Verde",
        description:`
Circulo Verde is a 10-hectare comunity that allows you to enjoy nature and modern convenience at the same time. Whether you are starting to be more independent, growing a family of your own, or enjoying being empty nesters, there is a living space that fits your lifestyle. You can choose from a variety of living spaces from studio, one, two, or three-bedroom units, or even a townhouse at the Garden Homes.
`
    },

    capitolCommons:{
        pre_title:"Luxurious Living",
        title:"Capitiol Commons",
        description:`
Capitol Commons is a 10-hectare mixed-use development located along Meralco Ave. corner Shaw Blvd. Ortigas Center, Pasig City (Former Rizal Provincial Capitol) that features modern living spaces, office facilities, and commercial areas that showcase premium retail and entertainment selections.
`
    },
}

const ListingList = ({ match: { params } }) =>{
    const pagesContext = useContext(PagesContext)
    const { getProperties} = pagesContext
    useEffect( getProperties, [params.page])
    let history = useHistory()

    var listingList = pagesContext.properties
    switch(params.page){
    case "residences":
        var { pre_title, title, description } = pages.residences
        break
    case "offices":
        var { pre_title, title, description } = pages.offices
        break
    case "ortigas-east":
        var { pre_title, title, description } = pages.ortigasEast
        break
    case "ortigas-center":
        var { pre_title, title, description } = pages.ortigasCenter
        break
    case "circulo-verde":
        var { pre_title, title, description } = pages.circuloVerde
        break
    case "capitol-commons":
        var { pre_title, title, description } = pages.capitolCommons
        break
    case "greenhills-center":
        var { pre_title, title, description } = pages.greenhillsCenter
        break
    default:
        var title=undefined
        var pre_title=undefined
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
             <PropertyListDetails
               pre_title={pre_title}
               title={title}
               description={description}

             />
             <PropertyListDisplay list={filter()}/>
           </Fragment>



}

export default ListingList
