import React from 'react';
import {Question} from './common';

const questions: Question[] = [
    {
        answer: 'No. We have enough things, and just want your company.',
        id: 'gifts',
        question: 'Do you want any gifts?',
    },
    {
        answer: `Semi formal, but comfortable.
                 The weather is usually about 30°C (86°F) but could drop to 18°C (65°F) later at night.`,
        id: 'clothes',
        question: 'What should I wear?',
    },
    {
        answer: 'Yes! Children are welcome but please list them in the RSVP. Dogs are encouraged but must be on leash.',
        id: 'children',
        question: 'Can I bring children or pets?',
    },
    {
        answer: `Yes, the ceremony and reception will all be outdoors
        surrounded by the Superstition Mountains. Wear comfortable shoes!`,
        id: 'outdoors',
        question: 'Is the wedding outdoors?',
    },
    {
        answer: 'Check back for more information on this closer to the wedding date.',
        id: 'shuttle',
        question: 'How do I get to the venue?',
    },
    {
        answer: (
            <div style={{display: 'flex', flexFlow: 'column'}}>
                <h3 style={{fontWeight: 'bold'}}>Closest (10 minutes)</h3>
                <a href='https://goo.gl/maps/CPoZqQ1uxJzV8GqF8' target='_blank'>Gold Canyon Golf Resort & Spa</a>
                <a href='https://goo.gl/maps/dLHsMTmSdwo5Qnu5A' target='_blank'>Best Western Gold Canyon</a>
                <h3 style={{fontWeight: 'bold'}}>Medium (30 minutes)</h3>
                <a href='https://goo.gl/maps/kqeaXG5n2G4CRpD66' target='_blank'>Saguaro Lake Guest Ranch</a>
                <a href='https://goo.gl/maps/nqDyJpUsiru1Kast9' target='_blank'>Marriot Courtyard (next to airport)</a>
                <a href='https://goo.gl/maps/ojGpjRiKwwCg4JGR9' target='_blank'>Airbnb or Hotel in Gilbert, AZ</a>
                <h3 style={{fontWeight: 'bold'}}>Downtown Phoenix (60 minutes)</h3>
            </div>
        ),
        id: 'hotel',
        question: 'Where do I stay?',
    },
];

export default questions;
