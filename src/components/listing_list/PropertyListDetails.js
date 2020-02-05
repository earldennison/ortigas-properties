import React, { Fragment } from 'react'
import '../../assets/css/property-list.css'


const PropertyListDescription = ({title,pre_title, description}) =>{

    return <div className="ip-prop-s1-left ip-title-wrap ip-title-left">
      <div className="ip-title">
        <h1 className="section-title">
          <span> {pre_title}</span>
          {title}
        </h1>
      </div>
      <div className="accent-line accent-red">
        <i className="accent-line-dot"></i>
      </div>
      <p>
        {description}
      </p>
    </div>

}

const PropertyListRight =({first,second}) => (
    <div className="ip-prop-s1-right">
      <div className="ip-prop-refine-search-wrapper">
        <div className="ip-prop-refine-search">
          <h2 className="section-title">
						<span>{first}</span> {second}
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
const PropertyListDetails = ({pre_title,title, description}) => {

    return <Fragment>
             <div className="ip-properties-wrap">
               <div className="ip-prop-section ip-prop-section-1">
                 <div className="container new-container">
                   <PropertyListDescription
                     pre_title={pre_title}
                     title={title}
                     description={description}
                   />
                   <PropertyListRight/>
                 </div>
               </div>
             </div>
           </Fragment>
}

export default PropertyListDetails
