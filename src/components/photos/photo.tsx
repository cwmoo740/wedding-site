import React from 'react';

export interface Props {
    url: string;
}

function Photo({url}: Props) {
    return (
        <img
            src={url}
            alt='jeff and cindy'
            style={{padding: '0px'}}
            className='column'
        />
    );
}

export default Photo;
