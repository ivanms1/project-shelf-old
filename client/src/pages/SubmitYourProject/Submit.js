import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, FormContainer, Card, Active, Color, ImageContainer, Description, Submission, Collection, InputContainer, Input, Upload, TextArea } from './style';
import Preview from '../../assets/desktop-preview.jpg';
import Button from '../../components/Button/Button';

function style(props) {
    return (
        <div>
            <Header />
            <div style={{ backgroundColor: '#F7F8FC' }}>

                <Container>
                    <p>
                        <span>ShowCase them </span>
                        <span>so that people can learn from each other.</span>
                    </p>

                    <FormContainer>

                        <Card>
                            <Active>
                                <Color />
                            </Active>
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

                        <Submission>
                            <span>Submit your Project</span>

                            <InputContainer>
                                <label>Upload</label>
                                <Upload type='file' placeholder='Title of the Project' />
                            </InputContainer>
                            <InputContainer>
                                <label>Title of the Project</label>
                                <Input placeholder='Title of the Project' />
                            </InputContainer>

                            <InputContainer>
                                <label>Link to the repository</label>
                                <Input placeholder='Link to the repository' />
                            </InputContainer>

                            <InputContainer>
                                <label>Link to the live site</label>
                                <Input placeholder='Link to the live site' />
                            </InputContainer>

                            <InputContainer>
                                <label>Contributors Name</label>
                                <Input placeholder='Contributors Name' />
                            </InputContainer>

                            <Collection>
                                <InputContainer>
                                    <label>Weekly Category</label>
                                    <Input placeholder='MERN stack' />
                                </InputContainer>

                                <InputContainer>
                                    <label>Time Taken</label>
                                    <Input placeholder='eg : 1 month' />
                                </InputContainer>
                            </Collection>

                            <InputContainer>
                                <label>Email address</label>
                                <Input placeholder='eg : a@gmail.com' />
                            </InputContainer>

                            <InputContainer>
                                <label>Description of the project in 30 words</label>
                                <TextArea placeholder='eg : this was built using MERN stacks. Used cloudaniary for image hosting. Used netlify for hosting in the live server.' />
                            </InputContainer>

                            <Button bgColor='#00CB5B' margin='20px 0 0 0'>Submit your Project</Button>
                        </Submission>
                    </FormContainer>

                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default style;