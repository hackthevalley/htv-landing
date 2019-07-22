import React from 'react';
import { Global } from '@cheapreats/react-ui';
import { extendTheme, Fontfaces, locationContext } from '@utils';

const Providers = ({ children, location }) => (
    <Global extend={extendTheme}>
        <Fontfaces />
        <locationContext.Provider value={location}>
            {children}
        </locationContext.Provider>
    </Global>
);

export default Providers;
