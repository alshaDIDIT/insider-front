import React, {useEffect, useState} from 'react';
import {CornerButton} from "../styled-components/CornerButton";
import {ICard} from "../../models/ICard";
import {CardFace} from "../styled-components/CardFace";

const FrontSide = (props: ICard) => {
    const {
        title, label, instructions, buttonText,
        isLeft
    } = props;

    const [right, setRight] = useState<string[]>(['turn', 'around']);
    const [clicked, setClicked] = useState<boolean>(false);

    const halfSecond: string = ' .5s linear forwards';
    const oneSecond: string = ' 1s linear forwards';

    useEffect(() => {
        (isLeft) ?
            setRight(['turn-right', 'around-right'])
            :
            setRight(['turn-left', 'around-left']);
    }, [isLeft])

    const handleClick = () => {
        (clicked) ? setClicked(false) : setClicked(true);
    }

    return (
        <CardFace
            style={(clicked) ?
                {
                    display: "none"
                } : {}
            }
        >
            <h1>{title}</h1>
            <h3>{label?.toUpperCase()}</h3>
            <h2>{instructions}</h2>
            <CornerButton
                onClick={handleClick}
            >
                <h4>{buttonText?.toUpperCase()}</h4>
            </CornerButton>
        </CardFace>
    );
};

export default FrontSide;
