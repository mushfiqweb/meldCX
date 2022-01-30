import { Radio } from 'antd';
import FieldWrapper from './FieldWrapper';
import { useField } from 'formik';
import { useMemo } from 'react';

function RadioGroup({ label, required, onChange, name, children, ...props }) {
    const [field, meta, helper] = useField(name);
    const { touched, error } = meta;

    const { setValue } = helper;

    const isInvalid = useMemo(() => {
        return !!(touched && error);
    }, [touched, error]);

    const changeHandler = (e) => {
        const value = e.target.value;

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
            <Radio.Group {...field} {...props} onChange={changeHandler}>
                {children}
            </Radio.Group>
        </FieldWrapper>
    );
}

export default RadioGroup;
