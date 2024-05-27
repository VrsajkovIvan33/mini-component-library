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
  const SIZE_STYLES = {
    small: {
      borderThickness: 1,
      iconSize: 16,
      iconStrokeWidth: 1,
      height: 24,
      fontSize: 14
    },
    large: {
      borderThickness: 2,
      iconSize: 24,
      iconStrokeWidth: 2,
      height: 36,
      fontSize: 18
    }
  }

  const sizeStyle = SIZE_STYLES[size];

  if (!sizeStyle) {
    throw new Error(`Size not supported: ${size}`);
  }

  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--icon-size": sizeStyle.iconSize + "px" }}>
        <Icon id={icon} size={sizeStyle.iconSize} strokeWidth={sizeStyle.iconStrokeWidth} />
      </IconWrapper>
      <TextInput placeholder={placeholder} style={{
        "--font-size": (sizeStyle.fontSize / 16) + "rem",
        "--height": (sizeStyle.height / 16) + "rem",
        "--width": width + "px",
        "--border-thickness": sizeStyle.borderThickness + "px"
      }}
      />
    </InputWrapper>
  )
};

const IconWrapper = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  height: var(--icon-size);

  pointer-events: none;
`;

const TextInput = styled.input.attrs({
  type: "text"
})`
  padding-left: var(--height);

  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  color: inherit;

  height: var(--height);
  width: var(--width);

  font-weight: 700;
  font-size: var(--font-size);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const InputWrapper = styled.div`
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
