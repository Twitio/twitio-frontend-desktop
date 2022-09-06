import React from 'react';
import './Twit.css';

const Button = () => {
    return (
        <span className='header'>
            <span>
                <img 
                    src={"/comment_icon.png"}
                    alt="twit comment button"
                    className="button"
                />
            </span>
            <span>
                <img 
                    src={"/retwit_icon.png"}
                    alt="twit retwit button"
                    className="button"
                />
            </span>
            <span>
                <img 
                    src={"/star_icon_default.png"}
                    alt="twit favorite button"
                    className="button"
                />
            </span>
            <span>
                <img 
                    src={"/share_icon.png"}
                    alt="twit share button"
                    className="button"
                />
            </span>
        </span>
    );
}

export default Button;