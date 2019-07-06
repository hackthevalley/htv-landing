import React from 'react';
import styled from 'styled-components';
import { Container as C } from '@components';

export const Home = () => <Container tag="section">Home</Container>;

Home.nav = {
    path: '/#',
    name: 'Home',
};

const Container = styled(C)``;
