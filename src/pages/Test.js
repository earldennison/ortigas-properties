import React, { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import useWindowDimensions from '../components/utilities/useWindowDimensions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/react-slider.css';

import { imperium_images } from '../data/propertyData';

const SingleImageSection = ({ image }) => {
  return (
    <div>
      <img alt='' src={image} />
    </div>
  );
};
const Test = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Fragment>
      <Carousel autoplay showArrows showIndicators={false}>
        {imperium_images.map((path) => (
          <div>
            <img
              alt='none'
              src={path}
              style={{ height: height - 100, width: width }}
            />
          </div>
        ))}
      </Carousel>
    </Fragment>
  );
};
export default Test;
