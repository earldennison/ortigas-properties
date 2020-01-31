import React from 'react'
import '../assets/css/property-article.css'

/* const ArticleTitle = ({children}) => {
    return <div className="property-ld-title">
             {children}
           </div>
}
const AccentLine = () => (
    <div className="accent-line accent-red">
      <i className="accent-line-dot"></i>
    </div>
)

const PropertyAddress = ({first,second}) => (
    <div className="property-ld-address">
      <div className="property-address-holder-left">
        <div className=" address-holder">
          {first}
          <br/>
          {second}
         </div>
        </div>
        <div className="clearfix"/>
        </div>
        )
        const PropertyParagraph = ({ children }) =>(
    <div className="property-ld-p">
      {children}
    </div>
)
const PropertySpecs = ({ title, estate, type, status }) =>(
    <div className="property-ld-specs">
      <div className="property-specs-right-bg" />
      <div className="property-ld-specs-inner">
        <div className="property-ld-title"> {title} </div>
        <div className="property-ld-estate">
          <span>Estate:</span> {estate} <br/>
          <span>Type:</span> {type} </div>
        <div className="property-ld-specs-info">
          <span className="property-ld-specs-border top">
            <img src="https://www.carswellandassociates.com/wp-content/themes/carswellandassociates.com/images/listing-details/specs-border.png" alt="border" className="img-responsive" scale="0" />
          </span>
          Construction Update
          <span className="ip-ld-specs-border bottom">
            <img src="https://www.carswellandassociates.com/wp-content/themes/carswellandassociates.com/images/listing-details/specs-border.png" alt="border" className="img-responsive" scale="0" />
          </span>
        </div>
      </div>
    </div>
)
const ContentProperty = () => {
    return <article className="content-property">
             <div className="property-listing-details-content">
               <div className="container">
                 <div className="row">
                   <div className="col-md-8">
                     <div className="property-article-animate-text property-ld-text">
                       <ArticleTitle > Imperium</ArticleTitle>
                       <AccentLine />
                       <PropertyAddress
                         first="The Imperium"
                         second="Pasig City"
                       />
                       <PropertyParagraph>
                         "Some Text Here is fuck you" </PropertyParagraph>
                     </div>
                   </div>

                   <div className="col-md-4">
                     <div className="animate-property-specs property-ld-specs-content">
                       <PropertySpecs
                         title="The Imperium"
                         estate="Capitol Commons"
                         type="Residential"
                       />
                       <div className="property-oh-specs">
                         <div className="property-oh-specs-wrapper">
                           <span></span>
                         </div>
                       </div>

                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </article>

} */
const ListingDetails = () => (

    <div className="col-md-8">
      <div className="ip-ld-text">
        <div className="ip-ld-title">
          Imperium
        </div>
        <div className="accent-line accent-red">
          <i className="accent-line-dot"/>
        </div>
        <div className="ip-ld-address">
          <div className="address-holder-left">
            <div className="address-holder">
              The Imperium <br/> Ortigas
              <div className="clearfix">
               </div> 
            </div>
          </div> 
        </div>
        <div className="ip-ld-p">
          <p>Some Paragraph Here </p>
        </div>
      </div>
    </div>


)
const ListingSpecs = (props) => {
    return <div className="col-md-4">
             <div className="ip-ld-specs-content">
               <div className="ip-ld-specs">
                 <div className="ip-specs-right-bg"></div>
                 <div className="ip-ld-specs-inner">
                   <div className="ip-ld-price">
                     Title goes heare 
                   </div>
                   <div className="ip-ld-neighborhood">
                     <span>Estate:</span> Capitol Commons <br/>
                     <span>Type:</span> Residential
                   </div>
                   <div className="ip-ld-specs-info">
                     <span className="ip-ld-specs-border top">
                       <img src="https://www.carswellandassociates.com/wp-content/themes/carswellandassociates.com/images/listing-details/specs-border.png" alt="border" className="img-responsive"/>
                     </span>
                     Construction Update
                     <span className="ip-ld-specs-border bottom">
		                   <img src="https://www.carswellandassociates.com/wp-content/themes/carswellandassociates.com/images/listing-details/specs-border.png" alt="border" className="img-responsive"/>
										 </span>
                   </div>
                 </div>
               </div>
    <div className="ip-oh-specs" style={{height:"62px"}}>
      <div className="ip-oh-specs-wrapper"  style={{height:"62px"}}>
                   <span></span>
                 </div>
               </div>
             </div>
           </div>
}
const ContentProperty = () => (
    <article id="content" className="hfeed">
      <div className="ip-listing-details-content">
        <div className="container">
          <div className="row">
            <ListingDetails /> { /* col-md-8 **/}
            <ListingSpecs/>
          </div>
        </div>
      </div>
    </article>
    
)
export default ContentProperty
