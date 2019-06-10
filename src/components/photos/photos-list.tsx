import React from 'react';
import MunichRiver from '../../assets/munich_river.jpg';
import Stanford from '../../assets/stanford.jpg';
import Zugspitze from '../../assets/zugspitze.jpg';
import Photo from './photo';

class PhotosList extends React.PureComponent {
    public render() {
        return (
            <section className='section' style={{padding: '1rem 0 0 0'}}>
                <div className='container is-widescreen is-gapless'>
                    <div className='columns is-vcentered' style={{margin: 0}}>
                        <Photo url={MunichRiver}/>
                        <Photo url={Stanford}/>
                        <Photo url={Zugspitze}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default PhotosList;
