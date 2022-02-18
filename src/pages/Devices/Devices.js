import styled from 'styled-components';
import Button from 'components/Button';
import { useState } from 'react';
import { endpoints, useApi } from 'api';
import store from 'store';
import { useHistory } from 'react-router-dom';
import paths from 'routes/paths';
import { useInterval } from 'hooks';

function Devices() {
    const history = useHistory();
    const [api] = useApi();
    const [devices, setDevices] = useState([]);

    const fetchDevices = async () => {
        const req = await api.get(endpoints.DEVICES);
        const res = await req.data;
        setDevices(res.devices);
    };

    useInterval(() => {
        fetchDevices();
    }, 5000);

    const logout = () => {
        store.clearAll();
        history.push(paths.LOGIN);
    }

    const notify = () => {
        const formData = {
            "name": 'Mushfiqur Rahman',
            "email": 'hello@mushfiqweb.com',
            "message": 'Please check out my assignment',
            "repoUrl": 'https://github.com/mushfiqweb/meldCX'
        };
        const req = api.post(endpoints.NOTIFY, formData);
        req.then(res => {
            console.log(res);
        });
    }

    return (
        <Wrapper>
            <DeviceCounter>
                <div className='counter'>
                    {devices.length}
                </div>
                <div>
                    DEVICES <br /> ONLINE
                </div>
            </DeviceCounter>
            
            {
                devices.map((device, index) => {
                    return (
                        <div key={device.id} className="dot"></div>
                    )
                })
            }

            <ButtonContainer>
                <NotifyButton onClick={notify}>
                    NOTIFY
                </NotifyButton>
                <br />
                <LogoutButton onClick={logout}>
                    LOG OUT
                </LogoutButton>
            </ButtonContainer>
        </Wrapper>
    );
}


const NotifyButton = styled(Button)`
    background-color: white;
    border: none;
    color: black;
`;

const LogoutButton = styled(Button)`
    background-color: #4a3a3a;
    border: none;
    color: white;
    margin-left: 10px;
`;

const ButtonContainer = styled.div`
    height: 100px;
    position: absolute;
    background: #e7663e;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const DeviceCounter = styled.div`
    font-size: 3rem;
    line-height: 40px;
    color: white;
    position: relative;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .counter {
        font-size: 10rem;
        margin-bottom: 60px;
    }
`;

const Wrapper = styled.div`
    background-color: #ff7043;
    height: 100vh;

    .dot {
        position: absolute;            
        top: 40%;
        left: 50%;
        margin-left: -20px;
        height: 50px;
        width: 50px;
        background-color: #fff;
        border-radius: 50%;
        display: inline-block;
        margin: 10px;
        animation: move 3s infinite linear;
    }

    @keyframes move {
        0%     { transform: rotate(0deg) translateX(250px) rotate(0deg); }
        100%   { transform: rotate(360deg) translateX(250px) rotate(-360deg); }
    }


`;

export default Devices;
