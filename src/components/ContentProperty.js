import React from 'react';
import '../assets/css/property-article.css';
import ListingContent from './content_property/ListingContent';
import ListingSpecs from './content_property/ListingSpecs';
const ContentProperty = ({
  title,
  address1,
  address2,
  estate,
  type,
  update_status,
  children,
}) => (
  <article id='content' className='hfeed'>
    <div className='ip-listing-details-content'>
      <div className='container'>
        <div className='row'>
          <ListingContent title={title} address1={address1} address2={address2}>
            {children}
          </ListingContent>
          <ListingSpecs
            estate={estate}
            type={type}
            update_status={update_status}
          />
        </div>
      </div>
    </div>
  </article>
);
export default ContentProperty;
