import React from 'react';
import styled from 'styled-components';
import { footerHeight } from '../utils/css';
import nico from '../images/nico.png';
import { dumbCasing } from '../utils/string';

const NicoContainer = styled.figure`
    display: flex;
    flex: 3;
    position: relative;
    align-items: center;
    justify-content: flex-start;
`;

const Header = styled.h1`
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    display: flex;
    flex-direction: column;
    font-family: 'earwig_factoryregular';
    align-items: center;
    font-size: 10vmin;
    line-height: 0.8;
    padding-top: ${footerHeight / 2}px;
    position: relative;
    z-index: 1;
    padding-right: 10%;

    .top {
        color: black;
        position: relative;
        z-index: 1;
    }
`;

const NicoImg = styled.img`
    position: absolute;
    bottom: ${footerHeight - 80}px;
    left: 50%;
    transform: translateX(-50%);
    width: 50vmax;
    max-width: 800px;
`;

const Me = () => (
    <NicoContainer>
        <Header>
            <span className="top">{dumbCasing('Nicolas')}</span>
            <span>{dumbCasing('M. Pardo')}</span>
        </Header>
        <NicoImg src={nico} alt="" />
    </NicoContainer>
);

export default Me;
