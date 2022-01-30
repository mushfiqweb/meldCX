import { useMemo } from 'react';
import { Input } from 'antd';
import { useField } from 'formik';
import FieldWrapper from './FieldWrapper';
import styled from 'styled-components';

function TextInput({ label, required, disabled, ...props }) {
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
                <Input
                    {...field}
                    {...props}
                    disabled={disabled}
                    data-hj-allow
                />
            </Wrapper>
        </FieldWrapper>
    );
}

const Wrapper = styled.div`
    margin: auto;
    max-width: 754px;
    // margin-bottom: 16px;

    .ant-input-affix-wrapper {
        border-width: 0 0 1px 0;
        border-radius: 0;
        padding: 0;

        ${({ hasError, theme }) =>
            hasError
                ? 'border: 1px solid #ff4d4f;'
                : `border-bottom: 1px solid ${theme.primaryColor};`}

        &:hover {
            border-right-width: 0px !important;
        }
        .ant-input-prefix {
            padding: 0 10px;
            margin: 0;
            background-color: ${({ hasError, theme }) =>
                hasError ? '#fff1f1' : `${theme.primaryColor}10`};
        }

        &:hover {
            background-color: ${({ hasError, theme }) =>
                hasError ? '#fff1f1' : `${theme.primaryColor}10`};
        }
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

        ${({ hasError, theme }) =>
            hasError
                ? 'border: 1px solid #ff4d4f;'
                : `border-bottom: 1px solid ${theme.primaryColor};`}

        &, &:hover {
            background-color: ${({ hasError, theme }) =>
                hasError ? '#fff1f1' : `${theme.primaryColor}10`};
        }

        &[disabled] {
            background-color: #cdd3d8;
            border-bottom-color: #cdd3d8;
        }
    }
`;

export default TextInput;
