import { Spin as AntSpin } from 'antd';
import PropTypes from 'prop-types';

Spin.propTypes = {
    spinning: PropTypes.bool,
};

function Spin({ spinning, ...props }) {
    return <AntSpin spinning={spinning} {...props} />;
}

export default Spin;
