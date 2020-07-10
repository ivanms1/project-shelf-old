import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, TextContainer, LowerContainer, RegisterBox, Collection, InputContainer, Input, Discord, TextArea, SignInButton } from './style';
import Kathmandu from '../../assets/kathmandu.svg';

function Contact(props) {
    return (
        <div>
            <Header />
            <Container>
                <TextContainer>
                    <p>
                        <span>Get in</span>
                        <span> touch with us.</span>
                    </p>

                    <p>
                        Please drop us your Discord name, number or email, and a brief note about your project.
                    </p>

                    <p>
                        We’ll get right back to you.
                    </p>
                </TextContainer>

                <LowerContainer>
                    <div >
                        <img alt='kathmandu' src={Kathmandu}></img>
                        <div ></div>
                    </div>

                    <form>
                        <RegisterBox>

                            <Collection>
                                <InputContainer>
                                    <label>Discord name</label>
                                    <Discord style={{ maxWidth: '175px' }} placeholder='#234567' />
                                </InputContainer>

                                <InputContainer>
                                    <label>Discord number</label>
                                    <Discord placeholder='#234567' />
                                </InputContainer>
                            </Collection>

                            <InputContainer>
                                <label>Email Address</label>
                                <Input placeholder='#234567' />
                            </InputContainer>

                            <InputContainer>
                                <label>Your Queries</label>
                                <TextArea placeholder='e.g Weekly Category : mern stack the project titled ‘MERN’ and update my new one.' />
                            </InputContainer>

                            <SignInButton type='submit' value='Send Message' />

                        </RegisterBox>
                    </form>

                </LowerContainer>
            </Container>

            <Footer />
        </div>
    );
}

export default Contact;