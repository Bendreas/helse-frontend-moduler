import styled from '@emotion/styled';

const inactiveColor = '#78706a';
const activeColor = '#d7dae0';
const focusColor = '#ead744';

export const Container = styled('div')`
    position: relative;
`;

export const Søkeknapp = styled('button')`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    background: none;
    width: max-content;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover svg path,
    &:focus svg path {
        fill: ${activeColor};
    }

    &:active,
    &:focus {
        outline: none;
    }

    &:active svg path {
        fill: ${inactiveColor};
    }
`;

export const Søkefelt = styled('input')`
    background: transparent;
    height: calc(30px - 1rem);
    border: none;
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px ${inactiveColor};
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    font-size: 1rem;
    color: ${activeColor};

    &:hover {
        box-shadow: inset 0 0 0 1px ${activeColor};
    }

    &:active,
    &:focus {
        outline: none;
        box-shadow: inset 0 0 0 1px ${focusColor};
    }
`;
