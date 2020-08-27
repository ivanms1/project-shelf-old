import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Container, SearchContainer, CardContainer, Card, ImageContainer, Description } from './style';

import Preview from '../../assets/desktop-preview.jpg';
import Button from '../../components/Button/Button';
import Actives from '../../components/Active/Active';
import Spinner from '../../components/Spinner/Spinner';

const QUERY_WEEKLY_PROJECTS = loader('./queryGetProjects.graphql');

function redirect(path) {
    return (window.location.href = path);
}

function Weekly(props) {
    const [loadingState, setLoadingState] = useState(false);
    const { data, loading, error } = useQuery(QUERY_WEEKLY_PROJECTS);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return JSON.stringify(error, null, 2);
    }

    const { projects } = data;

    return (
        <div>
            <Header />

            <Container>
                <SearchContainer>
                    <p>
                        4th week project : 'MERN Stack' Submission
                    </p>

                    <select>
                        <option>MERN stack</option>
                        <option>API</option>
                        <option>Quiz App</option>
                    </select>
                </SearchContainer>

                <CardContainer>
                    {projects.length > 0 ?

                        <>
                            {projects.map(project => (
                                < Card key={project.id}>
                                    <Actives active={project.isApproved} />

                                    <ImageContainer>
                                        <img alt='preview' src={Preview}></img>
                                    </ImageContainer>

                                    <Description>
                                        <span>{project.title}</span>
                                        <p>
                                            <span className='first'>Link to the Repo </span>
                                            <span className='second'>: {project.repoLink}</span>
                                        </p>

                                        <p>
                                            <span className='first'>Live Link </span>
                                            <span className='second'>: {project.siteLink}</span>
                                        </p>

                                        <p>
                                            <span className='first'>Email </span>
                                            <span className='second'>: {project.author.email}</span>
                                        </p>

                                        <p>
                                            <span className='first'>Name </span>
                                            <span className='second'>
                                                : {project.author.name} {project.author.lastName}
                                            </span>
                                        </p>

                                        <p className='desc'>{project.description}</p>

                                        <Button
                                            onClick={() => {
                                                setLoadingState(true);
                                                redirect(project.repoLink);
                                            }}
                                            loading={loadingState}
                                            bgColor='#ED2C49'
                                            margin='20px 0 0 0'
                                        >Visit the repository</Button>
                                    </Description>

                                </Card>
                            ))}
                        </>
                        :
                        <p className='noproject'>no one has ever posted a project yet.</p>
                    }

                </CardContainer>
            </Container>

            <Footer />
        </div >
    );
}

export default Weekly;