import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate,
} from 'react-addons-test-utils';
import { expect } from 'chai';

import Vote from '../../../app/components/Vote';

describe('Vote', () => {
    it('renders a pair of buttons', () => {

        const component = renderIntoDocument(
            <Vote pair={[ 'Trainspotting', '28 Days Later' ]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;

        const component = renderIntoDocument(
            <Vote
                pair={[ 'Trainspotting', '28 Days Later' ]}
                vote={(entry) => votedWith = entry}
            />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(votedWith).to.equal('Trainspotting');
    });
});