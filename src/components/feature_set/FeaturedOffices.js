import React from 'react'
import TitleLine from './TitleLine.js'
const SingleOfficeItem =(props)=> {
    const {link} = props
    return <div className="featcomm-col col-md-4 wow">
             <a className="featcomm-link" href={link?link:'a'}>
               <div className="featcomm-item-wrap">
                 <div className="featcomm-overlay">
                   <div className="featcomm-center">
                     <div className="featcomm-center-item">
                       <span>{props.children}</span>
                     </div>
                   </div>
                 </div>
               </div>
             </a>
           </div>
}
const FeaturedOffices = () =>{
    return <section className="featcomm-wrap">
             <div className="textwidget">
               <div className="featcomm-container container">
               <TitleLine first="Featured" second="Offices"/>
               <div className="featcomm-row row">
                 <SingleOfficeItem> The Galleon</SingleOfficeItem>
                 <SingleOfficeItem> Glasston Tower </SingleOfficeItem>
                 <SingleOfficeItem> IBP Tower</SingleOfficeItem>

               </div>
             </div>
             </div>
           </section>
}
export default FeaturedOffices
