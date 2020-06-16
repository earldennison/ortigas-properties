import React from 'react';
import styled from 'styled-components';

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export default Mask;
