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
                image='https://res.cloudinary.com/kendev/image/upload/v1592384414/ortigas-properties/imperium_images/Imperium01_large_cfrnbj.jpg'
                line1={'Our'}
                line2={'Residences'}
              />

              <ClickBox
                link='/estates'
                image='https://res.cloudinary.com/kendev/image/upload/v1592384321/ortigas-properties/hero_images/capitol_rvwylq.jpg'
                line1={'Our'}
                line2={'Estates'}
              />

              <ClickBox
                link='/listing-list/offices'
                image='https://res.cloudinary.com/kendev/image/upload/v1592385529/ortigas-properties/glaston_images/Glaston_01_large_b0lhsp.jpg'
                line1={'Our'}
                line2={'Offices'}
              />

              <ClickBox
                image='https://res.cloudinary.com/kendev/image/upload/v1592384321/ortigas-properties/hero_images/center_usgvoh.jpg'
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
