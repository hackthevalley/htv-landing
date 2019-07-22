import React from 'react';
import { Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';

export const Container = React.forwardRef(({
    className,
    tag,
    contentTag,
    before,
    after,
    ...props
}, ref) => (
    <Wrapper as={tag} ref={ref} className={className}>
        {before}
        <Content as={contentTag} {...props} />
        {after}
    </Wrapper>
));

const Wrapper = styled.div`
    ${Mixins.flex('column', 'center')}
    box-sizing: border-box;
    padding: 0 20px;
`;

const Content = styled.div`
    box-sizing: border-box;
    max-width: 1300px;
    margin: auto;
    width: 100%;
`;
