import React from 'react';
import Text, { TextProps } from './Text';
import Avatar from './Avatar';
import Header, { HeaderProps } from './Header';
import Button from './Button';
import './Twit.css';

export interface TwitProps {
    header: HeaderProps;
    text: TextProps;
}

const Twit = (props: TwitProps) => {
    return (
        <div className='twit'>
            <Avatar />
            <div className='twitContents'>
                <Header {...props.header}/>
                <Text {...props.text} />
                <Button />
            </div>
        </div>
    );
}

export default Twit;