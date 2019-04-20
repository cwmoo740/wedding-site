import React from 'react';
import Hero from '../components/hero';
import Location from '../components/location';
import Vendor from '../components/vendor';
import '../styles/base.scss';

function Index() {
    return (
        <React.Fragment>
            <Hero/>
            <Location/>
            <Vendor/>
        </React.Fragment>
    );
}

export default Index;
