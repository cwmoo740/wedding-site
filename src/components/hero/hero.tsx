import classnames from 'classnames';
import React from 'react';
import * as scss from './hero.module.scss';

function Hero() {
    return (
        <header className={classnames('hero', 'is-primary', 'is-large', scss.hero)}>
            <div className={'hero-body'}>
                <div className={classnames('container', 'has-text-centered')}>
                    <h1 className={'title'}>
                        <span>We're getting married</span>&nbsp;
                        <span className={scss.bitches}>bitches</span>
                    </h1>
                    <h2 className={'subtitle'}>
                        <time>2019-10-26</time>
                    </h2>
                </div>
            </div>
        </header>
    );
}

export default Hero;
