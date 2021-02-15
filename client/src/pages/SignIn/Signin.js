import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from '@hookform/error-message';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';

import { Context } from '../../Context/AppContext';

import Header from '../../components/Header/Header';
import {
  Container,
  Main,
  SignInBox,
  Form,
  InputContainer,
  ErrorText,
  Input,
  Register,
  CustomSignInCss,
} from './style';

import Rocket from '../../assets/rocket.svg';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';

const GET_USER_QUERY = loader('./mutationLoginUser.graphql');

function Signin(props) {
  const history = useHistory();
  const { setIsAuthenticated } = useContext(Context);

  const notify = () => toast.error(`Please try again.`);

  const { register, errors, handleSubmit } = useForm();

  const [signInUser, { loading }] = useMutation(GET_USER_QUERY);

  if (loading) {
    return <Loader />;
  }

  const submitUserDetails = async (data) => {
    try {
      const response = await signInUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      localStorage.setItem('userToken', response?.data?.login?.userId);
      setIsAuthenticated(true);
      history.push('/');
    } catch (error) {
      notify();
    }
  };

  return (
    <Container>
      <Header />

      <Main>
        <img alt='rocket' src={Rocket}></img>

        <SignInBox>
          <Form onSubmit={handleSubmit(submitUserDetails)}>
            <span>Sign In</span>

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
                    message: 'Email address is not valid',
                  },
                })}
              />

              <ErrorMessage errors={errors} name='email' as={<ErrorText />}>
                {({ message }) => <small>{message}</small>}
              </ErrorMessage>
            </InputContainer>

            <InputContainer>
              <label>Password</label>
              <Input
                name='password'
                type='password'
                placeholder='abcdefgh'
                ref={register({
                  required: 'Password is required.',
                  maxLength: 10,
                  minLength: {
                    value: 2,
                    message: 'Must be 2 or more letters.',
                  },
                })}
              />

              <ErrorMessage errors={errors} name='password' as={<ErrorText />}>
                {({ message }) => <p>{message}</p>}
              </ErrorMessage>
            </InputContainer>

            <Register to='/register'>Register ?</Register>

            <Button addCSS={CustomSignInCss} type='submit'>
              Sign In
            </Button>
          </Form>
        </SignInBox>
      </Main>
    </Container>
  );
}

export default Signin;
