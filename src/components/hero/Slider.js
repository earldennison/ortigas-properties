import React from 'react';
import useWindowDimensions from '../utilities/useWindowDimensions.js';
import { hero_images } from '../../data/propertyData';

const SingleSlide = (props) => {
  const { image, alt, title, height, width } = props;
  return (
    <div className='cycloneslider-slide cycloneslider-image'>
      <img
        src={image}
        alt={alt ? alt : ''}
        title={title ? title : ''}
        style={{ width: width, height: height }}
      />
    </div>
  );
};
const Slider = () => {
  const { height, width } = useWindowDimensions();
  const pixadd = 110;
  let mobile = width < height ? width : height + pixadd;
  return (
    <section className='slideshow-wrap'>
      <div className='slideshow-container'>
        <div className='textwidget'>
          <div
            tabindex='0'
            className='cycloneslider cycloneslider-template-responsive-img cycloneslider-slideshow-1'
            id='cycloneslider-slideshow-1'
            style={{ maxWidth: width, maxHeight: height + pixadd }}>
            <div
              className='cycloneslider-slides cycle-slideshow'
              data-cycle-allow-wrap='true'
              data-cycle-dynamic-height='off'
              data-cycle-auto-height='2181:1370'
              data-cycle-auto-height-easing='null'
              data-cycle-auto-height-speed='250'
              data-cycle-delay='0'
              data-cycle-easing=''
              data-cycle-fx='fade'
              data-cycle-hide-non-active='true'
              data-cycle-log='false'
              data-cycle-next='#cycloneslider-slideshow-1 .cycloneslider-next'
              data-cycle-pager='#cycloneslider-slideshow-1 .cycloneslider-pager'
              data-cycle-pause-on-hover='false'
              data-cycle-prev='#cycloneslider-slideshow-1 .cycloneslider-prev'
              data-cycle-slides='&gt; div'
              data-cycle-speed='1000'
              data-cycle-swipe='true'
              data-cycle-tile-count='7'
              data-cycle-tile-delay='100'
              data-cycle-tile-vertical='true'
              data-cycle-timeout='6000'>
              {hero_images.map((path) => (
                <SingleSlide image={path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slider;
