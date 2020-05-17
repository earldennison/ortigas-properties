import React from 'react';
import '../../assets/css/banner.css';
import styled from 'styled-components';

const Banner = styled.div`
  width: 100%;
  height: 70vh;
  background: url(${({ banner_dir }) => banner_dir}) no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export default Banner;
