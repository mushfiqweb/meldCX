import { useState } from 'react';
import Spin from 'components/Spin';
import LoaderContext from './LoaderContext';

function LoaderProvider({ children }) {
    const [spinning, triggerLoader] = useState(false);

    const showLoader = () => triggerLoader(true);

    const hideLoader = () => triggerLoader(false);

    return (
        <LoaderContext.Provider value={[showLoader, hideLoader]}>
            <Spin spinning={spinning}>{children}</Spin>
        </LoaderContext.Provider>
    );
}

export default LoaderProvider;
