import React from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  Container,
  RegisterBox,
  InputContainer,
  Input,
  Links,
  SignInButton,
} from './style';
import Light from '../../assets/light.svg';

const MUTATION_REGISTER_USER = loader('./mutationRegisterUser.graphql');

function Register(props) {
  const [register, { loading, error }] = useMutation(MUTATION_REGISTER_USER);
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

            <Links to='/signin'>Sign in</Links>

            <SignInButton
              type='submit'
              onSubmit={async () => {
                try {
                  const response = await register({
                    variables: {
                      name: ' asdfsad',
                    },
                  });
                  console.log(response);
                  // redirect with the id from the response
                } catch (error) {
                  // display error
                }
              }}
              value='Register'
            />
          </RegisterBox>
        </form>
      </Container>
      <Footer />
    </div>
  );
}

export default Register;
