import rupture from 'rupture';
import en from './src/locale/en';

const { intro, aboutMe } = en;

const siteConfig = {
    siteMetadata: {
        title: 'Nikodermus',
        description: `${intro.pre} ${intro.post}. ${aboutMe.prev} debakatas ${aboutMe.post}`,
        author: '@nikodermus',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-62236338-1',
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['UA-62236338-1'],
                gtagConfig: {
                    optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                },
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'nikodermus.media',
                short_name: 'nikodermus',
                start_url: '/',
                background_color: '#eb2764',
                theme_color: '#eb2764',
                display: 'minimal-ui',
                icon: 'src/images/ba-favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-stylus',
            options: {
                use: [rupture()],
            },
        },
        'gatsby-plugin-offline',
    ],
};

export default siteConfig;
