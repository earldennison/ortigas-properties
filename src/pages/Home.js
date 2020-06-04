import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import FeatureSet from '../components/FeatureSet';
import Banner from '../components/listing_list/Banner';
import { hero_images } from '../assets/images/';
let [greenhills] = hero_images;
const Home = (props) => (
  <>
    <Banner banner_dir={greenhills} noMask />
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
