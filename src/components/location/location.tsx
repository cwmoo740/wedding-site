import classnames from 'classnames';
import React from 'react';
import * as scss from './location.module.scss';
import altar from '../../assets/cloth_flame_altar.jpg';
import tables from '../../assets/cloth_flame_tables.jpg';

const mapbox_url = 'https://api.mapbox.com/styles/v1/cwmoo740/cjrpnma59559b2sqoowv1rf33/static/pin-l-circle+2cd2eb(-111.3488,33.3834)/-111.3488,33.3834,8,0/1080x794?access_token=pk.eyJ1IjoiY3dtb283NDAiLCJhIjoiY2pycGwyODV5MWZkejN5bDkxYjl0cjV4cSJ9.K6I-0OtTOiTAl0NOBWsklA';

function Location() {
    return (
        <section className={classnames('section', scss.section)}>
            <div className='container is-widescreen is-gapless'>
                <h1 className='title has-text-centered'>
                    Hosted by&nbsp;
                    <a href='https://clothandflame.com/'>Cloth & Flame</a>
                </h1>
                <div className='columns is-vcentered'>
                    <img style={{paddingTop: 0, paddingBottom: 0}} className='column' src={tables} alt='Dinner Tables'/>
                    <img style={{paddingTop: 0, paddingBottom: 0}} className='column' src={altar} alt='Wedding Venue'/>
                </div>
                <h1 className='title is-2 has-text-centered'>Phoenix, AZ</h1>
                <h2 className='subtitle is-2 has-text-centered'>Quarter Circle U Ranch</h2>
                <div className='columns'>
                    <a
                        style={{paddingTop: 0, paddingBottom: 0}}
                        href='https://goo.gl/maps/mVGTB6kneoC2'
                        className='column'
                    >
                        <img
                            style={{width: '100%'}}
                            className={scss.mapbox_image}
                            src={mapbox_url}
                            alt='Wedding Venue Map'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Location;
