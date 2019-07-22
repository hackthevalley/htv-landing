import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Seo } from '@components';
import Providers from './Providers';

// Configuration of sections with navigation (Remove if want navigation to ignore)
/*
    Component.nav = {
        to: string,
        name: string
    };
*/

export const Landing = ({
    children,
    items = [],
    location,
    ...props
}) => {
    return (
        <Providers location={location}>
            <Seo />
            <Navigation items={items}/>
            <main {...props}>{children}</main>
            {/*<Footer items={items}/>*/}
        </Providers>
    );
};

Landing.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};
