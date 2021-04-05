import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <OriginalSelect value={value} onChange={onChange}>
        {children}
      </OriginalSelect>
      <SelectUI>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </SelectUI>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const OriginalSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectUI = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  ${OriginalSelect}:focus + & {
    outline: 1px solid blue;
  }
  ${OriginalSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: 24px;
  height: 24px;
  margin: auto;

  /*
    The pointer-events CSS property sets under what circumstances (if any) a
    particular graphic element can become the target of pointer events.
  */
  pointer-events: none;
`;

export default Select;
