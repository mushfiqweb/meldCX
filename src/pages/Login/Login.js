import styled from 'styled-components';
import { useState } from 'react';
import TextInput from 'components/TextInput';
import PasswordInput from 'components/PasswordInput';
import Button from 'components/Button';
import { useApi, endpoints } from 'api';
import store from 'store';
import { useHistory } from 'react-router-dom';
import paths from 'routes/paths';

function Login(props) {
    const history = useHistory();
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

    const login = async () => {
        try {
            const formData = {
                "email": email, "password": password
            };
            const req = await api.post(endpoints.LOGIN, formData);
            const res = await req.data;
            if (res) {
                store.set('access_token', res);
                history.push(paths.DEVICES);
            }
        } catch (err) {
            alert('Invalid email and password combination');
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