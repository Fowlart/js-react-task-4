import React, {useState} from "react";
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


export const Card = (props) => {

    const [name, setName] = useState(props.name);
    const [release, setRelease] = useState(props.release);
    const [jenre, setJenre] = useState(props.jenre);
    const [transparent, setTransparent] = useState(true);
    const [isContextMenuVisible, setContextMenuVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    function switchDeleteModal(e) {
        setDeleteModalVisible(!deleteModalVisible);
    }

    function switchEditModal(e) {
        setEditModalVisible(!editModalVisible)
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

    return (
        <CardWrapper onMouseMove={setContextMenuButtonNonTransparent} onMouseLeave={setContextMenuButtonTransparent}>
            {editModalVisible ? <ModalObj content={<EditMovieContent onClick={switchEditModal}/>}/> : null}
            {deleteModalVisible ? <ModalObj content={<DeleteMovieContent onClick={switchDeleteModal}/>}/> : null}
            <CardHeader><ThreeSpotButton onClick={switchContextMenu}
                                         transparent={transparent}
                                         isContextMenuVisible={isContextMenuVisible}><ThreeSpotButtonSpan>...</ThreeSpotButtonSpan></ThreeSpotButton></CardHeader>
            <CardMainSection>
                <CardContextMenu visible={isContextMenuVisible}>
                    <CardContextMenuButton onClick={switchEditModal} type="submit" value="EDIT"/>
                    <CardContextMenuButton onClick={switchDeleteModal} type="submit" value="DELETE"/>
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
};