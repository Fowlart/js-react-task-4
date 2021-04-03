import React, {useEffect, useState} from "react";
import logo from "./1.png";
import FlexMain from "./FlexMain.styled";
import InputStyle from "./HeaderInputStyle.styled";
import HeaderFlex from "./HeaderFlex.styled";
import HeaderLink from "./HeaderLink.styled";
import InputWraper from "./HeaderInputWraper.styled";
import Input from "../ui/Input.styled";
import Button from "../ui/Button.styled";
import {ModalObj} from "../Modals/MyModal";

export const Header = (props) => {

    const [modalContent, setModalContent] = useState(false);

    function resetContent(e) {
        setModalContent(false);
    }

    //example: passing standard and custom props into simple element
    let input = (
        <Input type="text" placeholder="What do You want to watch" inputColor="black"></Input>
    );

    return (
        <>
            <FlexMain>
                <HeaderFlex>
                    <img src={logo}></img>
                    <HeaderLink onClick={() => {
                        setModalContent('add');
                    }}>ADD MOVIE</HeaderLink>
                </HeaderFlex>
                <InputWraper>
                    <InputStyle>
                        <span>FIND YOUR FILM</span>
                        {input}
                    </InputStyle>
                    <Button type="submit" value="SEARCH"/>
                </InputWraper>
            </FlexMain>
            <ModalObj content={modalContent} resetContentHandler={resetContent}/>}
        </>
    );
};
