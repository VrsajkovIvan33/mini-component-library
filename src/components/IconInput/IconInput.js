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
  // return <TextInput />;
  return (
    <InputWrapper>
      <Underline />
      <IconWrapper>
        <Icon id="search" size={16} />
      </IconWrapper>
      <TextInput placeholder={placeholder} />
    </InputWrapper>
  )
};

const Underline = styled.div`
  height: 24px;
  background-color: transparent;
  border-bottom: 1px solid ${COLORS.black}
`

const IconWrapper = styled.div`
  position: absolute;

  height: 16px;
  width: 16px;

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

  &::placeholder {
      color: ${COLORS.gray500}
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

export default IconInput;
