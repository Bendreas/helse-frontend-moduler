import React, { useState } from 'react';
import { Periode, Sykepengeperiode, Sykepengetidslinje, Vedtaksperiodetilstand } from './src';

export default {
    title: 'Tidslinje/Sykepengetidslinje',
    component: Sykepengetidslinje
};

export const TidslinjeForSykepenger = () => {
    const [rader, setRader] = useState<Sykepengeperiode[][]>([
        [
            {
                id: '123',
                fom: new Date('2020-01-01'),
                tom: new Date('2020-01-31'),
                status: Vedtaksperiodetilstand.Annullert
            },
            {
                id: '234',
                fom: new Date('2020-02-01'),
                tom: new Date('2020-02-29'),
                status: Vedtaksperiodetilstand.Utbetalt
            },
            {
                id: '345',
                fom: new Date('2020-03-01'),
                tom: new Date('2020-03-31'),
                status: Vedtaksperiodetilstand.Utbetalt
            },
            {
                id: '456',
                fom: new Date('2020-07-01'),
                tom: new Date('2020-07-31'),
                status: Vedtaksperiodetilstand.Utbetalt
            },
            {
                id: '567',
                fom: new Date('2020-08-01'),
                tom: new Date('2020-08-31'),
                status: Vedtaksperiodetilstand.Oppgaver
            }
        ],
        [
            {
                id: '678',
                fom: new Date('2020-02-01'),
                tom: new Date('2020-02-29'),
                disabled: true,
                disabledLabel: 'Dette er en ferieperiode fra Infotrygd',
                status: Vedtaksperiodetilstand.Infotrygdferie
            },
            {
                id: '789',
                fom: new Date('2020-03-01'),
                tom: new Date('2020-03-31'),
                disabled: true,
                disabledLabel: 'Dette er en ferieperiode fra Infotrygd',
                status: Vedtaksperiodetilstand.Infotrygdferie
            }
        ]
    ]);

    const [aktivPeriode, setAktivPeriode] = useState<Periode>();

    const onSelectPeriode = (periode: Periode) => {
        setAktivPeriode(periode);
        setRader(rader => rader.map(rad => rad.map(p => ({ ...p, active: periode.id === p.id }))));
    };

    const aktivRad =
        aktivPeriode &&
        rader.reduce(
            (radIndex: number, rad: Sykepengeperiode[], i: number) =>
                rad.find(({ id }) => id === aktivPeriode.id) ? i : radIndex,
            undefined
        );

    return (
        <Sykepengetidslinje
            startDato={new Date('2018-04-01')}
            onSelectPeriode={onSelectPeriode}
            rader={rader}
            aktivRad={aktivRad}
        />
    );
};
