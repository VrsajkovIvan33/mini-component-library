/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const SIZE_STYLES = {
    small: {
      "--height": "8px",
      "--border-radius": "4px",
      "--padding": "0px"
    },
    medium: {
      "--height": "12px",
      "--border-radius": "4px",
      "--padding": "0px"
    },
    large: {
      "--height": "24px",
      "--border-radius": "8px",
      "--padding": "4px"
    }
  }

  if (!["small", "medium", "large"].includes(size)) {
    size = "medium";
  }

  return (
    <BarWrapper style={SIZE_STYLES[size]}>
      <Bar value={value}></Bar>
    </BarWrapper>
  )
};

const BarWrapper = styled.div.attrs({
  "aria-hidden": true
})`
  width: 100%;
  height: var(--height);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  // Hide the edges of the progress bar when it reaches close to 100%
  overflow: hidden;

  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const Bar = styled.div.attrs((props) => ({
  "aria-valuenow": props.value >= 0 ? props.value <= 100 ? props.value : "100" : "0",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "role": "progressbar"
}))`
  height: 100%;
  width: ${p => p.value >= 0 ? p.value <= 100 ? p.value + "%" : "100%" : "0%"};

  background-color: ${COLORS.primary};

  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;

