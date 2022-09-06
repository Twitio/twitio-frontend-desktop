import React from 'react';
import './Twit.css';

export interface TextProps {
    text: string;
}

const Text = (props: TextProps) => {
    return (
        <div className='text'> {props.text} </div>
    );
}

export default Text;