/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  // return <strong>{value}</strong>;

  return (
    <BarWrapper>
      <Bar value={value}></Bar>
    </BarWrapper>
  )
};

const BarWrapper = styled.div`
  width: 370px;
  height: 12px;

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  height: 100%;
  width: ${p => p.value >= 0 ? p.value <= 100 ? p.value + "%" : "100%" : "0%"};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;

