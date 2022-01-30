import { useMemo } from 'react';
import { Input } from 'antd';
import { useField } from 'formik';
import FieldWrapper from './FieldWrapper';
import styled from 'styled-components';
import { passHideIcon, passShowIcon } from 'assets/img';

function PasswordInput({ label, required, disabled, ...props }) {
    const [field, meta] = useField(props);
    const { touched, error } = meta;

    const isInvalid = useMemo(() => {
        return !!(touched && error);
    }, [touched, error]);

    return (
        <FieldWrapper
            isInvalid={isInvalid}
            label={label}
            required={required}
            error={error}
            disabled={disabled}
        >
            <Wrapper hasError={isInvalid}>
                <Input.Password
                    iconRender={(visible) =>
                        visible ? (
                            <PasswordIcon
                                src={passShowIcon}
                                alt="show password"
                            />
                        ) : (
                            <PasswordIcon
                                src={passHideIcon}
                                alt="hide password"
                            />
                        )
                    }
                    {...field}
                    {...props}
                    disabled={disabled}
                />
            </Wrapper>
        </FieldWrapper>
    );
}

const PasswordIcon = styled.img`
    width: 18px;
`;

const Wrapper = styled.div`
    margin: auto;
    max-width: 754px;

    .ant-input-affix-wrapper.ant-input-password {
        padding: 0 15px 0 0;
        border: 0;
        border-radius: ${({ theme }) => theme.inputRadius};

        ${({ hasError, theme }) =>
            hasError
                ? 'border: 1px solid #ff4d4f;'
                : `border-bottom: 1px solid ${theme.primaryColor};`}

        &, &:hover {
            background-color: ${({ hasError, theme }) =>
                hasError ? '#fff1f1' : `${theme.primaryColor}10`};
        }

        .ant-input {
            min-height: 40px;
            padding: 0 16px;
            border: 0;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: ${({ theme }) => theme.textColor};
            border-radius: ${({ theme }) => theme.inputRadius};

            &,
            &:hover {
                background-color: transparent;
            }

            &[disabled] {
                background-color: #cdd3d8;
                border-bottom-color: #cdd3d8;
            }
        }
    }

    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused {
        box-shadow: none;
    }
`;

export default PasswordInput;
