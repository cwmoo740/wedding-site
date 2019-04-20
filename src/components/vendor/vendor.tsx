import React from 'react';
import altar from '../../assets/cloth_flame_altar.jpg';
import tables from '../../assets/cloth_flame_tables.jpg';
import * as scss from './vendor.module.scss';
import classnames from 'classnames';

function Vendor() {
    return (
        <section className={classnames('sections', scss.section)}>
            <div className='container is-widescreen is-gapless'>
                <h1 className='title has-text-centered'>
                    Hosted by&nbsp;
                    <a href='https://clothandflame.com/'>Cloth & Flame</a>
                </h1>
                <div className='columns is-vcentered'>
                    <img
                        style={{paddingTop: 0, paddingBottom: 0}}
                        className='column'
                        src={tables}
                        alt='Dinner Tables'
                    />
                    <img
                        style={{paddingTop: 0, paddingBottom: 0}}
                        className='column'
                        src={altar}
                        alt='Wedding Venue'
                    />
                </div>
            </div>
        </section>
    );
}

export default Vendor;
