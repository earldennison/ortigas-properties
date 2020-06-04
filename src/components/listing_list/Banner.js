import React from 'react';
import '../../assets/css/banner.css';
import styled from 'styled-components';
import Mask from '../Mask';

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  ${({ snap }) => (snap ? `scroll-snap-align: start` : '')};
  background: url(${({ src }) => src}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const DownButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

const Banner = ({ banner_dir, children, snap, noMask }) => (
  <BannerContainer
    src={banner_dir}
    className='jarallax'
    data-jarallax='{"speed": 0.2}'
    snap={snap}
  >
    {noMask ? null : (
      <>
        <Mask data-aos='fade-in' data-aos-delay='1000' />
        <a
          data-aos='fade-up'
          data-aos-delay='1600'
          data-aos-offset='-500'
          class='btn-floating waves-effect waves-light white btn-flat'
          style={{
            position: 'absolute',
            bottom: 50,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
          }}
        >
          <i class='fas fa-chevron-down text-dark'></i>
        </a>
      </>
    )}
    {children}
  </BannerContainer>
);

export default Banner;
