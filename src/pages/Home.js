import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import FeatureSet from '../components/FeatureSet';
import Banner from '../components/listing_list/Banner';
const Home = (props) => (
  <>
    <Banner
      banner_dir='https://res.cloudinary.com/kendev/image/upload/v1592384321/ortigas-properties/hero_images/greenhills_tie9rc.jpg'
      noMask
    />
    <FeatureSet />
  </>
  // <Fragment>
  //   <main>
  //     <Hero />
  //     <FeatureSet />
  //   </main>
  // </Fragment>
);

export default Home;
