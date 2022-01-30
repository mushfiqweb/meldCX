/* eslint-disable no-undef */
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/Routes';
import GlobalStyles from 'styles/GlobalStyles';
import { LoaderProvider, UserDetailProvider } from 'contexts';

function App() {
    return (
        <LoaderProvider>
            <Router>
                <GlobalStyles />
                <UserDetailProvider>
                    <Routes />
                </UserDetailProvider>
            </Router>
        </LoaderProvider>
    );
}
export default App;
