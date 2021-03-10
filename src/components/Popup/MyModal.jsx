import React from "react";
import styled from "styled-components";
import Input from "../Reusable/Input.styled";

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
  position: fixed;
  width: ${(props) => (props.closeModal ? "0%" : "90%")};
  height: ${(props) => (props.closeModal ? "0%" : "90%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
`;

const CentredSection = styled.div`
  display: flex;
  height: 10%;
  justify-content: ${props => props.justify};
  flex-direction: row;
`;

const Button = styled.button`
  background-color: #232323;
  width: 50px;
  height: 50px;
  font-size: x-large;
  color: white;
  border: none;
`;

const H1 = styled.h1`
  color: red;
  font-size: xx-large;
`;

const H4 = styled.h4`
  color: red;
`;

const ModalInput = styled(Input)`
  background-color: black;
  color: white;
  height: 7%;
`;

const Content = (props) => {

    return (
        <>
            <CentredSection justify="space-between">
                <div/>
                <Button type="submit" onClick={props.onClick}>X</Button>
            </CentredSection>
            <CentredSection justify="center">
                <div/>
                <H1>ADD MOVIE</H1>
            </CentredSection>
            <H4>TITLE</H4><ModalInput type="text"/>
            <H4>OVERVIEW</H4><ModalInput type="text"/>
            <H4>RUNTIME</H4><ModalInput type="text"/>
        </>);};

export const MyModal = (props) => {

    return (
        <ModalWrapper show={props.show}>
            <ModalContent closeModal={props.closeModal}>
                {props.closeModal ? null : <Content onClick={props.onClick}/>}
            </ModalContent>
        </ModalWrapper>
    );
};