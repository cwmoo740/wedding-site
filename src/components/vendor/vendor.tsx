import React from 'react';
import altar from '../../assets/cloth_flame_altar.jpg';
import tables from '../../assets/cloth_flame_tables.jpg';
import * as scss from './vendor.module.scss';
import classnames from 'classnames';

function Vendor() {
    return (
        <section className={classnames('section', scss.section)}>
            <div className='container is-widescreen is-gapless'>
                <h1 className='title has-text-centered'>
                    Hosted by&nbsp;
                    <a href='https://clothandflame.com/'>Cloth & Flame</a>
                </h1>
                <div className='columns is-vcentered' style={{margin: 0}}>
                    <div className='column' style={{padding: 0}}>
                        <img
                            style={{display: 'block'}}
                            src={tables}
                            alt='Dinner Tables'
                        />
                    </div>
                    <div className='column' style={{padding: 0}}>
                        <img
                            style={{display: 'block'}}
                            src={altar}
                            alt='Wedding Venue'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vendor;
