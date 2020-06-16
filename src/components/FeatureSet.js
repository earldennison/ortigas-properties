import React from 'react';
import ClickBox from './feature_set/ClickBox';
import FeaturedProperties from './feature_set/FeaturedProperties';
import About from './About';
import FeaturedOffices from './feature_set/FeaturedOffices';
const FeatureSet = () => {
  return (
    <div className='cta-fp'>
      <section className='cta-wrap'>
        <div className='textwidget'>
          <div className='cta-container container'>
            <div className='cta-row row'>
              <ClickBox
                link='/listing-list/residences'
                image='assets/images-theme/imageImperium.png'
                line1={'Our'}
                line2={'Residences'}
              />

              <ClickBox
                link='/estates'
                image='assets/images/hero/capitol.jpg'
                line1={'Our'}
                line2={'Estates'}
              />

              <ClickBox
                link='/listing-list/offices'
                image='assets/images/glaston/Glaston_01_large.jpg'
                line1={'Our'}
                line2={'Offices'}
              />

              <ClickBox
                image='assets/images/hero/center.jpg'
                line1={'News'}
                line2={'Updates'}
              />
            </div>
          </div>
        </div>
      </section>
      <FeaturedProperties />
      <About />
      <FeaturedOffices />
    </div>
  );
};

export default FeatureSet;
