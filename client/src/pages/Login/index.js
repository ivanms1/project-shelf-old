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

import {
  Container,
  LoginBox,
  Form,
  InputContainer,
  Input,
  ErrorText,
  RegisterLink,
  CustomLoginCss,
} from './style';

import Rocket from '../../assets/rocket.svg';
const MUTATION_LOGIN_USER = loader('./mutationLoginUser.graphql');

const requiredError = 'This field is required';
let validationSchema = yup.object().shape({
  email: yup.string().required(requiredError).email('Email must be valid'),
  password: yup.string().required(requiredError),
});

function Login() {
  const history = useHistory();
  const { setIsAuthenticated } = useContext(Context);

  const notify = () => toast.error(`Please try again.`);

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [loginUser, { loading }] = useMutation(MUTATION_LOGIN_USER);

  if (loading) {
    return <Loader />;
  }

  const submitUserDetails = async (data) => {
    try {
      const response = await loginUser({
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

      <LoginBox>
        <Form onSubmit={handleSubmit(submitUserDetails)}>
          <span>Log In</span>

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

          <RegisterLink to='/register'>Register ?</RegisterLink>

          <Button addCSS={CustomLoginCss} type='submit'>
            Log In
          </Button>
        </Form>
      </LoginBox>
    </Container>
  );
}

export default Login;
