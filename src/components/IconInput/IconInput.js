import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    border: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    border: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const default_styles = STYLES[size];

  if (!default_styles) {
    throw new Error(`Unrecognized IconInput size: ${size}`);
  }

  const icon_styles = {
    size: default_styles.iconSize,
    '--size': default_styles.iconSize + 'px',
  }

  const input_styles = {
    '--width': width + 'px',
    '--height': default_styles.height + 'px',
    '--border-thickness': default_styles.border + 'px',
    '--font-size': default_styles.fontSize / 16 + 'rem',
  }

  return (
    <Wrapper aria-label={label}>
      <IconWrapper style={icon_styles} aria-hidden="true">
        <Icon id={icon} size={icon_styles.size} />
      </IconWrapper>
      <Input placeholder={placeholder} style={input_styles}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
