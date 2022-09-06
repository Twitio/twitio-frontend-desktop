import React from 'react';
import Twit, { TwitProps } from './components/twit/Twit';

const twit = {
    header: {
        userName: "Abhinna",
        handle: "YaBinya",
        timestamp: 3
    },
    text: {
        text: "This is the first twit. I'm just writing something random to fill up the space and get some wrapping.I'm just writing something random to fill up the space and get some wrapping"
    }
} as TwitProps;

const twit2 = {
    header: {
        userName: "Adhikari",
        handle: "twitioHandle1",
        timestamp: 2
    },
    text: {
        text: "This is the second twit. I'm just writing something random to fill up the space and get some wrapping."
    }
} as TwitProps;

function App() {
    return (
        <div className="App">
            <h1>Twitio</h1>
            <Twit {...twit} />
            <Twit {...twit2} />
        </div>
    );
}

export default App;
