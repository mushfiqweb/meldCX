import { Select } from 'antd';
import { downArrow } from '../../assets/img';
import FieldWrapper from './FieldWrapper';
import { useField } from 'formik';
import { useMemo } from 'react';
import styled from 'styled-components';

function SelectField({ label, required, onChange, ...props }) {
    const [field, meta, helper] = useField(props);
    const { touched, error } = meta;

    const { setValue } = helper;

    const isInvalid = useMemo(() => {
        return !!(touched && error);
    }, [touched, error]);

    const changeHandler = (value) => {
        setValue(value);

        if (onChange) onChange(value);
    };

    return (
        <FieldWrapper
            isInvalid={isInvalid}
            label={label}
            required={required}
            error={error}
        >
            <Wrapper hasError={isInvalid}>
                <Select
                    suffixIcon={<img src={downArrow} />}
                    {...field}
                    {...props}
                    onChange={changeHandler}
                />
            </Wrapper>
        </FieldWrapper>
    );
}

const Wrapper = styled.div`
    .ant-select {
        width: 100%;

        .ant-select-selector {
            height: ${({ theme }) => theme.inputHeight};

            .ant-select-selection-item {
                font-weight: 500;
                line-height: ${({ theme }) => theme.inputLineHeight};
            }
        }
    }

    .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector {
            border: 0px solid;
            color: #0f212e;
            border-width: ${(props) =>
                props.hasError ? '1px' : '0 0 1px 0 !important'};
            border-style: solid;
            border-color: ${({ hasError, theme }) =>
                hasError ? '#ff4d4f !important' : theme.primaryColor};
            background-color: ${({ hasError, theme }) =>
                hasError ? '#fff1f1 !important' : `${theme.primaryColor}10`};
            border-radius: ${({ theme }) => theme.inputRadius};
        }
    }

    .ant-select-arrow {
        img {
            width: 13px;
            height: auto;
        }
    }

    .ant-select.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
        .ant-select-selector {
        box-shadow: none;
        border-right-width: 0px !important;
    }
`;

export default SelectField;
