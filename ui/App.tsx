import { useState } from 'react';
import secret from './secret.png';
import './App.scss';

const VALIDATE_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const validateEmail = () => {
    if (!email) setError('Email is required!');
    else if (!VALIDATE_EMAIL.test(email)) setError('Email is invalid!');
    else setError('');
  };
  const validatePassword = () => {
    if (!password) setError('Password is required!');
    else setError('');
  };
  return (
    <div className='container'>
      <div className='body'>
        <h1>Login</h1>
        <form onSubmit={(_) => _.preventDefault()}>
          <fieldset>
            <svg className='svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <input
              autoFocus
              onBlur={validateEmail}
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(_) => setEmail(_.target.value)}
              required
            />
          </fieldset>

          <fieldset>
            <img className='svg' src={secret} alt='p' />
            <input
              onBlur={validatePassword}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(_) => setPassword(_.target.value)}
              required
            />
          </fieldset>

          <div className='error'>
            <p>{error}</p>
          </div>

          <button className='btn'>LOG IN</button>
        </form>
      </div>
    </div>
  );
}

export default App;
