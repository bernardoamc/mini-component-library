/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    padding: 0,
    radius: 4,
  },
  medium: {
    padding: 0,
    radius: 4,
  },
  large: {
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unrecognized ProgressBar size: ${size}`);
  }

  value = Math.max(0, value);
  value = Math.min(value, 100);

  let Component;
  if (size === "small") {
    Component = ProgressBarSmall;
  } else if (size === "medium") {
    Component = ProgressBarMedium;
  } else if (size === "large") {
    Component = ProgressBarLarge;
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Component aria-hidden="true" value={value} style={{'--width': value + '%'}}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarBase = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: ${props => props.value/100 * 4 + "px"} ;
`;

const ProgressBarSmall = styled(ProgressBarBase)`
  height: 8px;
`;

const ProgressBarMedium = styled(ProgressBarBase)`
  height: 12px;
`;

const ProgressBarLarge = styled(ProgressBarBase)`
  height: 16px;
`;

export default ProgressBar;
