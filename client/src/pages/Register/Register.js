import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, RegisterBox, InputContainer, Input, Links, SignInButton } from './style';
import Light from '../../assets/light.svg';

function Register(props) {
    return (
        <div>
            <Header />
            <Container>
                <img alt='light' src={Light}></img>
                <form>
                    <RegisterBox>

                        <span>Register</span>
                        <InputContainer>
                            <label>Discord name</label>
                            <Input placeholder='#234567' />
                        </InputContainer>

                        <InputContainer>
                            <label>Discord number</label>
                            <Input placeholder='#234567' />
                        </InputContainer>

                        <InputContainer>
                            <label>Email Address</label>
                            <Input placeholder='#234567' />
                        </InputContainer>

                        <InputContainer>
                            <label>Password</label>
                            <Input placeholder='#234567' />
                        </InputContainer>

                        <Links to='/signin'>
                            Sign in
                    </Links>

                        <SignInButton type='submit' value='Register' />

                    </RegisterBox>
                </form>
            </Container>
            <Footer />
        </div>
    );
}

export default Register;