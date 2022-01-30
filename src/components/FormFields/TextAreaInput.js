import { useMemo } from 'react';
import { Input } from 'antd';
import { useField } from 'formik';
import FieldWrapper from './FieldWrapper';
import styled from 'styled-components';

const { TextArea } = Input;

function TextAreaInput({ label, required, disabled, ...props }) {
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
                <TextArea
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

    .ant-input {
        min-height: 40px;
        padding: 16px;
        border: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #0f212e;
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

export default TextAreaInput;
