import Select from '../packages/select';
import React from 'react';
import { Alternativ } from '../packages/select/Select';
import { withA11y } from '@storybook/addon-a11y';

export default {
    component: Select,
    title: 'Select',
    parameters: {
        componentSubtitle: 'Vedtaksperiodevelger-komponent for å velge vedtaksperiode.'
    },
    decorators: [withA11y]
};

export const select = () => {
    const perioder: Alternativ[] = [
        { value: '09.05.2017 - 19.05.2017', id: 1 },
        { value: '20.05.2017 - 20.06.2017', id: 2 },
        { value: '21.07.2017 - 13.08.2017', id: 3 },
        { value: '17.08.2017 - 05.09.2017', id: 4 },
        { value: '05.10.2017 - 05.11.2017', id: 5 },
        { value: '11.11.2017 - 14.11.2017', id: 6 },
        { value: '15.11.2017 - 01.12.2017', id: 7 },
        { value: '24.12.2017 - 01.01.2018', id: 8 }
    ];
    return (
        <div>
            <Select alternativer={perioder} />
            <p>Dummy-tekst for å verifisere at dropdown-effekten fungerer som den skal.</p>
        </div>
    );
};
