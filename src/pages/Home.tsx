import React, {useState} from 'react';
import {FullScreen} from "../styled-components/FullScreen";
import {BigCard} from "../styled-components/BigCard";
import {CornerButton} from "../styled-components/CornerButton";

const Home = () => {
    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        (clicked) ? setClicked(false) : setClicked(true);
    }

    return (
        <FullScreen>
            <BigCard
                style={{
                    animation: (clicked) ? 'turn .5s linear forwards' : 'around .5s linear forwards'
                }}
            >
                <h1>Host</h1>
                <h3>{'Invite your friends'.toUpperCase()}</h3>
                <h2>Host a room then send the link</h2>
                <CornerButton
                    onClick={handleClick}
                >
                    <h4>{'Create'.toUpperCase()}</h4>
                </CornerButton>
            </BigCard>
            <BigCard>
                <h1>Join</h1>
                <h3>{'Meet your friends'.toUpperCase()}</h3>
                <h2>Paste the link and choose a name</h2>
                <CornerButton>
                    <h4>{'Enter'.toUpperCase()}</h4>
                </CornerButton>
            </BigCard>
        </FullScreen>
    );
};

export default Home;
