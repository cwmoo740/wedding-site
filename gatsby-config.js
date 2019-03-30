module.exports = {
    siteMetadata: {
        siteName: 'Jeff and Cindy',
    },
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
