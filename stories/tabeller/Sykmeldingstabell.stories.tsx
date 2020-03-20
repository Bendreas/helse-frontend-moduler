import React, { useState } from 'react';
import { Dag, Dagtype, Sykmeldingstabell } from '../../packages/tabell/periodetabell';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    component: Sykmeldingstabell,
    title: 'Tabeller/Sykmeldingstabell',
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: 'Tabell for visning av vedtaksperiode'
    }
};

export const enkelSykmeldingstabell = () => {
    const dager: Dag[] = [
        { type: Dagtype.Egenmelding, dato: '19.02.2019', gradering: 100, kilde: { label: 'IM' } },
        { type: Dagtype.Syk, dato: '20.02.2019', gradering: 100, kilde: { label: 'SM' } },
        { type: Dagtype.Syk, dato: '21.02.2019', gradering: 100, kilde: { label: 'SM' } },
        { type: Dagtype.Syk, dato: '22.02.2019', gradering: 100, kilde: { label: 'SM' } },
        { type: Dagtype.Helg, dato: '23.02.2019' },
        { type: Dagtype.Helg, dato: '24.02.2019' },
        { type: Dagtype.Syk, dato: '25.02.2019', gradering: 100, kilde: { label: 'SM' } },
        { type: Dagtype.Syk, dato: '26.02.2019', gradering: 100, kilde: { label: 'SM' } },
        { type: Dagtype.Ferie, dato: '27.02.2019', gradering: 100, kilde: { label: 'IM' } },
        { type: Dagtype.Ferie, dato: '28.02.2019', gradering: 100, kilde: { label: 'IM' } }
    ];

    return <Sykmeldingstabell dager={object('Dager', dager)} />;
};

export const medAktiveKildelenker = () => {
    const dager: Dag[] = [
        {
            type: Dagtype.Egenmelding,
            dato: '19.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '20.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '21.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '22.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        { type: Dagtype.Helg, dato: '23.02.2019' },
        { type: Dagtype.Helg, dato: '24.02.2019' },
        {
            type: Dagtype.Syk,
            dato: '25.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '26.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Ferie,
            dato: '27.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Ferie,
            dato: '28.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        }
    ];

    return <Sykmeldingstabell dager={object('Dager med aktive kildelenker', dager)} />;
};

export const medAktivOppgave = () => {
    const dager: Dag[] = [
        {
            type: Dagtype.Egenmelding,
            dato: '19.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '20.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '21.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '22.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        { type: Dagtype.Helg, dato: '23.02.2019' },
        { type: Dagtype.Helg, dato: '24.02.2019' },
        {
            type: Dagtype.Ubestemt,
            dato: '25.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' },
            status: 'advarsel'
        },
        {
            type: Dagtype.Ubestemt,
            dato: '26.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' },
            status: 'advarsel'
        },
        {
            type: Dagtype.Ferie,
            dato: '27.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Ferie,
            dato: '28.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        }
    ];

    return <Sykmeldingstabell dager={object('Dager med uløst status', dager)} />;
};

export const medFerdigOppgave = () => {
    const dager: Dag[] = [
        {
            type: Dagtype.Egenmelding,
            dato: '19.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '20.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '21.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '22.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        { type: Dagtype.Helg, dato: '23.02.2019' },
        { type: Dagtype.Helg, dato: '24.02.2019' },
        {
            type: Dagtype.Syk,
            dato: '25.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' },
            status: 'løst'
        },
        {
            type: Dagtype.Syk,
            dato: '26.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' },
            status: 'løst'
        },
        {
            type: Dagtype.Ferie,
            dato: '27.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Ferie,
            dato: '28.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        }
    ];

    return <Sykmeldingstabell dager={object('Dager med løst status', dager)} />;
};

export const medManuellOverstyring = () => {
    const initialDager: Dag[] = [
        {
            type: Dagtype.Egenmelding,
            dato: '19.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '20.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '21.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '22.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        { type: Dagtype.Helg, dato: '23.02.2019' },
        { type: Dagtype.Helg, dato: '24.02.2019' },
        {
            type: Dagtype.Syk,
            dato: '25.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Syk,
            dato: '26.02.2019',
            gradering: 100,
            kilde: { label: 'SM', link: '#' }
        },
        {
            type: Dagtype.Ferie,
            dato: '27.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        },
        {
            type: Dagtype.Ferie,
            dato: '28.02.2019',
            gradering: 100,
            kilde: { label: 'IM', link: '#' }
        }
    ];
    const [dager, setDager] = useState(initialDager);

    return <Sykmeldingstabell dager={dager} setDager={setDager} />;
};
