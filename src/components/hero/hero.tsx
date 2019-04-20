import classnames from 'classnames';
import React from 'react';
import * as scss from './hero.module.scss';
import Pikachu from '../../assets/surprised_pikachu.png';

function Hero() {
    return (
        <header className={classnames('hero', 'is-primary', 'is-large', scss.hero)}>
            <div className={classnames('hero-body', scss.heroBody)}>
                <div
                    className={classnames('container', 'has-text-centered', scss.container)}
                >
                    <img src={Pikachu} alt='surprised pikachu'/>
                    <h1 className={'title'}>
                        <span>We're getting married</span>&nbsp;
                        <span className={scss.bitches}>bitches</span>
                    </h1>
                    <h2 className={'subtitle'}>
                        <time dateTime='2019-10-27 00:00:00.000Z'>
                            2019-10-26 17:00
                        </time>
                    </h2>
                </div>
            </div>
        </header>
    );
}

export default Hero;
