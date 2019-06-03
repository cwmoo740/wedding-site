module.exports = {
    siteMetadata: {
        siteName: 'Jeff and Cindy',
    },
    pathPrefix: '/',
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
