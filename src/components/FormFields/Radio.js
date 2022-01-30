import { Radio as AntRadio } from 'antd';
import styled from 'styled-components';

function Radio({ children, ...props }) {
    return <RadioStyled {...props}>{children}</RadioStyled>;
}

const RadioStyled = styled(AntRadio)`
    .ant-radio {
        .ant-radio-inner {
            border-color: ${({ theme }) => theme.primaryColor};
        }

        &.ant-radio-checked {
            :after {
                border: 1px solid ${({ theme }) => theme.primaryColor};
            }

            .ant-radio-inner {
                :after {
                    background-color: ${({ theme }) => theme.primaryColor};
                }
            }
        }
    }
`;

export default Radio;
