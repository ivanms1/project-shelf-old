import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Main, SignInBox, Form, InputContainer, ErrorText, Input, Links, SignInButton } from './style';
import Rocket from '../../assets/rocket.svg';
import Spinner from '../../components/Spinner/Spinner';

const GET_USER_QUERY = loader('./mutationLoginUser.graphql');


function Signin(props) {
    const { register, errors, handleSubmit } = useForm({ criteriaMode: 'all' });

    const [reg, { loading, error }] = useMutation(GET_USER_QUERY);

    if (loading) {
        return <Spinner />;
    }


    if (error) {
        return <p>error</p>;
    }


    async function onsubmit(data) {
        try {
            const response = await reg({
                variables: {
                    email: data.email,
                    password: data.password,
                },
            });
            console.log(response.data.login.userId);
            localStorage.setItem('userToken', response.data.login.userId);


            // redirect with the id from the response
        } catch (error) {
            // display error
            console.log(error.message);
        }

    };

    return (
        // localStorage.getItem('userToken') ? <Redirect to='/' /> :
        <div>
            <Header />

            <Main>
                <img alt='rocket' src={Rocket}></img>
                <SignInBox>
                    <Form onSubmit={handleSubmit(onsubmit)}>
                        <span>Sign In</span>
                        <InputContainer>
                            <span>Email Address</span>
                            <Input name='email' placeholder='a@a.com' ref={register({
                                required: "Email address is required.",
                                maxLength: 20,
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Email address is not valid"
                                }
                            })} />
                            <ErrorText>
                                <ErrorMessage errors={errors} name="email">
                                    {({ message }) => <p>{message}</p>}
                                </ErrorMessage>
                            </ErrorText>
                        </InputContainer>

                        <InputContainer>
                            <span>Password</span>
                            <Input name='password' placeholder='abcdefgh' ref={register({
                                required: "Password is required.",
                                maxLength: 10,
                                minLength: {
                                    value: 2,
                                    message: "must be 2 or more letters."
                                }
                            })} />
                            <ErrorText>
                                <ErrorMessage errors={errors} name="password">
                                    {({ message }) => <p>{message}</p>}
                                </ErrorMessage>
                            </ErrorText>
                        </InputContainer>

                        <Links to='/'>
                            Forgot Password ?
                        </Links>
                        <SignInButton type='submit' value='Sign In'></SignInButton>
                    </Form>
                </SignInBox>
            </Main>

            <Footer />
        </div>
    );
}

export default Signin;