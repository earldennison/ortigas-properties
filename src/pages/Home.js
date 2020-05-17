import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import FeatureSet from '../components/FeatureSet';
const Home = (props) => (
  <Fragment>
    <main>
      <Hero />
      <FeatureSet />
    </main>
  </Fragment>
);

export default Home;
