import { Result } from 'antd';

function PageNotFound() {
    return (
        
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
            />
        
    );
}

export default PageNotFound;
