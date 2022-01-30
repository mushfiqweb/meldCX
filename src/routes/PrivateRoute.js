import { Route, Redirect } from 'react-router-dom';
import store from 'store';
import PrivateLayout from './PrivateLayout';

function PrivateRoute({ children, ...rest }) {
    const access_token = store.get('access_token');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                access_token ? (
                    <PrivateLayout>{children}</PrivateLayout>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
