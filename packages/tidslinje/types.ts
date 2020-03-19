export type Inntektstype = 'arbeidsgiver' | 'ytelse';

export interface Vedtaksperiode {
    id: string;
    fom: string;
    tom: string;
    status: Vedtaksperiodetilstand;
    disabled?: boolean;
}

export type Intervall = Vedtaksperiode;

export interface EnkelTidslinje {
    id: string;
    inntektsnavn: string;
    inntektstype: Inntektstype;
    vedtaksperioder: Vedtaksperiode[];
}

export interface SammensattTidslinje {
    tidslinjer: EnkelTidslinje[];
}

export enum Skalastørrelse {
    HalvtÅr = 6,
    EttÅr = 12,
    TreÅr = 36
}

export enum Vedtaksperiodetilstand {
    TilUtbetaling = 'tilUtbetaling',
    Utbetalt = 'utbetalt',
    Oppgaver = 'oppgaver',
    Venter = 'venter',
    Avslag = 'avslag',
    IngenUtbetaling = 'ingenUtbetaling',
    Ukjent = 'ukjent',
    Feilet = 'feilet'
}

export interface Skalapunkt {
    dato: string;
    navn: string;
}

export interface TidslinjeProps {
    tidslinjer: EnkelTidslinje[];
    onSelect: (selected?: Intervall) => void;
}
