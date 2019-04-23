import React from 'react';
import Hero from '../components/hero';
import Location from '../components/location';
import PhotosList from '../components/photos';
import QuestionList from '../components/questions';
import Vendor from '../components/vendor';
import '../styles/base.scss';

function Index() {
    return (
        <React.Fragment>
            <Hero/>
            <Location/>
            <Vendor/>
            <QuestionList/>
            <PhotosList/>
        </React.Fragment>
    );
}

export default Index;
