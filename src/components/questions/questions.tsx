import React from 'react';
import {Question} from './common';

const questions: Question[] = [
    {
        answer: `No. We have enough things, and just want your company.
        If you still prefer to bring a gift, we would appreciate a card.`,
        id: 'gifts',
        question: 'Do you want any gifts?',
    },
    {
        answer: `Semi formal, but comfortable. We will be outdoors for entire wedding.
                 The weather is usually about 30°C (86°F) but could drop to 18°C (65°F) later at night.`,
        id: 'clothes',
        question: 'What should I wear?',
    },
    {
        answer: `Yes! Children are welcome but please list them in the RSVP or send us a message.
        Dogs are encouraged but must be on leash.`,
        id: 'children',
        question: 'Can I bring children or pets?',
    },
    {
        answer: `Yes, the ceremony and reception will all be outdoors
        surrounded by the Superstition Mountains.
        The temperature will vary during the event but is usually between 30°C (86°F) and 18°C (65°F).
        There will be a tent for shade. Wear comfortable shoes!`,
        id: 'outdoors',
        question: 'Is the wedding outdoors?',
    },
    {
        answer: `The venue itself is 6 miles down a dirt road that is driveable by a normal passenger car.
        There is some parking available on site, and we are looking into arranging a shuttle.
        Check back for more information on this closer to the wedding date.`,
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
