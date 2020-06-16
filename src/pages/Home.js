import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import FeatureSet from '../components/FeatureSet';
import Banner from '../components/listing_list/Banner';
const Home = (props) => (
  <>
    <Banner banner_dir='assets/images/hero/greenhills.jpg' noMask />
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
