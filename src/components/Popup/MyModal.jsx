import React from "react";
import styled from "styled-components";
import Button from "../HeadersComponents/InputWraperInputWraper.styled";

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
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
  padding: 20px;
  border: 1px solid gold;
  width: 80%;
  height: 68%;
  z-index: 1;
`;

const HeaderSection = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-between;
  flex-direction: row;
`;

export const MyModal = (props) => {

    return (
        <ModalWrapper show={props.show}>
            <ModalContent>
                <HeaderSection><div/><Button type="submit" value="X" onClick={props.onClick}/></HeaderSection>
                {props.children}</ModalContent>
        </ModalWrapper>
    );
}