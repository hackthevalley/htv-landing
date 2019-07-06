import React from 'react';
import { Global } from '@cheapreats/react-ui';
import { extendTheme, Fontfaces } from '@utils';

const Providers = ({ children }) => (
    <Global extend={extendTheme}>
        <Fontfaces />
        {children}
    </Global>
);

export default Providers;
