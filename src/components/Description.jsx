import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { footerHeight } from '../utils/css';
import paper from '../images/paper.png';

const TextContainer = styled.div`
    text-align: center;
    display: inline-flex;
    align-content: flex-start;
    justify-content: center;
    flex-direction: column;
    font-size: 1.25rem;
    transform: rotate(2deg);
    max-height: calc(100vh - ${footerHeight / 2}px);
    flex: 2;

    p {
        width: 400px;
        margin-bottom: 1rem;
    }
`;

const LanguageSwitch = styled.div`
    height: 60px;
    width: 60px;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #464646;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: '.';
    transform-style: preserve-3d;
    transform: translateX(-50%) rotateY(${({ front }) => (front ? 0 : 180)}deg);
    backface-visibility: hidden;
    position: relative;
    left: 200px;

    .front,
    .back {
        backface-visibility: hidden;
        transform-style: preserve-3d;
        grid-row: 1;
        grid-column: 1;
        background-image: url(${paper});
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .back {
        transform: rotateY(180deg);
    }
`;

const Link = styled.a`
    font-weight: bold;
    text-decoration: underline;
`;

const Description = ({ intro, aboutMe, setLanguage, language }) => (
    <TextContainer>
        <p>
            <strong>{intro.pre}</strong> {intro.post}
        </p>
        <p>
            {aboutMe.pre}{' '}
            <Link
                href="http://debakatas.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                debakatas.com
            </Link>{' '}
            {aboutMe.post}
        </p>
        <LanguageSwitch
            onClick={(e) => {
                e.preventDefault();
                setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
            }}
            front={language === 'en'}
        >
            <div className="back">EN</div>
            <div className="front">ES</div>
        </LanguageSwitch>
    </TextContainer>
);

Description.propTypes = {
    aboutMe: PropTypes.shape({
        post: PropTypes.string.isRequired,
        pre: PropTypes.string.isRequired,
    }),
    intro: PropTypes.shape({
        post: PropTypes.string.isRequired,
        pre: PropTypes.string.isRequired,
    }),
    language: PropTypes.string,
    setLanguage: PropTypes.func,
};

export default Description;
