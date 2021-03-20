import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Loader from '../../components/Loader';
import Button from '../../components/Button';

import Light from '../../assets/light.svg';

import {
  Container,
  RegisterBox,
  InputContainer,
  Input,
  SignIn,
  ErrorText,
  CustomRegisterCss,
} from './style';

const MUTATION_REGISTER_USER = loader('./mutationRegisterUser.graphql');

function Register() {
  const [redirect, setRedirect] = useState(false);

  let schema = yup.object().shape({
    firstname: yup.string().required().min(3),
    lastname: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().min(6),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [reg, { loading }] = useMutation(MUTATION_REGISTER_USER);

  if (loading) {
    return <Loader />;
  }

  async function onSubmit(data) {
    if (data.password === data.confirmPassword) {
      try {
        await reg({
          variables: {
            email: data.email,
            password: data.password,
            name: data.firstName,
            lastName: data.lastName,
          },
        });

        setRedirect(true);
        // redirect with the id from the response
      } catch (error) {
        // display error
        console.log(JSON.stringify(error, null, 2));
      }
    }
  }

  return redirect === true ? (
    <Redirect to='/signin' />
  ) : (
    <Container>
      <img alt='light' src={Light}></img>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RegisterBox>
          <span>Register</span>
          <InputContainer>
            <label>First name</label>
            <Input name='firstname' placeholder='Joe' ref={register} />

            <ErrorMessage errors={errors} name='firstname' as={<ErrorText />}>
              {({ message }) => <p>{message}</p>}
            </ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Last name</label>
            <Input name='lastname' placeholder='Don' ref={register} />

            <ErrorMessage errors={errors} name='lastname' as={<ErrorText />}>
              {({ message }) => <p>{message}</p>}
            </ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Email Address</label>
            <Input name='email' placeholder='joe@don.com' ref={register} />

            <ErrorMessage errors={errors} name='email' as={<ErrorText />}>
              {({ message }) => <p>{message}</p>}
            </ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Password</label>
            <Input
              name='password'
              type='password'
              placeholder='123456'
              ref={register}
            />

            <ErrorMessage errors={errors} name='password' as={<ErrorText />}>
              {({ message }) => <p>{message}</p>}
            </ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Re-Type Password</label>
            <Input
              name='confirmPassword'
              type='password'
              placeholder='123456'
              ref={register}
            />

            <ErrorMessage
              errors={errors}
              name='confirmPassword'
              as={<ErrorText />}
            >
              {({ message }) => <p>{message}</p>}
            </ErrorMessage>
          </InputContainer>

          <SignIn to='/signin'>Sign In</SignIn>

          <Button addCSS={CustomRegisterCss} type='submit'>
            Register
          </Button>
        </RegisterBox>
      </form>
    </Container>
  );
}

export default Register;
