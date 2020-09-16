import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/nb';
import { Percentage, Skalaetikett } from '../types.internal';
import styles from './Skalaetiketter.less';
import classNames from 'classnames';
import { breddeMellomDatoer } from './calc';
import { erSynlig } from './filter';

dayjs.locale('nb');

export const posisjonFraVenstre = (dato: Dayjs, tidslinjeStart: Dayjs, tidslinjeSlutt: Dayjs): Percentage => {
    const dagerEtterDato = tidslinjeSlutt.diff(dato, 'day');
    const antallTidslinjedager = tidslinjeSlutt.diff(tidslinjeStart, 'day');
    return (dagerEtterDato / antallTidslinjedager) * 100;
};

const formatertDag = (dato: Dayjs): string => dato.format('DD.MM');

const formatertMåned = (dato: Dayjs): string => {
    const månedLabel = dato.format('MMM');
    return månedLabel[0].toUpperCase().concat(månedLabel.slice(1, 3));
};

const formatertÅr = (dato: Dayjs): string => `${dato.year()}`;

export const dagsetiketter = (
    start: Dayjs,
    slutt: Dayjs,
    totaltAntallDager: number,
    direction: 'left' | 'right'
): Skalaetikett[] => {
    const inkrement = Math.ceil(totaltAntallDager / 10);
    const sisteDag = slutt.startOf('day');
    return new Array(totaltAntallDager)
        .fill(sisteDag)
        .map((denneDagen, i) => {
            if (i % inkrement !== 0) return null;
            const dag: Dayjs = denneDagen.subtract(i, 'day');
            return {
                direction: direction,
                horizontalPosition: breddeMellomDatoer(dag, slutt, totaltAntallDager),
                label: formatertDag(dag),
                dato: dag.toDate()
            };
        })
        .filter(etikett => etikett !== null) as Skalaetikett[];
};

export const månedsetiketter = (
    start: Dayjs,
    slutt: Dayjs,
    totaltAntallDager: number,
    direction: 'left' | 'right'
): Skalaetikett[] => {
    const startmåned = start.startOf('month');
    const sluttmåned = slutt.startOf('month');
    const førsteMåned = startmåned.add(1, 'month');
    const antallMåneder = sluttmåned.diff(startmåned, 'month');
    return new Array(antallMåneder).fill(førsteMåned).map((denneMåneden, i) => {
        const måned: Dayjs = denneMåneden.add(i, 'month');
        return {
            direction: direction,
            horizontalPosition: breddeMellomDatoer(måned, slutt, totaltAntallDager),
            label: formatertMåned(måned),
            dato: måned.toDate()
        };
    });
};

export const årsetiketter = (
    start: Dayjs,
    slutt: Dayjs,
    totaltAntallDager: number,
    direction: 'left' | 'right'
): Skalaetikett[] => {
    const førsteÅr = start.startOf('year');
    const antallÅr = Math.ceil(slutt.diff(start, 'year', true)) + 1;
    return new Array(antallÅr).fill(førsteÅr).map((detteÅret, i) => {
        const år: Dayjs = detteÅret.add(i, 'year');
        return {
            direction: direction,
            horizontalPosition: breddeMellomDatoer(år, slutt, totaltAntallDager),
            label: formatertÅr(år),
            dato: år.toDate()
        };
    });
};

const skalaEtiketter = (start: Dayjs, slutt: Dayjs, direction: 'left' | 'right'): Skalaetikett[] => {
    const totaltAntallDager = slutt.diff(start, 'day');
    if (totaltAntallDager < 40) {
        return dagsetiketter(start, slutt, totaltAntallDager, direction);
    } else if (totaltAntallDager < 370) {
        return månedsetiketter(start, slutt, totaltAntallDager, direction);
    } else {
        return årsetiketter(start, slutt, totaltAntallDager, direction);
    }
};

interface SkalaetiketterProps {
    start: Dayjs;
    slutt: Dayjs;
    direction?: 'left' | 'right';
    EtikettKomponent?: React.ComponentType<{ etikett: Skalaetikett; style: { [key: string]: string } }>;
}

const Skalaetiketter = ({ start, slutt, direction = 'left', EtikettKomponent }: SkalaetiketterProps) => {
    const etiketter = skalaEtiketter(start, slutt, direction).filter(erSynlig);
    return (
        <div className={classNames('skalaetiketter', styles.skalaetiketter)}>
            {etiketter.map(etikett =>
                EtikettKomponent ? (
                    <EtikettKomponent
                        key={etikett.label}
                        etikett={etikett}
                        style={{ [direction]: `${etikett.horizontalPosition}%` }}
                    />
                ) : (
                    <div
                        key={etikett.label}
                        className={classNames(styles.etikett, direction === 'right' && styles.directionRight)}
                        style={{ [direction]: `${etikett.horizontalPosition}%` }}
                    >
                        {etikett.label}
                    </div>
                )
            )}
        </div>
    );
};

export default Skalaetiketter;
