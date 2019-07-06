import React from 'react';
import * as sections from '@sections/home';
import { Landing } from '@layouts';

const IndexPage = () => (
    <Landing>
        {Object.values(sections).map(Section => {
            return <Section key={Section.name} />;
        })}
    </Landing>
);

export default IndexPage;
