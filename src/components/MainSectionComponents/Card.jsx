import React, {useEffect, useState} from "react";
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

    // Example: rid of unnecessary variables in destructor
    const [name,] = useState(props.name);
    const [release,] = useState(props.release);
    const [jenre,] = useState(props.jenre);

    const [cardVisible, setCardVisible] = useState(true);
    const [transparent, setTransparent] = useState(true);
    const [isContextMenuVisible, setContextMenuVisible] = useState(false);

    const [deleteModalVisible, setDeleteModalVisible] = useState(true);
    const [deleteModalVisibleOuter, setDeleteModalVisibleOuter] = useState(false);

    const [editModalVisible, setEditModalVisible] = useState(true);
    const [editModalVisibleOuter, setEditModalVisibleOuter] = useState(false);

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


    function onEditModal(e) {
        setEditModalVisibleOuter(true);
        setEditModalVisible(true);
    }

    function offEditModal(e) {
        setEditModalVisibleOuter(false);
    }

    function onDeleteModal(e) {
        setDeleteModalVisibleOuter(true);
        setDeleteModalVisible(true);
    }

    function offDeleteModal(e) {
        setDeleteModalVisibleOuter(false);
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
        setCardVisible(false);
        props.deleteCardHandler(props.id);
        console.log("card deleted");
    }

    return (
        cardVisible &&
        <CardWrapper onMouseMove={setContextMenuButtonNonTransparent} onMouseLeave={setContextMenuButtonTransparent}>
            {editModalVisibleOuter &&
            <ModalObj content={<EditMovieContent onClick={() => {
                setEditModalVisible(false)
            }}/>} visible={editModalVisible} closeHandler={offEditModal}/>}

            {deleteModalVisibleOuter &&
            <ModalObj content={<DeleteMovieContent deleteCardHandler={deleteCard} onClick={() => {
                setDeleteModalVisible(false)
            }}/>} visible={deleteModalVisible} closeHandler={offDeleteModal}/>}

            <CardHeader><ThreeSpotButton onClick={switchContextMenu}
                                         transparent={transparent}
                                         isContextMenuVisible={isContextMenuVisible}><ThreeSpotButtonSpan>...</ThreeSpotButtonSpan></ThreeSpotButton></CardHeader>
            <CardMainSection>
                <CardContextMenu visible={isContextMenuVisible}>
                    <CardContextMenuButton onClick={onEditModal} type="submit" value="EDIT"/>
                    <CardContextMenuButton onClick={onDeleteModal} type="submit" value="DELETE"/>
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
