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

  const requiredError = 'This field is required';
  let validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required(requiredError)
      .min(3, 'First name must have more than 3 characters'),
    lastName: yup
      .string()
      .required(requiredError)
      .min(3, 'Last name must have more than 3 characters'),
    email: yup.string().required(requiredError).email('Email must be valid'),
    password: yup
      .string()
      .required(requiredError)
      .min(6, 'Password must be more than 6 characters'),
    confirmPassword: yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [reg, { loading }] = useMutation(MUTATION_REGISTER_USER);

  if (loading) {
    return <Loader />;
  }

  async function onSubmit(data) {
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
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
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
            <Input name='firstName' placeholder='Joe' ref={register} />

            <ErrorMessage errors={errors} name='firstName' as={<ErrorText />} />
          </InputContainer>

          <InputContainer>
            <label>Last name</label>
            <Input name='lastName' placeholder='Don' ref={register} />

            <ErrorMessage errors={errors} name='lastName' as={<ErrorText />} />
          </InputContainer>

          <InputContainer>
            <label>Email Address</label>
            <Input name='email' placeholder='joe@don.com' ref={register} />

            <ErrorMessage errors={errors} name='email' as={<ErrorText />} />
          </InputContainer>

          <InputContainer>
            <label>Password</label>
            <Input
              name='password'
              type='password'
              placeholder='123456'
              ref={register}
            />

            <ErrorMessage errors={errors} name='password' as={<ErrorText />} />
          </InputContainer>

          <InputContainer>
            <label>Confirm Password</label>
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
            />
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
