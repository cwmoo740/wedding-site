import React from 'react';

export interface Props {
    htmlAttributes: any;
    headComponents: any[];
    bodyAttributes: any;
    preBodyComponents: any[];
    body: string;
    postBodyComponents: any[];

}

export default function HTML(props: Props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            <meta charSet='utf-8'/>
            <meta httpEquiv='x-ua-compatible' content='ie=edge'/>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />

            <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'/>
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
            <link rel='manifest' href='/site.webmanifest'/>
            <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5'/>
            <meta name='msapplication-TileColor' content='#da532c'/>
            <meta name='theme-color' content='#ffffff'/>

            <title>Cynthia and Jeffrey</title>
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
            This app works best with JavaScript enabled.
        </noscript>
        <div
            key={`body`}
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        </body>
        </html>
    );
}
