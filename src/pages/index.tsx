import React from 'react';
import Hero from '../components/hero';
import Location from '../components/location';
import {pizzazz, clear} from '../common/unicorns';
import '../styles/base.scss';

function Index() {
    clear();
    pizzazz(0, 0);
    return (
        <React.Fragment>
            <Hero/>
            <Location/>
        </React.Fragment>
    );
}

export default Index;
