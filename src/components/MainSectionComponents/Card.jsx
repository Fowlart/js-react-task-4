import React, {useCallback, useState} from "react";
import {ModalObj} from "../Modals/MyModal";
import notFoundImg from "./not_found.png";

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

export const Card = (props) => {

    const [name,] = useState(props.name);
    const [release,] = useState(props.release);
    const [jenre,] = useState(props.jenre);

    const [cardVisible, setCardVisible] = useState(true);
    const [transparent, setTransparent] = useState(true);
    const [isContextMenuVisible, setContextMenuVisible] = useState(false);

    const [modalContent, setModalContent] = useState(false);

    //Todo: why no any type check?
    Card.propsTypes = {
        name: PropTypes.array,
        release: PropTypes.number,
        jenre: PropTypes.string
    }

    const setContextMenuButtonTransparent = useCallback(() => {
            setTransparent(true);
    }, []);

    const setContextMenuButtonNonTransparent = useCallback(() => {
            setTransparent(false);
    }, []);

    const switchContextMenu = useCallback(() => {
        if (isContextMenuVisible) {
            setTransparent(true);
            setContextMenuVisible(false);
        } else {
            setTransparent(false);
            setContextMenuVisible(true);
        }
    }, [isContextMenuVisible]);

    const deleteCard = useCallback(()=>{
        props.deleteCardHandler(props.id);
    },[])

    const resetContent = useCallback(()=> {
        setModalContent(false);
    },[]);

    return (
        cardVisible &&
        <CardWrapper textColor={props.textColor} img={props.img} onMouseMove={setContextMenuButtonNonTransparent} onMouseLeave={setContextMenuButtonTransparent}>

            <ModalObj cardId={props.id} deleteCardHandler={deleteCard} content={modalContent}
                      resetContentHandler={resetContent}/>

            <CardHeader><ThreeSpotButton onClick={switchContextMenu}
                                         transparent={transparent}
                                         isContextMenuVisible={isContextMenuVisible}><ThreeSpotButtonSpan>...</ThreeSpotButtonSpan></ThreeSpotButton></CardHeader>
            <CardMainSection>
                <CardContextMenu visible={isContextMenuVisible}>
                    <CardContextMenuButton onClick={() => {
                        setModalContent("edit")
                    }} type="submit" value="EDIT"/>
                    <CardContextMenuButton onClick={() => {
                        setModalContent("delete")
                    }} type="submit" value="DELETE"/>
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
    img: notFoundImg,
    textColor: "white"
}
