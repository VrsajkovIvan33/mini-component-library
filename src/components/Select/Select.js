import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <InvisibleNativeSelect value={value} onChange={onChange}>
        {children}
      </InvisibleNativeSelect>
      <CustomSelect>
        <TextValueWrapper>{displayedValue}</TextValueWrapper>
        <Icon id="chevron-down" size="24" strokeWidth="4"></Icon>
      </CustomSelect>
    </SelectWrapper>
  );
};

const InvisibleNativeSelect = styled.select`
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
  font-size: ${16 / 16}rem;
`;

const SelectWrapper = styled.div`
  // Make it a containing block
  position: relative;
  width: fit-content;
`;

const CustomSelect = styled.div`
  display: flex;
  align-items: center;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  padding: 12px 8px 12px 16px;
  border-radius: 8px;

  ${InvisibleNativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${InvisibleNativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
