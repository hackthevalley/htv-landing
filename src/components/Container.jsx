import React from 'react';
import { Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';

export const Container = ({
    className,
    contentClassName,
    tag,
    contentTag,
    before,
    after,
    ...props
}) => (
    <Wrapper as={tag} className={className}>
        {before}
        <Content as={contentTag} className={contentClassName} {...props} />
        {after}
    </Wrapper>
);

const Wrapper = styled.div`
    ${Mixins.flex('column', 'center')}
    box-sizing: border-box;
    padding: 0 10px;
`;

const Content = styled.div`
    box-sizing: border-box;
    max-width: 1300px;
    margin: auto;
    width: 100%;
`;
