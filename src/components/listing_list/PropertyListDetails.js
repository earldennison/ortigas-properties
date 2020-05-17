import React, { Fragment } from 'react';
import '../../assets/css/property-list.css';

const PropertyListDescription = ({
  title,
  pre_title,
  description,
  list_right,
}) => {
  return (
    <div
      // className='ip-prop-s1-left ip-title-wrap ip-title-left'
      style={!list_right ? { width: '100%' } : ''}>
      <div
        data-aos='fade-up'
        data-aos-delay='50'
        className='ip-title p-2'
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          textTransform: 'uppercase',
          fontWeight: '400',
          letterSpacing: '.034em',
          color: '#456f5c',
          lineHeight: '1',
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          marginTop: '80px',
        }}>
        <div className='hide-on-small-only m-0'>
          <span style={{ fontSize: '20px' }}>{pre_title}</span>
        </div>

        <h1 className='hide-on-small-only m-0'>{title}</h1>

        <div className='hide-on-med-and-up m-0 d-inline-block'>
          <span style={{ fontSize: '20px' }}>{pre_title}</span>
        </div>

        <h3 className='hide-on-med-and-up m-0 d-inline-block'>{title}</h3>
      </div>
      {/* <div className='accent-line accent-red'>
        <i className='accent-line-dot'></i>
      </div> */}
      <p
        data-aos='fade-up'
        data-aos-delay='200'
        style={{
          fontSize: 20,
          marginTop: 40,
        }}>
        {description}
      </p>
    </div>
  );
};

const PropertyListRight = ({ first, second }) => (
  <div className='ip-prop-s1-right'>
    <div className='ip-prop-refine-search-wrapper'>
      <div className='ip-prop-refine-search'>
        <h2 className='section-title'>
          <span>{first}</span> {second}
        </h2>
        <div className='ip-prop-refine-search-form'>
          <form className='our-properties-form' action=''>
            <div className='ip-prop-rs-field'>
              <label>Price</label>
              <div className='custom-select'>
                <div className='custom-selected'>All</div>
                <div className='custom-select-list'>
                  <div
                    className='custom-select-list-option'
                    data-url='all'
                    data-value='all'>
                    All
                  </div>
                </div>
              </div>
            </div>
            <button type='submit' className='btn-a'>
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
const PropertyListDetails = ({ pre_title, title, description, list_right }) => {
  return (
    <Fragment>
      <div className='ip-properties-wrap'>
        <div className='ip-prop-section ip-prop-section-1'>
          <div className='container new-container'>
            <PropertyListDescription
              pre_title={pre_title}
              title={title}
              description={description}
            />
            {list_right && <PropertyListRight />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PropertyListDetails;
