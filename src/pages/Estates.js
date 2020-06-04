import React, { Fragment } from 'react';
import PropertySlider from '../components/PropertySlider.js';
import ContentProperty from '../components/ContentProperty.js';

import Banner from '../components/listing_list/Banner';
import imperiumBanner from '../assets/images/banners/Imperium_Banner021.jpg';
import PropertyListDetails from '../components/listing_list/PropertyListDetails';
import PropertyListDisplay from '../components/listing_list/PropertyListDisplay.js';
import propertyData from '../data/propertyData';
import EstateFeature from '../components/estates/EstateFeature.js';

import styled from 'styled-components';

const EstatesContainer = styled.section`
  height: 100vh;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
`;

const Estates = () => (
  <>
    <Banner banner_dir={imperiumBanner} snap>
      <PropertyListDetails
        pre_title='Our'
        title='estates'
        description=' We have been building traditions, creating indelible experiences, and developing new inspirations for living '
      />
    </Banner>
    <EstateFeature />
  </>
);
export default Estates;
