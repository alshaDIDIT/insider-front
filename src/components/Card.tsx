import React, {ChangeEvent, useEffect, useState} from 'react';
import {CornerButton} from "./styled-components/CornerButton";
import {BigCard} from "./styled-components/BigCard";
import {CardFace} from "./styled-components/CardFace";
import {ICard} from "../models/ICard";
import {useNavigate} from "react-router-dom";
import axios from "axios";

interface IHost {
    user: string;
    roomName: string;
}
interface IRoom {
    roomName: string;
}
interface IRoomResponse {
    id: string;
    roomName: string;
}

const Card = (props: ICard) => {
    const {
        title, label, instructions, buttonText,
        isLeft, backTitle,
        upperInput, upperPlaceholder,
        lowerInput, lowerPlaceholder
    } = props;
    const navigate = useNavigate();

    const [right, setRight] = useState<string[]>(['turn', 'around']);
    const [clicked, setClicked] = useState<boolean>(false);
    const [userName, setUserName] = useState<IHost>({user: '', roomName: ''});
    const [roomName, setRoomName] = useState<IRoom>({roomName: ''});

    const halfSecond: string = ' .5s linear forwards';
    const oneSecond: string = ' 1s linear forwards';
    const oneAndHalfSecond: string = ' 1.5s linear forwards';

    useEffect(() => {
        (isLeft) ?
            setRight(['turn-right', 'around-right'])
            :
            setRight(['turn-left', 'around-left']);
    }, [isLeft])

    function handleRoomChange(e: ChangeEvent<HTMLInputElement>) {
        let propertyToChange = e.target.name;
        setRoomName({...roomName, [propertyToChange]: e.target.value})
    }

    function handleUserChange(e: ChangeEvent<HTMLInputElement>) {
        let propertyToChange = e.target.name;
        setUserName({...userName, [propertyToChange]: e.target.value})
    }

    const handleClick = () => {
        (clicked) ? setClicked(false) : setClicked(true);
    }

    const handleBackClick = () => {
        if (isLeft) {

        } else {
            const room = { name: roomName };
            const userCred = { username: userName, password: userName.roomName };

            // fetch('http://localhost:8080/api/rooms', {
            //     method: 'POST', // or 'PUT'
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(room),
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Success:', data);
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });

            axios.post('http://localhost:8080/api/rooms', {
                name: 'Finn'
            })
                .then((res) => {
                    console.log(res)
                })
                .catch();
        }
    }

    return (
        <BigCard
            style={{
                animation: (clicked) ?
                    right[0] + halfSecond
                    :
                    right[1] + halfSecond
            }}
        >
            {/*FRONT SIDE*/}
            <CardFace
                style={(clicked) ?
                    {
                        display: "none"
                    } : {}
                }
            >
                <h1
                    style={(isLeft) ? {
                        color: '#c57d0c'
                    } : {}}
                >{title}</h1>
                <h3
                    style={(isLeft) ? {
                        color: '#d7952f'
                    } : {}}
                >{label?.toUpperCase()}</h3>
                <h2>{instructions}</h2>
                <CornerButton
                    style={{
                        backgroundColor: (isLeft) ? '#c57d0c' : '#608294'
                    }}
                    onClick={handleClick}
                >
                    <h4>{buttonText?.toUpperCase()}</h4>
                </CornerButton>
            </CardFace>

            {/*BACK SIDE*/}
            <CardFace
                style={(!clicked) ?
                    {
                        display: "none"
                    } : {
                        animation: 'appear' + oneSecond
                    }
                }
            >
                <div
                    onClick={handleClick}
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        marginTop: '-1.25rem',
                        marginRight: '1rem',
                        backgroundColor: 'silver',
                        padding: '.2rem .4rem',
                        borderRadius: '1.5rem',
                        color: 'white',
                        fontSize: '.5rem',
                        cursor: 'pointer'
                    }}
                >
                    X
                </div>
                <h1
                    style={(!clicked) ?
                        {} : {
                            animation: 'rise' + oneSecond,
                            color: (isLeft) ? '#c57d0c' : '#608294'
                        }}
                >{backTitle}</h1>

                <div
                    style={{
                        marginTop: '-.75rem',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <h2>{upperInput}</h2>
                    <input type={'text'} placeholder={upperPlaceholder}
                           value={userName.roomName} onChange={handleRoomChange}
                    />
                    <h2>{lowerInput}</h2>
                    <input type={'text'} placeholder={lowerPlaceholder}
                           value={userName.user} onChange={handleUserChange}
                    />
                </div>


                <CornerButton
                    onClick={handleBackClick}
                    style={{
                        animation: 'descend' + oneAndHalfSecond,
                        backgroundColor: (isLeft) ? '#c57d0c' : '#608294'
                    }}
                >
                    <h4>{buttonText?.toUpperCase()}</h4>
                </CornerButton>
            </CardFace>

        </BigCard>
    );
};

export default Card;
