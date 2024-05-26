import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <ContainingBlockWrapper>
      <SelectWrapper>
        {displayedValue}
        <Icon id="chevron-down" style={{ display: "inline-block" }}></Icon>
      </SelectWrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
    </ContainingBlockWrapper>
  );
};

const ContainingBlockWrapper = styled.div`
  position: relative;
`;

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

const SelectWrapper = styled.div`

`;

export default Select;
