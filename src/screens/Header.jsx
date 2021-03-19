import React, {useState} from "react";
import logo from "../components/HeadersComponents/1.png";
import FlexMain from "../components/HeadersComponents/FlexMain.styled";
import InputStyle from "../components/HeadersComponents/InputStyle.styled";
import HeaderFlex from "../components/HeadersComponents/HeaderFlex.styled";
import HeaderLink from "../components/HeadersComponents/HeaderLink.styled";
import InputWraper from "../components/HeadersComponents/InputWraper.styled";
import Input from "../components/Reusable/Input.styled";
import Button from "../components/Reusable/Button.styled";
import {ModalObj} from "../components/Modals/MyModal";
import {AddMovieContent} from "../components/Modals/AddMovieModalContent";

export const Header = (props) => {

    const [headerModalVisible, setHeaderModalVisible] = useState(false);
    const [headerModalVisibleOuter, setHeaderModalVisibleOuter] = useState(false);

    function onHeaderModal(e) {
        setHeaderModalVisibleOuter(true);
        setHeaderModalVisible(true);
    }

    function offHeaderModal(e) {
        setHeaderModalVisibleOuter(false);
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
                    <HeaderLink onClick={onHeaderModal}>ADD MOVIE</HeaderLink>
                </HeaderFlex>
                <InputWraper>
                    <InputStyle>
                        <span>FIND YOUR FILM</span>
                        {input}
                    </InputStyle>
                    <Button type="submit" value="SEARCH"/>
                </InputWraper>
            </FlexMain>
            {headerModalVisibleOuter && <ModalObj content={<AddMovieContent onClick={()=>{setHeaderModalVisible(false)}}/>} visible={headerModalVisible} closeHandler={offHeaderModal}/>}
        </>
    );
};