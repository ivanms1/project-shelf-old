import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Main, SignInBox, Form, InputContainer, ErrorText, Input, Links, SignInButton } from './style';
import Rocket from '../../assets/rocket.svg';

function Signin(props) {

    const { register, errors, handleSubmit } = useForm()

    const onsubmit = (data) => {
        alert('the string matches')
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
                            <span>Discord number</span>
                            <Input name='discordnumber' placeholder='#234567' ref={register({
                                required: true,
                                pattern: /^(#)\d{4}/i,
                                maxLength: 5
                            })} />
                            {errors.discordnumber && <ErrorText>This field is required</ErrorText>}
                        </InputContainer>

                        <InputContainer>
                            <span>Password</span>
                            <Input name='discordname' placeholder='abcdefgh' ref={register({
                                required: true
                            })} />
                            {errors.discordname && <ErrorText>This field is required</ErrorText>}
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