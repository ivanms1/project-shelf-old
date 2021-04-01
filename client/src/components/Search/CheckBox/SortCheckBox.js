import React, { useState } from 'react';

import { StyledCheckbox } from './style';

function SortCheckBox({ checked }) {
  const [check, setCheck] = useState(false);
  return (
    <StyledCheckbox
      onChange={() => {
        setCheck(!check);
        checked(!check);
      }}
    >
      <input type='checkbox' checked={check} readOnly />
      <label>Created Date</label>
    </StyledCheckbox>
  );
}

export default SortCheckBox;
