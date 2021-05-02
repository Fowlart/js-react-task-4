import React, {useEffect, useReducer, useState} from "react";
import styled, {keyframes} from "styled-components";
import {DeleteMovieContent} from "../ModalContent/DeleteMovieContent";
import {EditMovieContent} from "../ModalContent/EditMovieContent";
import {AddMovieContent} from "../ModalContent/AddMovieModalContent";
import Basic from "../ModalContent/FormsExapmles/BFE";
import {FieldLevelValidationExample} from "../ModalContent/FormsExapmles/FieldLevelValidationForm";
import {ManuallyTriggeringValidation} from "../ModalContent/FormsExapmles/ManuallyTriggeringValidation";
import {NestedExample} from "../ModalContent/FormsExapmles/NestedObjects";

const grow = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 90%;
  }
`;

const hide = keyframes`

  0% {
    height: 90%;
  }
  100% {
    height: 0%;
  }
`;

const ModalWrapper = styled.div`
  display: ${(props) => ((props.visible) ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  overflow: auto; /* Enable scroll if needed */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232323;
  margin: auto;
  left: 20px;
  right: 20px;
  bottom: 20px;
  position: fixed;
  animation: ${(props) => ((props.visible) ? grow : hide)} 0.5s linear;
  height: ${(props) => ((props.visible) ? "90%" : "0%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: ${(props) => ((props.visible) ? "solid gold 1px" : "none")};
`;

export const ModalObj = (props) => {

    const [modalVisible, setModalVisible] = useState(props.content);
    const [modalPlaceHolder,setModalPlaceHolder] = useState(props.content);

    function reducer(state, type) {
        switch (type) {
            case 'delete':
                return (<DeleteMovieContent
                    deleteCardHandler={props.deleteCardHandler}
                    closeHandler={() => {
                    setModalVisible(false);
                }}/>);
            case 'edit':
                return (<EditMovieContent cardId={props.cardId} closeHandler={() => {
                    setModalVisible(false);}}
                />);
            case 'add':
                return (<AddMovieContent closeHandler={() => {
                    setModalVisible(false);}}
                />);
            case 'formik':
                return (<NestedExample/>)
            default:
                return null;
        }
    }

    const [content, dispatch] = useReducer(reducer, null);

    useEffect(() => {
        dispatch(props.content);
        if (props.content != false){
            setModalPlaceHolder(true);
            setModalVisible(true);
        }
    }, [props.content]);

    function hide() {
        if (!modalVisible) {
            dispatch(false);
            setModalPlaceHolder(false);
            props.resetContentHandler();
        }
    }

    return (
        <ModalWrapper visible={modalPlaceHolder}>
            <ModalContent onAnimationEnd={hide} visible={modalVisible}>
                {content}
            </ModalContent>
        </ModalWrapper>
    );
}
