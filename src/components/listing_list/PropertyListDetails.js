import React, {Fragment} from 'react'
import '../../assets/css/property-list.css'
const PropertyListDescription = () =>{

    return <div className="ip-prop-s1-left ip-title-wrap ip-title-left">
      <div className="ip-title">
        <h1 className="section-title">
          <span> This is a </span>
          TEST
        </h1>
      </div>
      <div className="accent-line accent-red">
        <i className="accent-line-dot"></i>
      </div>
      <p> Browse through our newest properties on the market. WE would be happy to help you find and purchase your
        dream home.
      </p>
    </div>

}

const PropertyListRight =() => (
    <div className="ip-prop-s1-right">
      <div className="ip-prop-refine-search-wrapper">
        <div className="ip-prop-refine-search">
          <h2 className="section-title">
						<span>Refine Your</span>Search
					</h2>
          <div className="ip-prop-refine-search-form">
            <form className="our-properties-form" action="">
              <div className="ip-prop-rs-field">
                <label>Price</label>
                <div className="custom-select">
                  <div className="custom-selected">All</div>
                  <div className="custom-select-list">
                    <div className="custom-select-list-option" data-url="all" data-value="all">All</div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-a"><span>Search</span></button>
            </form>
            
          </div>
        </div>
      </div>
    </div>

)
const PropertyListDetails = () => {
    return <Fragment>
             <div className="ip-properties-wrap">
               <dvi className="ip-prop-section ip-prop-section-1">
                 <div className="container new-container">
                   <PropertyListDescription/>
                   <PropertyListRight/>
                 </div>
               </dvi>
             </div>
           </Fragment>
}

export default PropertyListDetails
