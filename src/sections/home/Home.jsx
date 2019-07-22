import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Mixins, Heading as H, Paragraph as P } from '@cheapreats/react-ui';
import Theme from '@cheapreats/react-ui/dist/Themes/ThemeTemplate';
import { Container as C, Mountains } from '@components';
import { useScroll } from '@utils';

export const Home = () => {
    const [scrolled, setScrolled] = useState(false);
    const ref = useRef();

    useScroll(ref, () => setScrolled(true), 0);

    return (
        <Container tag="section" ref={ref} contentTag={Inner}>
            <Content scrolled={scrolled}>
                <Heading>
                    <span>Hack The Valley</span>
                    <span>IV</span>
                </Heading>
                <Paragraph>Coming Soon</Paragraph>
            </Content>
            <Mountains scrolled={scrolled}/>
        </Container>
    );
};

Home.nav = {
    to: '/',
    name: 'Home',
};

const Container = styled(C)`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: radial-gradient(#0090ff, #37a8ff);
`;

const Inner = styled.div`
    ${Mixins.flex('column', 'center')}
`;

const Content = styled.div`
    ${Mixins.transition(['opacity'], Theme.speed.page)}
    transition-delay: ${ Theme.speed.slow }ms;
    z-index: 10;
    ${({ scrolled }) => scrolled ? `
        opacity: 1;
    ` : `
        opacity: 0;
    `}
`;

const Heading = styled(H)`
    ${Mixins.flex('column', 'center')}
    text-align: center;
    font-size: 4rem;
    line-height: 1.2;
    color: white;
`;

const Paragraph = styled(P)`
    text-align: center;
    font-size: 1.6rem;
    margin-top: 20px;
    color: white;
`;