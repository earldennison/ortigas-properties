import React from 'react';
import Imperium from '../assets/images-theme/imageImperium.png';
import ClickBox from './feature_set/ClickBox';
import FeaturedProperties from './feature_set/FeaturedProperties';
import About from './About';
import FeaturedOffices from './feature_set/FeaturedOffices';
import { hero_images, glaston_images } from '../assets/images/';
const FeatureSet = () => {
  return (
    <div className='cta-fp'>
      <section className='cta-wrap'>
        <div className='textwidget'>
          <div className='cta-container container'>
            <div className='cta-row row'>
              <ClickBox
                link='/listing-list/residences'
                image={Imperium}
                line1={'Our'}
                line2={'Residences'}
              />

              <ClickBox
                link='/estates'
                image={hero_images[0]}
                line1={'Our'}
                line2={'Estates'}
              />

              <ClickBox
                link='/listing-list/offices'
                image={glaston_images[0]}
                line1={'Our'}
                line2={'Offices'}
              />

              <ClickBox
                image={hero_images[2]}
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
