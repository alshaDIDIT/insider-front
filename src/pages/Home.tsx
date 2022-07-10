import React, {useState} from 'react';
import {FullScreen} from "../components/styled-components/FullScreen";
import {BigCard} from "../components/styled-components/BigCard";
import {CornerButton} from "../components/styled-components/CornerButton";
import Card from "../components/Card";

const Home = () => {

    return (
        <FullScreen>
            <Card
                /*FRONT SIDE*/
                title={'Host'}
                label={'Invite your friends'}
                instructions={'Create a room then send the link'}
                buttonText={'Create'}

                /*BACK SIDE*/
                backTitle={'Host a game'}
                upperInput={'Room name'}
                upperPlaceholder={'Choose a name for your room'}
                lowerInput={'Your name'}
                lowerPlaceholder={'Choose a name for you'}
            />
            <Card
                /*FRONT SIDE*/
                title={'Join'}
                label={'Meet your friends'}
                instructions={'Paste the link and choose a name'}
                buttonText={'Enter'}

                isLeft={true}

                /*BACK SIDE*/
                backTitle={'Join a game'}
                upperInput={'Your name'}
                upperPlaceholder={'Choose a name for you'}
                lowerInput={'Room ID'}
                lowerPlaceholder={'Paste the room ID'}
            />
        </FullScreen>
    );
};

export default Home;
