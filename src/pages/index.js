import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { translate, availableLanguages } from '../utils/i18n';
import { useLocalState } from '../utils/hooks';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Me from '../components/Me';
import Description from '../components/Description';

const PageContainer = styled.main`
    display: flex;
    flex-grow: 1;
    height: 100vh;
    position: relative;
`;

const IndexPage = () => {
    // Find the first language that exists in our data
    const [language, setLanguage] = useLocalState('language', 'en');

    useEffect(() => {
        trackCustomEvent({
            category: 'website',
            action: 'pageview',
            label: 'initial view',
        });

        const local = localStorage.getItem('language');
        setLanguage(
            local
                ? JSON.parse(local)
                : navigator.languages.find((l) =>
                      availableLanguages.includes(l)
                  ) || 'en'
        );
    }, [setLanguage]);

    const [intro, aboutMe] = translate(['intro', 'aboutMe'], language);

    return (
        <PageContainer>
            <Me />
            <Description
                intro={intro}
                aboutMe={aboutMe}
                setLanguage={setLanguage}
                language={language}
            />
            <Footer />
            <SEO
                description={`${intro.pre} ${intro.post}. ${aboutMe.prev} debakatas ${aboutMe.post}`}
                title="Nicolas M. Pardo"
                lang={language}
            />
        </PageContainer>
    );
};

export default IndexPage;
