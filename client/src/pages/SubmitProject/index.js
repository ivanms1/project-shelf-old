import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { loader } from 'graphql.macro';

import ProjectForm from '../../components/ProjectForm';
import SubmissionModal from '../../components/PopupModal/SubmissionModal';
import Loader from '../../components/Loader';

import useCurrentUser from '../../components/useCurrentUser';

import { Overlay, Container } from './style';

const CREATE_PROJECT_MUTATION = loader('./mutationCreateProject.graphql');

function SubmitProject() {
  const { currentUser: user, loading: currentUserLoading } = useCurrentUser();

  const [submitModelIsOpen, setSubmitModelIsOpen] = useState(false);
  const openSubmitModal = () => setSubmitModelIsOpen(true);
  const closeSubmitModal = () => setSubmitModelIsOpen(false);

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

  async function submitTheProject(values) {
    const res = await createProject({
      variables: {
        input: {
          preview: values.preview,
          title: values.title,
          siteLink: values.siteLink,
          repoLink: values.repoLink,
          description: values.description,
          tags: values.tags.map((e) => e.value),
        },
      },
    });
    if (res?.data) {
      openSubmitModal();
    }
  }

  return (
    <Overlay>
      <Container>
        <p>
          <span>ShowCase them </span>
          <span>so that people can learn from each other.</span>
        </p>
        <ProjectForm
          onSubmit={(values) => {
            submitTheProject(values);
          }}
        />

        <SubmissionModal
          isOpen={submitModelIsOpen}
          onRequestClose={closeSubmitModal}
        />
      </Container>
    </Overlay>
  );
}

export default SubmitProject;
