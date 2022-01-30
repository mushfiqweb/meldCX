import Layout from 'containers/Layout';
import { useHistory } from 'react-router-dom';
import paths from './paths';

function PublicLayout({ children }) {
    const { push } = useHistory();

    const redirectToLogin = () => push(paths.LOGIN);

    return (
        <Layout onLogoClick={redirectToLogin} publicPage>
            {children}
        </Layout>
    );
}

export default PublicLayout;
