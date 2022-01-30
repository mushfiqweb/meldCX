import { Formik } from 'formik';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Login(props) {
    return (
        <Wrapper>

            <section>
                <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                <Button>
                    LOG IN
                </Button>
            </section>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin: 0 auto;
`;

export default Login;