import React from 'react';

const InquireNow = () =>(
	  <section className="qs-wrap wow fadeInUp">
			<h2 className="aios-starter-theme-hide-title">Quick Search</h2>
			<div className="qs-container container">
				<div className="qs-form">
		      <div className="textwidget">
            <form action="/homes-for-sale-results/" method="GET">
              <div className="qs-form-label">
                <span>Inquire Now</span>
              </div>
              <div className="qs-property qs-field qs-field-long">
                <select title="Property type" name="propertyType">
                  <option value="">Property Type</option>
                </select>
              </div>
              <div className="qs-city qs-field qs-field-long">
                <select title="City" name="cityId[]">
                  <option value="">Select City</option>
                </select>
              </div>
              <div className="qs-searchbtn qs-field qs-field-btn">
                <input title="QS" type="submit" value="Search"/>
              </div>
              <div className="qs-advsearchbtn qs-field qs-field-btn">
                <a href="/homes-for-sale-search-advanced">Advanced</a>
              </div>
            </form>
          </div>
				</div>
			</div>
		  </section>
)
export default InquireNow;
