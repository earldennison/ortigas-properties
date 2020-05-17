import React from 'react';

const ListingContent = ({ title, address1, address2, children }) => (
  <div className='col-md-8'>
    <div className='ip-ld-text'>
      <div className='ip-ld-title'>{title}</div>
      <div className='accent-line accent-red'>
        <i className='accent-line-dot' />
      </div>
      <div className='ip-ld-address'>
        <div className='address-holder-left'>
          <div className='address-holder'>
            {address1}
            <br />
            {address2}
            <div className='clearfix'></div>
          </div>
        </div>
      </div>
      <div className='ip-ld-p'>{children}</div>
    </div>
  </div>
);
export default ListingContent;
