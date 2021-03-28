import React, {useEffect, useRef, useState} from "react";
import {ModalObj} from "../Modals/MyModal";
import {EditMovieContent} from "../Modals/EditMovieContent";
import {DeleteMovieContent} from "../Modals/DeleteMovieContent";
import {
    CardContextMenu,
    CardContextMenuButton,
    CardHeader,
    CardMainSection,
    CardNameRelease,
    CardWrapper,
    FilmNameSpan,
    ReleaseSpan,
    ThreeSpotButton,
    ThreeSpotButtonSpan
} from "./CardComponents.Styled";
import PropTypes from 'prop-types';

let cardNumber = 0;

export const Card = (props) => {
    const counter = useRef();
    // Example: rid of unnecessary variables in destructor
    const [name,] = useState(props.name);
    const [release,] = useState(props.release);
    const [jenre,] = useState(props.jenre);

    const [cardVisible, setCardVisible] = useState(true);
    const [transparent, setTransparent] = useState(true);
    const [isContextMenuVisible, setContextMenuVisible] = useState(false);

    const [modalContent,setModalContent] = useState(false);

    //Example: useEffectUsage
    useEffect(() => {
        cardNumber++;
        console.log("card qty: " + cardNumber);

        return function onUnmount() {
            cardNumber--;
            console.log("card qty: " + cardNumber);
        };

    }, [cardVisible]);

    //Todo: why no any type check?
    Card.propsTypes = {
        name: PropTypes.array,
        release: PropTypes.number,
        jenre: PropTypes.string
    }


    function setContextMenuButtonTransparent() {
        if (!isContextMenuVisible) {
            setTransparent(true);
        }
    }

    function setContextMenuButtonNonTransparent() {
        if (!isContextMenuVisible) {
            setTransparent(false);
        }
    }

    function switchContextMenu(e) {
        if (isContextMenuVisible) {
            setTransparent(true);
            setContextMenuVisible(false);
        } else {
            setTransparent(false);
            setContextMenuVisible(true);
        }
    }

    function deleteCard(){
        console.log("!")
        setCardVisible(false);
        props.deleteCardHandler(props.id);
        console.log("card deleted");
    }

    return (
        cardVisible &&
        <CardWrapper onMouseMove={setContextMenuButtonNonTransparent} onMouseLeave={setContextMenuButtonTransparent}>

            <ModalObj deleteCardHandler={deleteCard} content={modalContent}/>

            <CardHeader><ThreeSpotButton onClick={switchContextMenu}
                                         transparent={transparent}
                                         isContextMenuVisible={isContextMenuVisible}><ThreeSpotButtonSpan>...</ThreeSpotButtonSpan></ThreeSpotButton></CardHeader>
            <CardMainSection>
                <CardContextMenu visible={isContextMenuVisible}>
                    <CardContextMenuButton onClick={()=>{setModalContent("edit")}} type="submit" value="EDIT"/>
                    <CardContextMenuButton onClick={()=>{setModalContent("delete")}} type="submit" value="DELETE"/>
                </CardContextMenu>
            </CardMainSection>
            <CardNameRelease>
                <FilmNameSpan>{name}</FilmNameSpan>
                <ReleaseSpan>{release}</ReleaseSpan>
            </CardNameRelease>
            <span>{jenre}</span>
        </CardWrapper>
    );
};

Card.defaultProps = {
    name: `Very good film`,
    release: "2001",
    jenre: "unknown",
}
