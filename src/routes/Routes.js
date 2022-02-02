import Login from 'pages/Login';
import Devices from 'pages/Devices';

import { Switch } from 'react-router-dom';
import path from './paths';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { PageNotFound } from 'utilities';

const Routes = () => {

    return (
        <Switch>
            <PrivateRoute exact path={[path.DEVICES, '/']}>
                <Devices />
            </PrivateRoute>
            <PublicRoute exact path={[path.LOGIN]}>
                <Login />
            </PublicRoute>
            <PublicRoute path="*">
                <PageNotFound />
            </PublicRoute>
        </Switch>
    );
};

export default Routes;
