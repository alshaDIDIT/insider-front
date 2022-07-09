import React from 'react';
import VideoScreen from "../templates/components/screens/VideoScreen";

import '../templates/styles/base.css'
import {CenterContainer, MaxWidthContainer} from "../templates/components/styled/containers/FlexedContainers";
import TitleCard from "../templates/components/cards/TitleCard";
import CardHolder from "../templates/components/holders/card-holders/CardHolder";
import {
    tempLabel,
    tempLeftImg,
    tempRightImg,
    tempTallImg,
    tempTitle,
    tempTitleVid,
    tempWideImg
} from "../config/TempConstants";
import Breaker from "../templates/breakers/Breaker";


const Home = () => {

    return (
        <section>
            <VideoScreen
                logoText={'Lorem Ipsum'}
                title={'Hello World!'}
                label={'Lorem ipsum dolor sit amet, consectetur adipisicing elit architecto at deleniti varits doslando curry!'}
                videoUrl={'https://assets.mixkit.co/videos/preview/mixkit-woman-spins-a-small-world-globe-21319-large.mp4'}
                instruction={'scroll down'}
                logoImgUrl={'https://www.clipartmax.com/png/full/279-2798685_png-logo-maker-online-real-clipart-and-vector-graphics-camera-logo-design.png'}
                logoWidth={'5rem'}
            />

            <CenterContainer
                marginY={'3rem'}
            >
                <MaxWidthContainer>

                    <CardHolder
                        tallCardTitle={tempTitle}
                        tallCardLabel={tempLabel}
                        tallCardBackImg={tempTallImg}

                        wideCardTitle={tempTitle}
                        wideCardLabel={tempLabel}
                        wideCardBackImg={tempWideImg}

                        leftCardTitle={tempTitle}
                        leftCardLabel={tempLabel}
                        leftBgImg={tempLeftImg}

                        rightCardTitle={tempTitle}
                        rightCardLabel={tempLabel}
                        rightBgImg={tempRightImg}
                    />

                    <TitleCard
                        title={tempTitle}
                        label={tempLabel}
                        backVideo={tempTitleVid}
                    />

                    <Breaker
                        logoImgUrl={'https://cdn-icons-png.flaticon.com/512/7967/7967902.png'}
                        title={'Lorem ipsum dolor sit amet, consectetur.'}
                        label={tempLabel}
                        buttonText={'check out'}
                    />

                </MaxWidthContainer>
            </CenterContainer>

        </section>
    );
};

export default Home;
