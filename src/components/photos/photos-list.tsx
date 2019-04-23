import React from 'react';
import EngagementShoot from '../../assets/engagement_shoot.jpg';
import JeffAndCindy from '../../assets/jeff_and_cindy.jpg';
import MunichRiver from '../../assets/munich_river_desktop.jpg';
import Photo from './photo';

class PhotosList extends React.PureComponent {
    public render() {
        return (
            <section className='section' style={{padding: '1rem 0 0 0'}}>
                <div className='container is-widescreen is-gapless'>
                    <div className='columns is-vcentered'>
                        <Photo url={EngagementShoot}/>
                        <Photo url={MunichRiver}/>
                        <Photo url={JeffAndCindy}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default PhotosList;
