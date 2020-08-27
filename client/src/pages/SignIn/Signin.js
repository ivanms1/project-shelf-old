import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {
  Main,
  SignInBox,
  Form,
  InputContainer,
  ErrorText,
  Input,
  Links,
  SignInButton,
  LoginDetailsError
} from './style';
import Rocket from '../../assets/rocket.svg';
import Spinner from '../../components/Spinner/Spinner';

const GET_USER_QUERY = loader('./mutationLoginUser.graphql');

function Signin(props) {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm({ criteriaMode: 'all' });

  const [reg, { loading, error }] = useMutation(GET_USER_QUERY);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <LoginDetailsError>
      <p>Login Details didnt match</p>
      <button onClick={() => history.push('/signin')}>Back to SignIn</button>
    </LoginDetailsError>;
  }

  async function onsubmit(data) {
    try {
      const response = await reg({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(response);
      localStorage.setItem('userToken', response.data.login.userId);
      // redirect with the id from the response
      history.push('/');
    } catch (error) {
      // display error
      console.log(error.message);
    }
  }

  return (

    <div>
      <Header />
      <Main>

        <img alt='rocket' src={Rocket}></img>
        <SignInBox>
          <Form onSubmit={handleSubmit(onsubmit)}>
            <span>Sign In</span>
            <InputContainer>
              <span>Email Address</span>
              <Input
                name='email'
                placeholder='a@a.com'
                ref={register({
                  required: 'Email address is required.',
                  maxLength: 20,
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email address is not valid',
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
              <span>Password</span>
              <Input
                name='password'
                placeholder='abcdefgh'
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

            <Links to='/register'>Register ?</Links>
            <SignInButton type='submit' value='Sign In'></SignInButton>
          </Form>
        </SignInBox>
      </Main>

      <Footer />
    </div>
  );
}

export default Signin;
