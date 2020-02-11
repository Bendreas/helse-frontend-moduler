import React from 'react';
import { IconProps } from './types';

const IkonAdvarsel = ({ color = '#000', width = 17, height = 17 }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width - 1} height={height} viewBox="-1 0 26 26">
            <g stroke={color} strokeLinejoin="round" strokeWidth={2} strokeMiterlimit="10" fill="none">
                <path
                    strokeLinecap="round"
                    d="M22.498 12.31c.105 6.075-4.923 11.086-10.998 11.192-6.074.105-10.893-4.734-10.998-10.81-.106-6.073 4.924-11.085 10.998-11.19 6.074-.106 10.893 4.734 10.998 10.808zM11.5 14v-7"
                />
                <path d="M12 17.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z" fill={color} />
            </g>
        </svg>
    );
};

export default IkonAdvarsel;
