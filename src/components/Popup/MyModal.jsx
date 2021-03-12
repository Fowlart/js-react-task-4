import React from "react";
import styled from "styled-components";
import {AddMovieContent} from "./AddMovieModalContent";

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
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
  width: ${(props) => (props.closeModal ? "0%" : "90%")};
  height: ${(props) => (props.closeModal ? "0%" : "90%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: solid gold 1px;
`;


export const MyModal = (props) => {
    return (
        <ModalWrapper show={props.show}>
            <ModalContent closeModal={props.closeModal}>
                {props.closeModal ? null :props.content}
            </ModalContent>
        </ModalWrapper>
    );
};