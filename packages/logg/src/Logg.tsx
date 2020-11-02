import React from 'react';
import styles from './Logg.less';
import { Filter, Hendelse } from './types';
import classNames from 'classnames';
import { LoggListe } from './components/LoggListe';
import { LoggHeader } from './components/LoggHeader';
import { LoggProvider } from './LoggContext';

export interface LoggProps {
    hendelser: Hendelse[];
    filtere: Filter[];
    className?: string;
}

/** Viser meldinger og hendelser, f.eks. notater fra saksbehandlere, varselmeldinger, eller mottatte sykmeldinger/søknader.
 */
export const Logg = <T,>({ hendelser, filtere, className }: LoggProps) => (
    <div className={classNames(styles.container, className)}>
        <LoggProvider hendelser={hendelser} filtere={filtere}>
            <LoggHeader />
            <LoggListe />
        </LoggProvider>
    </div>
);
