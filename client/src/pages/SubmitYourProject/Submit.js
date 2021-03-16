import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { loader } from 'graphql.macro';

import ProjectForm from '../../components/Form/ProjectForm';
import Loader from '../../components/Loader/Loader';

import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import { Main, Overlay, Container } from './style';
const CREATE_PROJECT_MUTATION = loader('./mutationCreateProject.graphql');

function Submit() {
  const { currentUser: user, loading: currentUserLoading } = useCurrentUser();

  const [createProject] = useMutation(CREATE_PROJECT_MUTATION, {
    update(cache, { data: { createProject } }) {
      cache.modify({
        fields: {
          getMyProjects(existing = {}) {
            const projectCreated = cache.writeFragment({
              data: createProject,
              fragment: gql`
                fragment NewProject on Project {
                  id
                  title
                  preview
                  description
                  siteLink
                  repoLink
                  isApproved
                  likes {
                    id
                  }
                  favorites {
                    id
                  }
                  createdAt
                }
              `,
            });
            return {
              ...existing,
              results: [projectCreated, ...existing.results],
            };
          },
        },
      });
    },
  });

  if (currentUserLoading) {
    return <Loader />;
  }

  return (
    <Main>
      <Overlay>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>
          <ProjectForm
            onSubmit={(values) =>
              createProject({
                variables: {
                  input: {
                    authorId: user.id,
                    preview: values.preview,
                    title: values.title,
                    siteLink: values.siteLink,
                    repoLink: values.repoLink,
                    description: values.description,
                    tags: values.tags.map((e) => e.value),
                  },
                },
              })
            }
          />
        </Container>
      </Overlay>
    </Main>
  );
}

export default Submit;
