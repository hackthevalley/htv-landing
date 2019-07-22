import React from 'react';
import styled from 'styled-components';
import { Mixins } from '@cheapreats/react-ui';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container as C, Image } from '@components';

const query = graphql`
    {
        placeholderImage: file(
            relativePath: { eq: "icon.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 60) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export const Navigation = ({
    items
}) => {
    const data = useStaticQuery(query);
    const { pathname, hash } = window.location;

    return (
        <Container tag='nav' contentTag={NavItems}>
            <LogoItem>
                Hack The Valley
                {/*<Image data={data}/>*/}
            </LogoItem>
            {/* items.map(({ nav }) => {
                return nav && (
                    <NavItem
                        key={nav.to}
                        active={nav.to === (pathname + hash)}
                    >
                        <NavLink to={nav.to}>
                            {nav.name}
                        </NavLink>
                    </NavItem>
                );
            })*/}
            <NavItem>
                <NavLink to='/#'>
                    Coming Soon
                </NavLink>
            </NavItem>
        </Container>
    );
};

const Container = styled(C)`
    ${ Mixins.position('fixed', '0 auto auto', 0, 'auto', 'auto') }
    ${ Mixins.flex('flex-start', 'center') }
    margin-top: 10px;
    z-index: 900;
    width: 100%;
`;

const NavItems = styled.ul`
    ${ Mixins.flex('flex-start', 'center') }
    list-style-type: none;
    color: white;
    padding: 0;
`;

const LogoItem = styled.li`
    margin-right: auto;
    // width: 40px;
`;

const NavItem = styled.li`
    font-size: 0.95rem;
    cursor: pointer;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    padding: 18px 22px;
    color: inherit;
    display: block;
`;