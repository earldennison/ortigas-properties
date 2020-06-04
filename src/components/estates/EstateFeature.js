import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { hero_images } from '../../assets/images';
import '../../assets/css/estates-feature.css';
import styled from 'styled-components';
import Mask from '../Mask';

var row_style = {
  alignItems: 'center',
};
var itemStyle = {
  maxWidth: '45%',
};

const EstateFeatureItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  background: url(${({ src }) => src}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const H6 = styled.h6`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  line-height: 150%;
`;

const EstateFeatureItemInner = styled.div`
  position: absolute;
  top: 25%;
  ${({ right }) => (right ? 'right: 50px;' : 'left: 50px;')}
  transform: translateY(-50%);
  z-index: 3;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  ${({ right, color }) =>
    right
      ? `border-right: 2px solid ${color};`
      : `border-left: 2px solid ${color};`}
  color: #fff;
  font-family: Prata, serif;
  letter-spacing: 0.1em;
  line-height: 1;
  max-width: 300px;
`;

const EstateFeatureItem = ({
  link,
  image,
  pre_title,
  title,
  position,
  children,
  color,
  right,
}) => {
  console.log(position);
  return (
    <EstateFeatureItemContainer
      src={image}
      className='jarallax'
      data-jarallax='{"speed": 0.2}'
    >
      <Mask data-aos='fade-in' data-aos-delay='1000' />
      <EstateFeatureItemInner
        data-aos='fade-up'
        data-aos-delay='1200'
        right={right}
        color={color}
      >
        <h4
          className={right ? 'mr-4 mt-2 mb-0' : 'ml-4 mt-2 mb-0'}
          style={{ color: '#82848A' }}
          data-aos='fade-in'
          data-aos-delay='1400'
        >
          {pre_title}
        </h4>
        <h2
          className={right ? 'mr-4 mt-0 mb-2' : 'ml-4 mt-0 mb-2'}
          data-aos='fade-in'
          data-aos-delay='1600'
        >
          {title.split(' ').map((t) => (
            <>
              <span>{t}</span>
              <br />
            </>
          ))}
        </h2>
        <H6
          className={right ? 'mr-4' : 'ml-4'}
          data-aos='fade-in'
          data-aos-delay='1800'
        >
          {children}
        </H6>
        <Link
          to={link}
          class={
            right
              ? 'waves-effect waves-light btn-flat mr-4'
              : 'waves-effect waves-light btn-flat ml-4'
          }
          data-aos='fade-in'
          data-aos-delay='2000'
          data-aos-offset='-100'
          style={{ color }}
        >
          Learn More
        </Link>
      </EstateFeatureItemInner>
    </EstateFeatureItemContainer>

    // <div className='searchmls-cta row'>
    //   <div
    //     style={{
    //       display: 'flex',
    //     }}>
    //     {position === 'right' ? (
    //       <div className='estate-paragraph-container-right'>
    //         <p className='estate-paragraph-right'>{children}</p>
    //       </div>
    //     ) : undefined}
    //     <Link to={link} style={itemStyle}>
    //       <div className='searchmls-inner'>
    //         <div className='searchmls-cta-title'>
    //           <span>{pre_title} </span>
    //           {title}
    //         </div>
    //         <img alt='estate-image' src={image} />
    //       </div>
    //     </Link>

    //     {position === 'left' ? (
    //       <div className='estate-paragraph-container-right'>
    //         <p className='estate-paragraph-right'>{children}</p>
    //       </div>
    //     ) : undefined}
    //   </div>
    // </div>
  );
};

const EstateFeature = () => {
  let [greenhills, center, capitol, east, circulo] = hero_images;
  return (
    <>
      <EstateFeatureItem
        image={capitol}
        pre_title='The'
        title='Capitiol Commons'
        link='/listing-list/capitol-commons'
        color='#28c3d4'
        right
      >
        Capitol Commons is the new destination for luxury living.
      </EstateFeatureItem>
      <EstateFeatureItem
        image={center}
        pre_title='The'
        title='Ortigas Center'
        link='/listing-list/ortigas-center'
        color='#e53935'
      >
        Ortigas Center sets itself apaart as one of the most important central
        buisness districts (CBD) in Metro Manila
      </EstateFeatureItem>
      <EstateFeatureItem
        image={circulo}
        pre_title='The Sactuary'
        title='Circulo Verde'
        link='/listing-list/circulo-verde'
        color='#43a047'
        right
      >
        A suburban sanctuary in the city
      </EstateFeatureItem>
      <EstateFeatureItem
        image={east}
        pre_title='The new center'
        title='Ortigas East'
        link='/listing-list/ortigas-east'
        color='#4db6ac'
      >
        Ortigas East is Ortias Land's 16-hectare eco-estate along the C5
        corridor
      </EstateFeatureItem>
      <EstateFeatureItem
        image={greenhills}
        pre_title='A space reborn'
        title='Greenhills Center'
        link='/listing-list/greenhills'
        color='#fb8c00'
        right
      >
        Witness Greenhills Center's multi-billion redevelopment into a complete
        shop-play-work-live community
      </EstateFeatureItem>
    </>
  );
};

export default EstateFeature;
