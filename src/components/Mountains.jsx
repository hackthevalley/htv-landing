import React from 'react';
import { Mixins } from '@cheapreats/react-ui';
import Theme from '@cheapreats/react-ui/dist/Themes/ThemeTemplate';
import styled from 'styled-components';

const Colors = {
    DARKER: '#212121ee',
    DARK: '#212121cc',
    LIGHT: '#21212199',
    LIGHTER: '#21212166',
}

export const Mountains = ({ scrolled }) => (
    <Container scrolled={ scrolled }>
        <Mountain lighter flipped alt/>
        <Mountain lighter flipped/>
        <Mountain lighter alt/>
        <Mountain lighter/>

        <Mountain light/>
        <Mountain light flipped/>

        <Mountain dark/>
        <Mountain dark flipped/>

        <Mountain darker/>
        <Mountain darker flipped/>
    </Container>
);

const Mountain = styled.div`
    ${ Mixins.transition(['opacity'], Theme.speed.page) }
    ${ Mixins.position('absolute') }

    ${({ darker, flipped }) => darker ? `
        background-color: ${Colors.DARKER};
        height: 80vh;
        width: 200vh;
        transform: ${flipped ? `
            rotate(-45deg) translate3d(40vh, 40vw, 0)
        ` : `
            rotate(45deg) translate3d(-50vh, 90vh, 0)
        `};
    ` : ''}

    ${({ dark, flipped }) => dark ? `
        background-color: ${Colors.DARK};
        height: 80vh;
        width: 200vh;
        transform: ${flipped ? `
            rotate(-45deg) translate3d(-50vh, 30vw, 0)
        ` : `
            rotate(45deg) translate3d(45vh, 80vh, 0)
        `};
    ` : ''}

    ${({ light, flipped }) => light ? `
        background-color: ${Colors.LIGHT};
        height: 80vh;
        width: 200vh;
        transform: ${flipped ? `
            rotate(-45deg) translate3d(-80vh, 25vw, 0)
        ` : `
            rotate(45deg) translate3d(10vh, 70vh, 0)
        `};
    ` : ''}

    ${({ lighter, flipped, alt }) => lighter ? `
        background-color: ${Colors.LIGHTER};
        height: 80vh;
        width: 200vh;
        transform: ${flipped ? (
            alt ? `
                rotate(-45deg) translate3d(-40vh, 25vw, 0)
            ` : `
                rotate(-45deg) translate3d(-60vh, 20vw, 0)
            `
        ) : (
            alt ? `
                rotate(45deg) translate3d(25vh, 60vh, 0)
            ` : `
                rotate(45deg) translate3d(60vh, 55vh, 0)
            `
        )};
    ` : ''}
`;

const Container = styled.div`
    ${ Mixins.transition(['transform', 'opacity'], Theme.speed.page) }
    ${ Mixins.position('absolute') }
    overflow: hidden;
    ${({ scrolled }) => scrolled ? `
        transform: translate3d(0, 0, 0);
        opacity: 1;
    ` : `
        transform: translate3d(0, 60%, 0);
        opacity: 0;
    `}
`;