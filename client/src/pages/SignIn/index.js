import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from '@hookform/error-message';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Context } from '../../Context/AppContext';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import Rocket from '../../assets/rocket.svg';

import {
  Container,
  SignInBox,
  Form,
  InputContainer,
  ErrorText,
  Input,
  Register,
  CustomSignInCss,
} from './style';

const MUTATION_LOGIN_USER = loader('./mutationLoginUser.graphql');

function Signin() {
  const history = useHistory();
  const { setIsAuthenticated } = useContext(Context);

  const requiredError = 'This field is required';
  let validationSchema = yup.object().shape({
    email: yup.string().required(requiredError).email('Email must be valid'),
    password: yup
      .string()
      .required(requiredError)
      .min(6, 'Password must be more than 6 characters'),
  });

  const notify = () => toast.error(`Please try again.`);

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [signInUser, { loading }] = useMutation(MUTATION_LOGIN_USER);

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
      <img alt='rocket' src={Rocket}></img>

      <SignInBox>
        <Form onSubmit={handleSubmit(submitUserDetails)}>
          <span>Sign In</span>

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

          <Register to='/register'>Register ?</Register>

          <Button addCSS={CustomSignInCss} type='submit'>
            Sign In
          </Button>
        </Form>
      </SignInBox>
    </Container>
  );
}

export default Signin;
