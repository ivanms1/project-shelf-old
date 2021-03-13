import React from 'react';

import SearchWithYear from './SearchWithYear';
import SearchWithTags from './SearchWithTags';

import { Container } from './SearchContainerStyle';

const yearOptions = [
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
  { value: '2015', label: '2015' },
  { value: '2014', label: '2014' },
  { value: '2013', label: '2013' },
];

const frontend = [
  { value: '2021', label: 'React Js' },
  { value: '2015', label: 'Vue Js' },
  { value: '2014', label: 'Next Js' },
  { value: '2013', label: 'Laravel' },
];

const backend = [
  { value: '2020', label: 'Node Js' },
  { value: '2020', label: 'Express Js' },
];

const database = [
  { value: '2019', label: 'GraphQl' },
  { value: '2018', label: 'Postgres' },
  { value: '2017', label: 'MongoDb' },
  { value: '2016', label: 'PHP' },
];

const groupedOptions = [
  {
    label: 'Frontend',
    options: frontend,
  },
  {
    label: 'Backend',
    options: backend,
  },
  {
    label: 'Database',
    options: database,
  },
];

function Search() {
  return (
    <Container>
      <SearchWithTags options={groupedOptions} title='Tags' />
      <SearchWithYear options={yearOptions} title='Year' />
    </Container>
  );
}

export default Search;
