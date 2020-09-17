import React from 'react';
import ReactToolTip from 'react-tooltip';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useQuery, useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import Header from '../../components/Header/Header';
import Active from '../../components/Active/Active';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';

import {
  Container,
  ActivatedContainer,
  ProjectCollection,
  Card,
  HeaderCollection,
  Links,
  Name,
} from './style';

const QUERY_GET_ALL_PROJECTS = loader('./queryGetProjects.graphql');
const MUTATION_UPDATE_PROJECT_STATUS = loader(
  './mutationUpdateProjectStatus.graphql'
);

const EMAIL_STRING = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=';

function Activated(props) {
  const { data, loading, error } = useQuery(QUERY_GET_ALL_PROJECTS);

  const [
    updateStatus,
    { data: dataR, error: errorR, loading: loadingR },
  ] = useMutation(MUTATION_UPDATE_PROJECT_STATUS);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return JSON.stringify(error, null, 2);
  }

  async function updateProjectStatus(projectId) {
    try {
      const response = await updateStatus({
        variables: {
          projectId: projectId,
          isApproved: false,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  //data takes time to load so destruct might give error when its not loaded
  const { projects } = data;

  return (
    <Container>
      <Header />
      <ActivatedContainer>
        <main>
          <p>Approved Projects</p>

          <ProjectCollection>
            <ProjectCollection>
              {projects.length > 0 ? (
                projects.map(
                  (project) =>
                    project.isApproved === true && (
                      <Card key={project.id}>
                        <HeaderCollection>
                          <span>{project.title}</span>

                          <div data-tip data-for='notActivated'>
                            <Active active={project.isApproved} />
                          </div>

                          <ReactToolTip
                            className='notActivated'
                            id='notActivated'
                          >
                            <span>Activated</span>
                          </ReactToolTip>
                        </HeaderCollection>

                        <Links>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={project.siteLink}
                          >
                            Live Link
                          </a>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={project.repoLink}
                          >
                            Repo Link
                          </a>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={EMAIL_STRING + project.author.email}
                          >
                            Contact
                          </a>
                        </Links>

                        <div
                          data-tip
                          data-for={project.id}
                          className='imgContainer'
                        >
                          <Zoom>
                            <img
                              src={project.preview}
                              alt={project.preview}
                              style={{ display: 'block' }}
                              width='100%'
                              height='100%'
                            ></img>
                          </Zoom>

                          <ReactToolTip
                            className='description'
                            id={project.id}
                            multiline={true}
                            type='error'
                            aria-haspopup='true'
                            role='example'
                          >
                            <span>{project.description}</span>
                          </ReactToolTip>
                        </div>

                        <Name>
                          <span>
                            {project.author.name +
                              ' ' +
                              project.author.lastName}
                          </span>

                          <Button
                            kind='disapprove'
                            size='medium'
                            disapprove
                            onClick={() => updateProjectStatus(project.id)}
                          >
                            Disapprove
                          </Button>
                        </Name>
                      </Card>
                    )
                )
              ) : (
                <p>No projects</p>
              )}
            </ProjectCollection>
          </ProjectCollection>
        </main>
      </ActivatedContainer>
    </Container>
  );
}

export default Activated;
