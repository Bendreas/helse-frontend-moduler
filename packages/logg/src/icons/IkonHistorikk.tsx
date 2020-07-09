import React from 'react';
import { Ikon, IkonProps } from './Ikon';

export const IkonHistorikk = ({ width = 20, height = 20 }: IkonProps) => {
    return (
        <Ikon width={width} height={height} viewBox={24}>
            <path d="m20.661 4.822c-2.05-1.912-4.721-2.914-7.527-2.815-2.92 0.103-5.71 1.466-7.653 3.74-1.253 1.467-2.062 3.201-2.39 5.063l-1.252-1.886c-0.306-0.46-0.926-0.586-1.387-0.279-0.46 0.305-0.586 0.926-0.279 1.386l2.991 4.506c0.357 0.566 1.221 0.598 1.634 0.049l3.457-3.935c0.365-0.415 0.324-1.047-0.091-1.412-0.416-0.364-1.047-0.323-1.412 0.091l-1.705 1.94c0.255-1.556 0.913-3.006 1.954-4.224 1.58-1.85 3.841-2.957 6.202-3.04 2.269-0.083 4.433 0.73 6.094 2.279 1.66 1.549 2.618 3.65 2.697 5.92 0.08 2.269-0.729 4.433-2.277 6.094-1.549 1.66-3.652 2.618-5.921 2.697-0.552 0.02-0.983 0.482-0.965 1.034 0.019 0.54 0.462 0.965 1 0.965h0.035c2.803-0.098 5.401-1.281 7.312-3.332 1.915-2.052 2.914-4.726 2.815-7.527-0.098-2.804-1.282-5.401-3.332-7.314z" />
            <path d="m13.002 6.494c-0.552 0-1 0.448-1 1v6.507h6.496c0.552 0 1-0.448 1-1 0-0.553-0.448-1-1-1h-4.496v-4.507c0-0.552-0.447-1-1-1z" />
        </Ikon>
    );
};