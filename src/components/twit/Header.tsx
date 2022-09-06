import React from 'react';
import './Twit.css';

export interface HeaderProps {
    userName: string;
    handle: string;
    timestamp: number;
}

const Header = (props: HeaderProps) => {
    return (
        <span className='header'>
            <UserNameToTwitUserName {...props} />
            <HandleToTwitHandle {...props} />
            <TimestampToTwitTime {...props} />
        </span>
    );
}

const UserNameToTwitUserName = ({userName}: HeaderProps) => {
    return (
        <span className='userName'>{userName}</span>
    );
}
const HandleToTwitHandle = ({handle}: HeaderProps) => {
    return (
        <span className='handle'>@{handle}</span>
    );
}

const TimestampToTwitTime = ({timestamp}: HeaderProps) => {
    return (
        <span className='time'> {timestamp.toString()}h ago </span>
    );
}

export default Header;