import React from 'react';

export interface Props {
    url: string;
}

function Photo({url}: Props) {
    return (
        <div className='column' style={{padding: 0}}>
            <img
                style={{padding: 0, display: 'block'}}
                src={url}
                alt='jeff and cindy'
            />
        </div>
    );
}

export default Photo;
