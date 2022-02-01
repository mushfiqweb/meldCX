import styled from 'styled-components';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { endpoints, useApi } from 'api';

function Devices() {
    const [api] = useApi();
    const [devices, setDevices] = useState([]);

    useEffect(()=>{
        const fetchDevices = async () => {
            const req = await api.get(endpoints.DEVICES);
            const res = await req.data;
            setDevices(res.devices);
        };

        setInterval(() => {
            fetchDevices();
        }, 5000);
        
    }, [api]);
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

            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>

            <ButtonContainer>
                <NotifyButton>
                    NOTIFY
                </NotifyButton>
                <br />
                <LogoutButton>
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
        height: 50px;
        width: 50px;
        background-color: #fff;
        border-radius: 50%;
        display: inline-block;
        margin: 10px;
    }
`;

export default Devices;
