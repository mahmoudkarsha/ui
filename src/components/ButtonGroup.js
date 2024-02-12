import React from 'react'
import { Button1, Button2, Button3, Button4, Button5 } from './Buttons';
import './button.css'

const ButtonGroup = () => {
    return (
        <div>
            <Button1 color="#40A2D8">hi</Button1>
            <Button1 color="#0B60B0">hello</Button1>
            <Button1 color="#F3B95F">welcome</Button1>
            <br />
            <Button2 color="#D04848">hi</Button2>
            <Button2 color="#6895D2">hello</Button2>
            <Button2 color="#74E291">welcome</Button2>
            <br />
            <Button3 color="#211951" origin="center">hi</Button3>
            <Button3 color="#836FFF" origin="left">hello</Button3>
            <Button3 color="#15F5BA" origin="right">welcome</Button3>
            <br />
            <Button4 color="#211951" origin="center">hi</Button4>
            <Button4 color="#836FFF" origin="top">hello</Button4>
            <Button4 color="#15F5BA" origin="bottom">welcome</Button4>
            <br />
            <Button5>Button</Button5>
            <br />
            <ul>
                <li>
                    <a href='#rr' className='button-6'>Home</a>
                </li>
                <li>
                    <a href='#rr' className='button-6'>About</a>
                </li>
                <li>
                    <a href='#rr' className='button-6'>Main</a>
                </li>
            </ul>
        </div>
    )
}

export default ButtonGroup
