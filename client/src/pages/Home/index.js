import React, { useState, useRef } from 'react';
import { debounce } from 'lodash';
import { useQuery, NetworkStatus } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Waypoint } from 'react-waypoint';

import Cardtwo from '../../components/Cardv2';
import Search from '../../components/Search';
import SearchInput from '../../components/Search/SearchInput';

import Spinner from '../../components/Spinner';
import Loader from '../../components/Loader';

import { Container, CardContainer } from './style';

const QUERY_WEEKLY_PROJECTS = loader('./queryGetProjects.graphql');

const CategoryOptions = [
  { value: 'title', label: 'Title' },
  { value: 'description', label: 'Description' },
];

function Home() {
  const [sortBy, setSortBy] = useState({ field: 'createdAt', value: 'desc' });

  const [filterBy, setFilterBy] = useState({
    field: CategoryOptions[0].value,
    value: '',
  });
  const debounceSave = useRef(
    debounce((nextValue) => setFilterBy({ ...filterBy, value: nextValue }), 200)
  ).current;

  const handleChange = (e) => {
    const { value: nextValue } = e.target;
    // setInputValue(nextValue);
    debounceSave(nextValue);
  };

  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    QUERY_WEEKLY_PROJECTS,
    {
      variables: {
        cursor: undefined,
        modifiers: {
          sortBy: sortBy?.field && sortBy?.value ? sortBy : undefined,
          filterBy:
            filterBy?.field && (filterBy.value || filterBy.value === '')
              ? filterBy
              : undefined,
        },
      },
      notifyOnNetworkStatusChange: true,
      pollInterval: 1000,
    }
  );

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  const onRefetch = () => {
    if (!data?.projects?.nextCursor) {
      return;
    }

    fetchMore({
      variables: {
        cursor: data?.projects?.nextCursor,
        modifiers: {
          sortBy,
          filterBy,
        },
      },
    });
  };
  return (
    <Container>
      {/* <p>Welcome! Here are some recently submitted projects</p> */}
      <div style={{ margin: '30px 0 80px 0' }}>
        <SearchInput
          options={CategoryOptions}
          inputValue={filterBy?.value}
          inputOnChange={(e) => {
            handleChange(e);
            // setFilterBy({ ...filterBy, value: e.target.value });
          }}
          dropDownValue={filterBy?.field}
          dropDownOnChange={(e) =>
            setFilterBy({ ...filterBy, field: e?.value })
          }
          type='text'
        />
      </div>
      {/* <Search /> */}
      {/* 
      <div style={{ display: 'flex' }}>
        <div>
          <span>Search by:</span>
          <select
            value={filterBy?.field}
            onChange={(e) =>
              setFilterBy({ ...filterBy, field: e.target.value })
            }
          >
            <option value='title'>Title</option>
            <option value='description'>Description</option>
            <option value='tags'>Tags</option>
          </select>
        </div>
        <input
          value={filterBy?.value}
          onChange={(e) => setFilterBy({ ...filterBy, value: e.target.value })}
          type='text'
        />
      </div> */}
      {/* <div style={{ display: 'flex' }}>
        <div>
          <span>sort by:</span>
          <select
            value={sortBy?.field}
            onChange={(e) => setSortBy({ ...sortBy, field: e.target.value })}
          >
            <option value='title'>title</option>
            <option value='createdAt'>date</option>
          </select>
        </div>
        <div>
          <span>sort order:</span>
          <select
            value={sortBy?.value}
            onChange={(e) => setSortBy({ ...sortBy, value: e.target.value })}
          >
            <option value='asc'>asc</option>
            <option value='desc'>desc</option>
          </select>
        </div>
      </div> */}
      <CardContainer>
        {networkStatus === NetworkStatus.setVariables ||
        networkStatus === NetworkStatus.refetch ||
        !data?.projects?.results?.length ? (
          <p className='noproject'>No projects are currently live</p>
        ) : (
          <>
            {data?.projects?.results.map((project) => (
              <Cardtwo key={project.id} project={project} />
            ))}
          </>
        )}
      </CardContainer>
      {!loading && data?.projects?.nextCursor && (
        <Waypoint onEnter={onRefetch} bottomOffset='-20%' />
      )}
      {loading && data?.projects?.nextCursor && (
        <Spinner padding={20} type='black' />
      )}
    </Container>
  );
}

export default Home;
