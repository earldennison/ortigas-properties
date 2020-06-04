import React from 'react';
import styled from 'styled-components';

const MaskContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  ${({ autoWidth }) => (autoWidth ? 'width: auto;' : 'width: 100%;')}
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const Mask = ({ children, autoWidth }) => {
  return <MaskContainer autoWidth={autoWidth}>{children}</MaskContainer>;
};

export default Mask;
