import React from 'react';
import styled from 'styled-components';
import { Container as C } from '@components';

export const About = () => <Container tag="section">About</Container>;

About.nav = {
    to: '/#about',
    name: 'About',
};

const Container = styled(C)``;
