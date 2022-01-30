import styled from 'styled-components';
import './loader.css';

function SpinLoader({ size = '35px', style, className }) {
    return <Loader size={size} style={style} className={className} />;
}

const Loader = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border: 2px solid rgba(0, 138, 200, 0.2);
    border-radius: 50%;
    position: relative;
    animation: loader-rotate 1s linear infinite;
`;

export default SpinLoader;
