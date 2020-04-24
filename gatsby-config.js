import rupture from 'rupture';

const siteConfig = {
    siteMetadata: {
        title: 'emojit',
        description: 'Adivina películas, libros y más, solo con 🌵💻👽',
        author: '@nikodermus',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-62236338-3',
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['UA-62236338-3'],
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
                name: 'emojit.fun',
                short_name: 'emojit',
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
