import React from 'react';
import * as sections from '@sections/home';
import { Landing } from '@layouts';

const items = Object.values(sections);
const IndexPage = ({ location }) => (
    <Landing items={items} location={location}>
        <sections.Home/>
        {/*items.map(Section => {
            return <Section key={Section.name} />;
        })*/}
    </Landing>
);

export default IndexPage;
