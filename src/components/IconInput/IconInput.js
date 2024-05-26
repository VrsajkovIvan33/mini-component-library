import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <InputWrapper style={{ "--width": width + "px" }}>
      <IconWrapper>
        <Icon id={icon} size={16} />
      </IconWrapper>
      <TextInput placeholder={placeholder} />
    </InputWrapper>
  )
};

const IconWrapper = styled.div`
  position: absolute;

  height: 16px;

  top: 4px;
  bottom: 4px;
  left: 0;
`;

const TextInput = styled.input.attrs({
  type: "text"
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 4px 4px 4px 24px;

  border: none;

  background-color: transparent;
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
  }
`;

const InputWrapper = styled.div`
  position: relative;

  height: 24px;
  width: var(--width);

  border-bottom: 1px solid ${COLORS.black}
`;

export default IconInput;
