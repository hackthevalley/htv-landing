import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Navigation, Seo } from '@components';
import Providers from './Providers';

// Configuration of sections with navigation (Remove if want navigation to ignore)
/*
    Component.nav = {
        path: string,
        name: string
    };
*/

export const Landing = ({ children, ...props }) => (
    <Providers>
        <Seo />
        <Navigation />
        <main {...props}>{children}</main>
        <Footer />
    </Providers>
);

Landing.propTypes = {
    children: PropTypes.node.isRequired,
};
