import classnames from 'classnames';
import React from 'react';
import Pikachu from '../../assets/surprised_pikachu.png';
import AddToCalendar from './add-to-calendar';
import * as scss from './hero.module.scss';

function Hero() {
    return (
        <header className={classnames('hero', 'is-primary', 'is-large', scss.hero)}>
            <div className={classnames('hero-body', scss.heroBody)}>
                <div
                    className={classnames('container', 'has-text-centered', scss.container)}
                >
                    <img src={Pikachu} alt='surprised pikachu'/>
                    <h1 className='title'>
                        <span>we're getting married!</span>
                    </h1>
                    <h2 className={'subtitle'} style={{marginTop: '1rem'}}>
                        <AddToCalendar/>
                    </h2>
                </div>
            </div>
        </header>
    );
}

export default Hero;
