import React, {useState} from "react";
import styled from "styled-components";
import Button from "../Reusable/Button.styled";
import {ModalObj} from "../Popup/MyModal";
import {AddMovieContent} from "../Popup/AddMovieModalContent";
import {EditMovieContent} from "../Popup/EditMovieContent";
import {DeleteMovieContent} from "../Popup/DeleteMovieContent";

const CardWrapper = styled.div`
  border: solid 2px #ffffff;
  color: #ffffff;
  width: 270px;
  height: 400px;
  margin: 15px;
  display: flex;
  flex-direction: column;`;

const CardHeader = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
`;

const ThreeSpotButton = styled.button`
  opacity: ${(props) => (props.transparent ? "10%" : "100%")};
  position: relative;
  top: 3px;
  right: 5px;
  width: 15%;
  border-radius: 55%;
  transform: ${(props) => (props.isContextMenuVisible? "" : "rotate(90deg)")}; 
  background-color: #232323;
  transition: opacity 0.5s;
  color: white;
  font-size: x-large;
  border: none;
`;

const ThreeSpotButtonSpan = styled.span`
  position: relative;
  right: 1px;
  bottom: 7px;
  font-size: x-large;
`;

const CardMainSection = styled.div`
  height: 70%;
`;

const CardNameRelease = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`;

const ReleaseSpan = styled.div`
  padding: 8px;
  border: solid #555555 2px;
`;

const FilmNameSpan = styled.div`
  font-size: x-large;
`;

const CardContextMenu = styled.div`
  position: relative;
  width: 75%;
  height: 30%;
  top: 10px;
  left: 20px;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
`;

const CardContextMenuButton = styled(Button)`
  width: 100%;
`;

export const Card = (props) => {

    const [name, setName] = useState(props.name);
    const [release, setRelease] = useState(props.release);
    const [jenre, setJenre] = useState(props.jenre);
    const [transparent, setTransparent] = useState(true);
    const [isContextMenuVisible, setContextMenuVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    function switchDeleteModal(e){
        setDeleteModalVisible(!deleteModalVisible);
    }

    function switchEditModal(e) {
        console.log(e);
        setEditModalVisible(!editModalVisible);
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
            <ModalObj content={<EditMovieContent onClick={switchEditModal}/>} visible={editModalVisible}/>
            <ModalObj content={<DeleteMovieContent onClick={switchDeleteModal}/>} visible={deleteModalVisible}/>
            <CardHeader><ThreeSpotButton onClick={switchContextMenu}
                                         transparent={transparent} isContextMenuVisible={isContextMenuVisible}><ThreeSpotButtonSpan>...</ThreeSpotButtonSpan></ThreeSpotButton></CardHeader>
            <CardMainSection>
                <CardContextMenu visible={isContextMenuVisible}>
                    <CardContextMenuButton  onClick={switchEditModal} type="submit" value="EDIT"/>
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