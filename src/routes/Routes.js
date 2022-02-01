import { Suspense } from 'react';

import Login from 'pages/Login';
import Devices from 'pages/Devices';

import { Switch } from 'react-router-dom';
import path from './paths';
import { SpinLoader } from 'components/Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { PageNotFound } from 'utilities';

const Routes = () => {

    return (
        <Suspense fallback={<SpinLoader style={{ margin: '35px auto' }} />}>
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
        </Suspense>
    );
};

export default Routes;
