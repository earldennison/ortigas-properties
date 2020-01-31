import React from 'react';
import Imperium from '../assets/images-theme/imageImperium.png'
import ClickBox from './feature_set/ClickBox'
import FeaturedProperties from './feature_set/FeaturedProperties'
import About from './About'
import FeaturedOffices from './feature_set/FeaturedOffices'

const FeatureSet = () => (
	  <div className="cta-fp">
      <section className="cta-wrap">
        <div className="textwidget">
          <div className="cta-container container">
            <div className="cta-row row">

              <ClickBox image={Imperium}/>
            </div>
          </div>
        </div>
      </section>
      <FeaturedProperties/>
      <About />
      <FeaturedOffices/>


    </div>
)

export default FeatureSet;
