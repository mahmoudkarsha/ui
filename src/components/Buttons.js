import styled from "styled-components";

export const Button1 = styled.button`
    cursor: pointer;
    border: none;
    font-size: 1.5em;
    color: white;
    background-color: ${({ color }) => { return color }};
    padding: 10px 20px;
    margin: 10px;
    outline: 2px solid white;
    transition: outline-offset 500ms ease-in-out;

    &:hover, &:focus{
    outline-offset: -10px;
    }
`
export const Button2 = styled.button`
    cursor: pointer;
    border: 2px solid ${({ color }) => { return color }};
    color: ${({ color }) => { return color }};
    font-size: 1.5em;
    margin: 10px;
    padding: 0.5em 1.5em;
    background: 0;
    transition :color 300ms linear, background-color 300ms linear;

    &:hover{
        background-color: ${({ color }) => { return color }};
        color: #fff;
    }
`
export const Button3 = styled.button`
    cursor: pointer;
    position: relative;
    border: 2px solid ${({ color }) => { return color }};
    color: ${({ color }) => { return color }};

    isolation: isolate;
    font-size: 1.5em;
    margin: 10px;
    padding: 0.5em 1.5em;
    background: 0;
    transition :color 300ms linear, background-color 300ms linear;

    &:hover{
        color: #fff;
    }
    &::after{
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: ${({ color }) => { return color }} ;
        transform: scale(0, 1);
        transform-origin:  ${({ transformOrigin }) => { return transformOrigin || 'center'; }};
        transition: transform 300ms ease;
    }
    &:hover::after{
        transform: scale(1,1);
    }
`
export const Button4 = styled.button`
    cursor: pointer;
    position: relative;
    
    border: 2px solid ${({ color }) => { return color }};
    color: ${({ color }) => { return color }};

    isolation: isolate;
    font-size: 1.5em;
    margin: 10px;
    padding: 0.5em 1.5em;
    background: 0;
    transition :color 300ms linear, background-color 300ms linear;

    &:hover{
        color: #fff;
    }
    &::after{
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: ${({ color }) => { return color }} ;
        transform: scale(1, 0);
        transform-origin:  ${({ transformOrigin }) => { return transformOrigin || 'center'; }};
        transition: transform 300ms ease;
    }
    &:hover::after{
        transform: scale(1,1);
    }
`