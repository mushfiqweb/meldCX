import { Checkbox as AntCheckbox } from 'antd';
import { useField } from 'formik';
import styled from 'styled-components';
import FieldWrapper from './FieldWrapper';
import { useMemo } from 'react';

function CheckboxField({ children, required, onChange, ...props }) {
    // eslint-disable-next-line no-unused-vars
    const [field, meta, helper] = useField(props);
    const { touched, error } = meta;

    const { setValue } = helper;

    const changeHandler = (e) => {
        const value = e.target.checked;

        setValue(value);
        if (onChange) onChange(value);
    };
    const isInvalid = useMemo(() => {
        return !!(touched && error);
    }, [touched, error]);
    return (
        <FieldWrapper
            isInvalid={isInvalid}
            required={required}
            error={error}
        >
            <Checkbox onChange={changeHandler} checked={field.value}>
                {children}
            </Checkbox>
        </FieldWrapper>
    );
}

const Checkbox = styled(AntCheckbox)`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 12px;

    a {
        text-decoration: underline;
        color: ${(props) => props.theme.primaryColor};
        font-size: 12px;
        font-weight: 500;
    }

    &:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-inner {
        border: 1px solid #0f212e;
    }

    .ant-checkbox-checked {
        .ant-checkbox-inner {
            border-color: ${(props) => props.theme.primaryColor};
        }
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${(props) => props.theme.primaryColor};
    }    
`;

export default CheckboxField;
