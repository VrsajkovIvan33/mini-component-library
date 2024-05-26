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
      borderWidth: 1,
      iconSize: 16,
      iconStrokeWidth: 1,
      totalHeight: 24,
      fontSize: 14,
      lineHeight: 16,
      padding: 4,
      iconTextSpacing: 8,
    },
    large: {
      borderWidth: 2,
      iconSize: 24,
      iconStrokeWidth: 2,
      totalHeight: 36,
      fontSize: 18,
      lineHeight: 21,
      padding: 6,
      iconTextSpacing: 12,
    }
  }

  const sizeStyle = SIZE_STYLES[size];

  if (!sizeStyle) {
    throw new Error(`Size not supported: ${size}`);
  }

  return (
    <InputWrapper style={{
      "--height": sizeStyle.totalHeight + "px",
      "--width": width + "px",
      "--border-width": sizeStyle.borderWidth + "px"
    }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--icon-size": sizeStyle.iconSize + "px" }}>
        <Icon id={icon} size={sizeStyle.iconSize} strokeWidth={sizeStyle.iconStrokeWidth} />
      </IconWrapper>
      <TextInput placeholder={placeholder} style={{
        "--padding": (sizeStyle.padding + "px ").repeat(3) + (sizeStyle.iconSize + sizeStyle.iconTextSpacing) + "px",
        "--font-size": (sizeStyle.fontSize / 16) + "rem",
      }}
      />
    </InputWrapper>
  )
};

const IconWrapper = styled.div`
  position: absolute;

  height: var(--icon-size);

  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const TextInput = styled.input.attrs({
  type: "text"
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: var(--padding);

  border: none;

  background-color: transparent;
  color: ${COLORS.gray700};

  font-weight: 700;
  font-size: var(--font-size);

  &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
  }
`;

const InputWrapper = styled.div`
  position: relative;

  height: var(--height);
  width: var(--width);

  border-bottom: var(--border-width) solid ${COLORS.black}
`;

export default IconInput;
