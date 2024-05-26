import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <TextValueWrapper>{displayedValue}</TextValueWrapper>
      <Icon id="chevron-down" size="24" strokeWidth="4"></Icon>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
    </SelectWrapper>
  );
};

const HiddenSelect = styled.select`
  // Cover the entire parent area
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  // Make the element invisible but still present (and responding to clicks)
  opacity: 0;
`;

const TextValueWrapper = styled.div`
  padding-right: 16px;
`;

const SelectWrapper = styled.div`
  // Make it a containing block
  position: relative;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  width: fit-content;
  padding: 12px 8px 12px 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
`;

export default Select;
