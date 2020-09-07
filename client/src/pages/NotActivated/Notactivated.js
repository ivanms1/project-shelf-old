import React, { useState } from 'react';
import ReactToolTip from 'react-tooltip';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import Header from "../../components/Header/Header";
import Active from "../../components/Active/Active";
import Spinner from '../../components/Spinner/Spinner';

import { Container, ActivatedContainer, ProjectCollection, Card, HeaderCollection, Links, Name, Button } from "./style";

const QUERY_GET_ALL_PROJECTS = loader('./queryGetProjects.graphql');

const EMAIL_STRING = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=';

function Notactivated(props) {

    const [isActive, setIsActive] = useState(false);
    const { data, loading, error } = useQuery(QUERY_GET_ALL_PROJECTS);

    if (data) {

    }

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return JSON.stringify(error, null, 2);
    }

    //data takes time to load so destruct might give error when its not loaded
    const { projects } = data;
    console.log(projects);

    return (
        <Container>

            <Header />

            <ActivatedContainer>
                <main>
                    <p>
                        Not Approved Projects
                    </p>

                    <ProjectCollection>
                        {projects.length > 0 ?
                            projects.map(project => (
                                project.isApproved ?
                                    <p>No projects</p>
                                    :
                                    <Card key={project.id}>
                                        <HeaderCollection>
                                            <span>{project.title}</span>

                                            <div data-tip data-for='notActivated' >
                                                <Active active={isActive} />
                                            </div>

                                            <ReactToolTip className='notActivated' id='notActivated' >

                                                <span >Not Activated</span>
                                            </ReactToolTip>
                                        </HeaderCollection>

                                        <Links>
                                            <a href={project.siteLink}>Live Link</a>
                                            <a href={project.repoLink}>Repo Link</a>
                                            <a href={EMAIL_STRING + project.author.email} target="_blank">Contact</a>

                                        </Links>

                                        <div data-tip data-for={project.id} className='imgContainer'>
                                            <Zoom >
                                                <img src={project.preview} alt={project.preview} style={{ display: 'block' }} width='100%' height='100%'></img>
                                            </Zoom>

                                            <ReactToolTip id={project.id} type='error' aria-haspopup='true' role='example'>
                                                <span>{project.description}</span>
                                            </ReactToolTip>

                                        </div>

                                        <Name>
                                            <span>{project.author.name + ' ' + project.author.lastName}</span>
                                            {isActive ?
                                                <Button onClick={() => setIsActive(!isActive)}>Disapprove</Button>
                                                :
                                                <Button approve onClick={() => setIsActive(!isActive)}>Approve</Button>
                                            }

                                        </Name>
                                    </Card>
                            ))

                            :
                            <p>No projects</p>
                        }

                    </ProjectCollection>
                </main>
            </ActivatedContainer>

            {/* <Footer /> */}
        </Container >
    );
}

export default Notactivated;