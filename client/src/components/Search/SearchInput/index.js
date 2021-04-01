import React from 'react';

import SearchWithYear from '../SearchWithYear';
import SortCheckBox from '../CheckBox/SortCheckBox';
import CategoryDropdown from '../CategoryDropdown';

import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

import { InputWrapper, StyledInput } from './style';

function index({
  SortOptions,
  options,
  inputValue,
  inputOnChange,
  dropDownValue,
  dropDownOnChange,
  sortDropDownOnChange,
  checked,
  type,
}) {
  return (
    <div style={{}}>
      <InputWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SearchIcon />
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',

          maxWidth: 600,
          margin: '10px auto',
        }}
      >
        <SearchWithYear
          onChange={sortDropDownOnChange}
          options={SortOptions}
          title='Sort Order'
        />
        <SortCheckBox checked={checked} />
      </div>
    </div>
  );
}

export default index;
