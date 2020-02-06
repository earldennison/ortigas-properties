import React from 'react'
import { Link } from 'react-router-dom'
import TitleLine from './TitleLine.js'
const SingleOfficeItem =(props)=> {
    const {link} = props
    return <div className="featcomm-col col-md-4 wow">
             <Link className="featcomm-link" to={link?link:'a'}>
               <div className="featcomm-item-wrap">
                 <div className="featcomm-overlay">
                   <div className="featcomm-center">
                     <div className="featcomm-center-item">
                       <span>{props.children}</span>
                     </div>
                   </div>
                 </div>
               </div>
             </Link>
           </div>
}
const FeaturedOffices = () =>{
    return <section className="featcomm-wrap">
             <div className="textwidget">
               <div className="featcomm-container container">
               <TitleLine first="Featured" second="Offices"/>
               <div className="featcomm-row row">
                 <SingleOfficeItem
                   link="/properties/estancia-offices">
                   Estancia Offices
                 </SingleOfficeItem>
                 <SingleOfficeItem
                   link="/properties/glaston-tower" >
                   Glaston Tower
                 </SingleOfficeItem>
                 <SingleOfficeItem
                   link="/properties/ibp-tower"
                 > IBP Tower
                 </SingleOfficeItem>

               </div>
             </div>
             </div>
           </section>
}
export default FeaturedOffices
