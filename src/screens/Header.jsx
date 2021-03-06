import React, {useState} from "react";
import logo from "../components/HeadersComponents/1.png";
import FlexMain from "../components/HeadersComponents/FlexMain.styled";
import InputStyle from "../components/HeadersComponents/InputStyle.styled";
import HeaderFlex from "../components/HeadersComponents/HeaderFlex.styled";
import HeaderLink from "../components/HeadersComponents/HeaderLink.styled";
import InputWraper from "../components/HeadersComponents/InputWraper.styled";
import Input from "../components/Reusable/Input.styled";
import Button from "../components/Reusable/Button.styled";

const Header = (props) => {
    let inputPlaceHolder;
    let setplaceHolder;

    [inputPlaceHolder, setplaceHolder] = useState("What do You want to watch");

    //example: passing standard and custom props into simple element
    let input = (
        <Input type="text" placeholder={inputPlaceHolder} inputColor="black"></Input>
    );

    return (
        <FlexMain>
            <HeaderFlex>
                <img src={logo}></img>
                <HeaderLink>ADD MOVIE</HeaderLink>
            </HeaderFlex>
            <InputWraper>
                <InputStyle>
                    <span>FIND YOUR FILM</span>
                    {input}
                </InputStyle>
                <Button type="submit" value="SEARCH"/>
            </InputWraper>
        </FlexMain>
    );
};

export default Header;
