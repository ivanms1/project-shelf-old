import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import {
  Main,
  Container,
  RegisterBox,
  InputContainer,
  Input,
  Links,
  SignInButton,
  ErrorText,
} from './style';
import Light from '../../assets/light.svg';
import { Redirect } from 'react-router-dom';

const MUTATION_REGISTER_USER = loader('./mutationRegisterUser.graphql');

function Register(props) {
  const [redirect, setRedirect] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const [reg, { loading }] = useMutation(MUTATION_REGISTER_USER);

  if (loading) {
    return <Spinner />;
  }

  async function onSubmit(data) {
    try {
      await reg({
        variables: {
          email: data.email,
          password: data.password,
          name: data.firstname,
          lastName: data.lastname,
        },
      });

      setRedirect(true);
      // redirect with the id from the response
    } catch (error) {
      // display error
      console.log(JSON.stringify(error, null, 2));
    }
  }

  return redirect === true ? (
    <Redirect to='/signin' />
  ) : (
    <Main>
      <Header />
      <Container>
        <img alt='light' src={Light}></img>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterBox>
            <span>Register</span>
            <InputContainer>
              <label>First name</label>
              <Input
                name='firstname'
                placeholder='Joe'
                ref={register({
                  required: 'Full Name is required.',
                  maxLength: 10,
                  minLength: {
                    value: 3,
                    message: 'Must be 3 or more letters.',
                  },
                })}
              />

              <ErrorText>
                <ErrorMessage errors={errors} name='firstname'>
                  {({ message }) => <p>{message}</p>}
                </ErrorMessage>
              </ErrorText>
            </InputContainer>

            <InputContainer>
              <label>Last name</label>
              <Input
                name='lastname'
                placeholder='Don'
                ref={register({
                  required: 'Last Name is required.',
                  maxLength: 10,
                  minLength: {
                    value: 3,
                    message: 'Must be 3 or more letters.',
                  },
                })}
              />

              <ErrorText>
                <ErrorMessage errors={errors} name='lastname'>
                  {({ message }) => <p>{message}</p>}
                </ErrorMessage>
              </ErrorText>
            </InputContainer>

            <InputContainer>
              <label>Email Address</label>
              <Input
                name='email'
                placeholder='joe@don.com'
                ref={register({
                  required: 'Email address is required.',
                  maxLength: 20,
                  pattern: {
                    //eslint-disable-next-line
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email address is not valid.',
                  },
                })}
              />

              <ErrorText>
                <ErrorMessage errors={errors} name='email'>
                  {({ message }) => <p>{message}</p>}
                </ErrorMessage>
              </ErrorText>
            </InputContainer>

            <InputContainer>
              <label>Password</label>
              <Input
                name='password'
                placeholder='123456'
                ref={register({
                  required: 'Password is required.',
                  maxLength: 10,
                  minLength: {
                    value: 2,
                    message: 'must be 2 or more letters.',
                  },
                })}
              />

              <ErrorText>
                <ErrorMessage errors={errors} name='password'>
                  {({ message }) => <p>{message}</p>}
                </ErrorMessage>
              </ErrorText>
            </InputContainer>

            <div className='registerContainer'>
              <Links to='/signin'>Sign in</Links>
            </div>

            <SignInButton type='submit' value='Register' />
          </RegisterBox>
        </form>
      </Container>
    </Main>
  );
}

export default Register;
