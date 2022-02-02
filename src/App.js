/* eslint-disable no-undef */
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/Routes';
import GlobalStyles from 'styles/GlobalStyles';


function App() {
    return (
        <Router>
            <GlobalStyles />
            <Routes />
        </Router >

    );
}
export default App;
