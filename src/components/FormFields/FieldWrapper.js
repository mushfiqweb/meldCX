import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
    FieldWrapper is a component which mimic Ant's Form Item component.
    It's a wrapper around Formik's field components.
*/
function FieldWrapper(props) {
    const { children, label, required, error, isInvalid, disabled } = props;

    return (
        <div
            className={`ant-form-item ${
                isInvalid
                    ? 'ant-form-item-with-help ant-form-item-has-error'
                    : ''
            }`}
        >
            {label && (
                <div className="ant-form-item-label">
                    <Label
                        htmlFor={props.name}
                        className={required && 'ant-form-item-required'}
                        title={label}
                        disabled={disabled}
                    >
                        {label}
                    </Label>
                </div>
            )}
            <div className="ant-form-item-control">
                <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                        {children}
                    </div>
                </div>
                {isInvalid ? (
                    <div className="ant-form-item-explain ant-form-item-explain-error">
                        <div role="alert">{error}</div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

const Label = styled.label`
    && {
        font-size: ${({ theme }) => theme.labelFontSize};
        font-weight: ${({ theme }) => theme.labelFontWeight};
        color: ${({ disabled, theme }) =>
            disabled ? theme.labelColorDisabled : theme.labelColor};

        ::after {
            content: '';
        }
    }
`;

FieldWrapper.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
    ]),
    required: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
    ]),
    isInvalid: PropTypes.bool,
};

export default FieldWrapper;
