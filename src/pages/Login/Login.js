import { Formik } from 'formik';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import Message from 'components/Message';
import * as Yup from 'yup';
import TextInput from 'components/TextInput';
import PasswordInput from 'components/PasswordInput';
import Button from 'components/Button';
import { useApi, endpoints } from 'api';

function Login(props) {
    const [api] = useApi(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

/*

 const login = async (data) => {
        const { case_id, password } = data;
        try {
            const body = new URLSearchParams();
            body.append('password', password);
            body.append('username', case_id);

            const req = await api.post(endpoints.ACCESS_TOKEN, body);

            const res = await req.data;
            if (res) {
                const { access_token, token_type } = res;
                store.set('access_token', access_token);
                store.set('token_type', token_type);

                // Decode user details from token using jwt decoder
                const userDetails = jwt_decode(access_token);

                // Update Context with user details;
                dispatchUserDetail(userDetails);

                // Set Sentry user
                Sentry.setUser({
                    id: userDetails.case_id,
                    email: userDetails.email,
                    username: `${userDetails.first_name} ${userDetails.middle_name} ${userDetails.last_name}`,
                });

                if (window['hj']) {
                    window.hj('identify', userDetails.case_id);
                }

                history.push(paths.DASHBOARD);
            }
        } catch (error) {
            const { data } = error.response;
            const result = JSON.parse(data.detail);
            const { msg, is_email_verified, force_pass_reset } = result;
            setErrorMsg(msg);
            hideErrMsg(true);
            if (!is_email_verified && is_email_verified !== undefined) {
                store.set('case_id', case_id);
                store.set('key', 'only_resend');
                setTimeout(() => history.push(paths.EMAIL_RESEND), 5000);
            }
            if (force_pass_reset !== undefined && force_pass_reset === true) {
                forgotPassword(case_id);
            }
        }
    };


*/    


    const login = async () => {
        console.log('Clicked');
        const formData = {
            "email": email, "password": password
        };
        const req = await api.post(endpoints.LOGIN,formData);
        const res = await req.data;
        if (res) {
            console.log(res);
        }
        else {
            console.log('Not');
        }
    }

    return (
        <Wrapper>
            <div className='login-container'>
                <h1>Login</h1>
                <TextInput placeholder={'Email Address'} value={email} name='email' onChange={handleInputChange} />
                <PasswordInput placeholder={'Password'} value={password} name='password' onChange={handleInputChange} />
                <br />
                <Button onClick={login}>
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