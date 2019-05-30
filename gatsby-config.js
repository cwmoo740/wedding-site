module.exports = {
    siteMetadata: {
        siteName: 'Jeff and Cindy',
    },
    pathPrefix: '/wedding-site',
    plugins: [
        'gatsby-plugin-typescript',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: require('sass'),
            },
        },
    ],
};
