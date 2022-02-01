import styled from 'styled-components';

function Message({ message }) {
    return (
        <Wrapper className="mb-20">
            <p>{message}</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: #FFF0E6;
    border-radius: 4px;
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #F36D28;
        padding: 8px 30px 8px 11px;
    }  
`;

export default Message;
