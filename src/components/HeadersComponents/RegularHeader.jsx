import logo from "./1.png";

import Input from "../UI/Input.styled";
import Button from "../UI/Button.styled";
import React, {useState} from "react";
import {ModalObj} from "../Modals/MyModal";
import styled from "styled-components";

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: space-between;
  background-color: black;
  color: white;
  font-size: 24px;
`;

const InputStyle = styled.div`
  font-size: large;
  display: flex;
  flex-direction: column;
  width: 60%;
`;


const HeaderLink = styled.div`
  color: red;
  background-color: black;
  transition: all 0.5s;
  padding: 30px;
  text-align: center;

  :hover {
    color: darkred;
  }`;

const InputWraper = styled.div`
  background: black;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  height: 60px;`;

const StyledSpan = styled.span`
  color: white;
`;

const Img = styled.img`
  margin-top: 21px;
  width: 211px;
  height: 45px;
`;

export const RegularHeader = () => {

    const [modalContent, setModalContent] = useState(false);

    function resetContent() {
        setModalContent(false);
    }

    return (
        <>
            <HeaderFlex>
                <Img src={logo}></Img>
                <HeaderLink onClick={() => {
                    setModalContent('add');
                }}>ADD MOVIE</HeaderLink>
            </HeaderFlex>
            <InputWraper>
                <InputStyle>
                    <StyledSpan>FIND YOUR FILM</StyledSpan>
                    <Input type="text" placeholder="What do You want to watch" inputColor="black"/>
                </InputStyle>
                <Button type="submit" value="SEARCH"/>
            </InputWraper>
            <ModalObj content={modalContent} resetContentHandler={resetContent}/>
        </>
    )
}
