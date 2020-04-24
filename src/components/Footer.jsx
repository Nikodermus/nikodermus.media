import React from 'react';
import styled from 'styled-components';
import bogotazo from '../images/bogotazo.png';
import gh from '../images/gh.svg';
import fb from '../images/fb.svg';
import lin from '../images/in.svg';
import { dumbCasing } from '../utils/string';
import { footerHeight } from '../utils/css';

const StyledFooter = styled.footer`
    background: url(${bogotazo});
    background-repeat: repeat-x;
    background-position: top left;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 2rem;
    height: ${footerHeight}px;
    text-align: center;
    font-size: 3rem;
    z-index: 10;
`;

const FooterHeader = styled.h2`
    font-family: 'earwig_factoryregular';
`;

const SocialImg = styled.a`
    margin-right: 0.5rem;

    &:last-of-type {
        margin-right: 0;
    }

    img {
        transform: rotate(0deg);
        &:hover {
            transform: rotate(9deg);
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <FooterHeader>{dumbCasing('nikodermus')}</FooterHeader>
        <SocialImg
            href="https://www.facebook.com/Nikodermus"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img src={fb} alt="Facebook" />
        </SocialImg>
        <SocialImg
            href="https://github.com/nikodermus/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img src={gh} alt="GitHub" />
        </SocialImg>
        <SocialImg
            href="https://www.linkedin.com/in/nikodermus/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img src={lin} alt="LinkedIn" />
        </SocialImg>
    </StyledFooter>
);

export default Footer;
