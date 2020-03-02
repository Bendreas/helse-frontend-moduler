import React, { useContext } from 'react';
import { Status, Sykmeldingsperiode, kildelenke, StatusProps } from '../Perioderad';
import UtbetalingContext from './UtbetalingContext';
import styles from './Utbetalingsrad.less';
import SykmeldingContext from '../sykmeldingstabell/SykmeldingContext';
import { Kilde } from '../types';

interface UtbetalingProps extends StatusProps {
    i: number;
    utbetaling?: number;
}

export interface GraderingProps extends StatusProps {
    i: number;
    kilde?: Kilde;
    gradering?: number;
}

const Utbetaling = ({ utbetaling, i, status }: UtbetalingProps) => {
    const { overstyrer, oppdaterUtbetaling } = useContext(UtbetalingContext);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        oppdaterUtbetaling(i, parseInt(event.target.value));

    const renderUtbetaling = overstyrer ? (
        <input type="number" value={utbetaling || ''} onInput={onChange} />
    ) : (
        <span>{utbetaling && `${utbetaling} kr`}</span>
    );

    return (
        <div className={styles.utbetaling}>
            {renderUtbetaling}
            {status === 'advarsel' && (
                <a className={styles.oppgavelenke} href="#">
                    Gå til oppgave
                </a>
            )}
        </div>
    );
};

export const Gradering = ({ gradering, kilde, status, i }: GraderingProps) => {
    const { overstyrer, oppdaterGradering } = useContext(SykmeldingContext);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        oppdaterGradering(i, parseInt(event.target.value));

    const renderGradering = overstyrer ? (
        <input type="number" value={gradering || ''} onInput={onChange} />
    ) : (
        <span>{`${gradering}%`}</span>
    );

    return (
        <div className={styles.gradering}>
            {gradering !== undefined && renderGradering}
            {kilde && kildelenke(kilde)}
        </div>
    );
};

export default { Status, Sykmeldingsperiode, Gradering, Utbetaling };
