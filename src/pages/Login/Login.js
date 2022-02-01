import { Formik } from 'formik';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import Message from 'components/Message';
import * as Yup from 'yup';
import TextInput from 'components/TextInput';
import PasswordInput from 'components/PasswordInput';
import Button from 'components/Button';
function Login(props) {


    const login = () => {

    }

    return (
        <Wrapper>
            <div className='login-container'>
                <TextInput />
                <PasswordInput/>
                <br/>
                <Button>
                    Log in
                </Button>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #2b343b;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .login-container{
        background-color: #fff;
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
        border-radius: 5px;
        box-shadow: 0 0 10px 10px #2b2b2b;
    }
`;

export default Login;