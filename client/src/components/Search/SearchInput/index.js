import React from 'react';

import CategoryDropdown from '../CategoryDropdown';

import { ReactComponent as Search } from '../../../assets/search.svg';

import { InputWrapper, StyledInput } from './style';

function index({
  options,
  inputValue,
  inputOnChange,
  dropDownValue,
  dropDownOnChange,
  type,
}) {
  return (
    <InputWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Search />
      </div>

      <StyledInput
        value={inputValue}
        onChange={inputOnChange}
        type={type}
        placeholder='Search'
      />
      <CategoryDropdown
        value={dropDownValue}
        onChange={dropDownOnChange}
        isSearchable={false}
        options={options}
        defaultValue={options[0]}
      />
    </InputWrapper>
  );
}

export default index;
