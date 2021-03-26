import React from "react";
import styled, {keyframes} from "styled-components";
import {DeleteMovieContent} from "./DeleteMovieContent";

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
  display: block;
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
  height: 90%;
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: solid gold 1px;
`;

export const ModalObj = (props) => {

   //card qty const DeleteModal = <DeleteMovieContent deleteCardHandler={deleteCard} onClick={() => {setDeleteModalVisible(false)}}/>

    function closeModal() {
        if (!props.visible) {
            props.closeHandler();
        }
    }

    // SyntheticEvent 'onAnimationEnd':
    return (
        <ModalWrapper>
            <ModalContent onAnimationEnd={closeModal} visible={props.visible}>
                {props.content}
            </ModalContent>
        </ModalWrapper>
    );
}

