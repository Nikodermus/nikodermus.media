import React, { useEffect } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { useLocalState } from '../utils/hooks';
import SEO from '../components/SEO';
import { translate, availableLanguages } from '../utils/i18n';

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
                : navigator?.languages.find((l) =>
                    availableLanguages.includes(l)
                ) || 'en'
        );
    }, [setLanguage]);

    const a = translate('seo', language);
    console.log(a);

    return (
        <>
            <div>nikodermus</div>
            <SEO
                // description={`${description} 🌵💻👽`}
                // title={`${title} 🌵💻👽`}
                lang={language}
            />
        </>
    );
};

export default IndexPage;
