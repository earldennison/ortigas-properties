import React from 'react';
import TitleLine from './TitleLine';
import { Link } from 'react-router-dom';

const FeatPropItem = (props) => {
  const { image, link, width, estate, propertyName, updateStatus } = props;
  return (
    <div
      className='featprop-item'
      style={{
        width: width ? width : 290,
        display: 'block',
        float: 'left',
        height: '100%',
        minHeight: '1px',
      }}>
      <div className='featprop-item-wrap'>
        <Link className='featprop-link' to={link}>
          <div className='featprop-item-main'>
            <div
              className='featprop-img'
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className='featprop-overlay'>
              <div className='featprop-overlay-border'>
                <div className='featprop-center-item'>
                  <span className='featprop-price'>{propertyName}</span>
                  <span className='featprop-address'>{estate}</span>
                  <span className='fp-bedsbaths'>{updateStatus}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const FeaturedWrapper = (props) => {
  return (
    <section className='featprop-wrap'>
      <div className='textwidget custom-html-widget'>
        <TitleLine first='Featured' second='Properties' />
        <div className='featprop-container container wow fadeInRight'>
          <div className='featprop-slick-wrap'>
            <div
              className='featprop-holder'
              style={{
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',
              }}>
              <FeatPropItem
                link='/properties/galleon'
                propertyName='The Galleon'
                estate='Ortigas Center'
                updateStatus='Pre-Selling'
                image='https://res.cloudinary.com/kendev/image/upload/v1592384760/ortigas-properties/galleon_images/Galleon_05_og3ce4.jpg'
              />
              <FeatPropItem
                link='/properties/imperium'
                propertyName='The Imperium'
                estate='Capitol Commons'
                updateStatus='Pre-Selling'
                image='https://res.cloudinary.com/kendev/image/upload/v1592384413/ortigas-properties/imperium_images/Imperium07_large_kivect.jpg'
              />

              <FeatPropItem
                link='/properties/connor'
                propertyName='Connor'
                estate='Greenhills Center'
                image='https://res.cloudinary.com/kendev/image/upload/v1592385590/ortigas-properties/connor_images/Connor_04_large_trijhz.jpg'
              />
              <FeatPropItem
                link='/properties/royalton'
                propertyName='Royalton'
                estate='Capitiol Commons'
                updateStatus='Turnover'
                image='https://res.cloudinary.com/kendev/image/upload/v1592385031/ortigas-properties/royalton_images/Royalton_01_large_cfs37f.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWrapper;
