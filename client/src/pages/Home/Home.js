import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Approval, CardContainer, Card, ImageContainer, Description } from './style';
import Preview from '../../assets/desktop-preview.jpg';
import Button from "../../components/Button/Button";
import Active from "../../components/Active/Active";

function Home(props) {
    return (
        <div>
            <Header />

            <Container>
                <Approval>
                    <p>
                        Your Projects
                    </p>
                    <div>
                        <p>
                            <Active />

                        </p>
                        <span className='text'>Not Approved yet</span>
                        <p>
                            <Active active={true} />
                        </p>
                        <span className='text'>Approved</span>
                    </div>
                </Approval>
                <CardContainer>
                    <Card>
                        <Active />

                        <ImageContainer>
                            <img alt='preview' src={Preview}></img>
                        </ImageContainer>

                        <Description>
                            <span>Recipe App</span>
                            <p>
                                <span className='first'>Live Link </span>
                                <span className='second'>: Live link here</span>
                            </p>

                            <p>
                                <span className='first'>Contributors Name </span>
                                <span className='second'>: John, Smigal</span>
                            </p>

                            <p>
                                <span className='first'>Weekly Category </span>
                                <span className='second'>: 4th weekly project</span>
                            </p>

                            <p>
                                <span className='first'>Discord Name </span>
                                <span className='second'>: Uzamaki21</span>
                            </p>

                            <p className='desc'>
                                eg : this was built using MERN stacks. Used cloudaniary for image hosting. Used netlify for hosting in the live server.
                            </p>

                            <Button bgColor='#ED2C49' margin='20px 0 0 0'>Visit the repository</Button>
                        </Description>
                    </Card>

                    <Card>
                        <Active active={true} />

                        <ImageContainer>
                            <img alt='preview' src={Preview}></img>
                        </ImageContainer>

                        <Description>
                            <span>Recipe App</span>
                            <p>
                                <span className='first'>Live Link </span>
                                <span className='second'>: Live link here</span>
                            </p>

                            <p>
                                <span className='first'>Contributors Name </span>
                                <span className='second'>: John, Smigal</span>
                            </p>

                            <p>
                                <span className='first'>Weekly Category </span>
                                <span className='second'>: 4th weekly project</span>
                            </p>

                            <p>
                                <span className='first'>Discord Name </span>
                                <span className='second'>: Uzamaki21</span>
                            </p>

                            <p className='desc'>
                                eg : this was built using MERN stacks. Used cloudaniary for image hosting. Used netlify for hosting in the live server.
                            </p>

                            <Button bgColor='#ED2C49' margin='20px 0 0 0'>Visit the repository</Button>
                        </Description>

                    </Card>
                </CardContainer>
            </Container>

            <Footer />
        </div>
    );
}

export default Home;