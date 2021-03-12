import React, {useState} from "react";
import logo from "../components/HeadersComponents/1.png";
import FlexMain from "../components/HeadersComponents/FlexMain.styled";
import InputStyle from "../components/HeadersComponents/InputStyle.styled";
import HeaderFlex from "../components/HeadersComponents/HeaderFlex.styled";
import HeaderLink from "../components/HeadersComponents/HeaderLink.styled";
import InputWraper from "../components/HeadersComponents/InputWraper.styled";
import Input from "../components/Reusable/Input.styled";
import Button from "../components/Reusable/Button.styled";
import {MyModal} from "../components/Popup/MyModal";
import {AddMovieContent} from "../components/Popup/AddMovieModalContent";

export const Header = (props) => {

    const [inputPlaceHolder, setPlaceHolder] = useState("What do You want to watch");
    const [isModalVisible, setModalVisible] = useState(false);
    const [shouldClose, setShouldClose] = useState(true);

    function switchModal(e) {
        if (isModalVisible) {
            setShouldClose(true);
            setTimeout(() => {
                setModalVisible(false)
            }, 400);
        } else {
            setModalVisible(true);
            setTimeout(() => {
                setShouldClose(false)
            }, 100);
        }

    }

    //example: passing standard and custom props into simple element
    let input = (
        <Input type="text" placeholder={inputPlaceHolder} inputColor="black"></Input>
    );

    return (
        <>
            <FlexMain>
                <HeaderFlex>
                    <img src={logo}></img>
                    <HeaderLink onClick={switchModal}>ADD MOVIE</HeaderLink>
                </HeaderFlex>
                <InputWraper>
                    <InputStyle>
                        <span>FIND YOUR FILM</span>
                        {input}
                    </InputStyle>
                    <Button type="submit" value="SEARCH"/>
                </InputWraper>
            </FlexMain>
            <MyModal show={isModalVisible} closeModal={shouldClose} content={<AddMovieContent onClick={switchModal}/>}/>
        </>
    );
};