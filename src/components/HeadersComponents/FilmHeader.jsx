import React, {useRef, useState} from "react";
import styled from "styled-components";
import logo from "./1.png";
import poster from "./poster.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};;
  justify-content: center;
  font-size: 24px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PosterDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  margin-top: 21px;
  width: 150px;
  height: 35px;
`;

const Poster = styled.img`
  margin-top: 21px;
  width: 305px;
  height: 400px;
`;


const PosterDiv = (props) => {

    return (<PosterDivWrapper>
        <Logo src={logo}></Logo>
        <Poster src={poster}></Poster>
    </PosterDivWrapper>);

}

const InfoDivWrapper = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const H2 = styled.h2`
  color: #FFFFFF;
`;

const Span = styled.span`
  color: white;
  font-size: 20px;
  font-stretch: ultra-condensed;
`;

const H4 = styled.span`
  padding-top: 20px;
  padding-bottom: 20px;
  color: #FFFFFF;
  font-size: 25px;
`;

const InfoDiv = () => {

    return (<InfoDivWrapper>
        <H2>Comedy</H2>
        <Span>Oscar winning Movie</Span>
        <H4>1999    139 minutes</H4>
        <Span>Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt,
            Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk.
            Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club"
            with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman,
            Marla Singer (Bonham Carter).</Span>
    </InfoDivWrapper>);
}

export const FilmHeader = () => {

    const [mobile, setMobile] = useState(true);
    const refToWrapper = useRef();

    function resizeHandler(e) {
        console.log(e.target.innerWidth);

        if (e.target.innerWidth<500) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }

    window.addEventListener('resize', resizeHandler);
    return (<Wrapper ref={refToWrapper} mobile={mobile}><PosterDiv/><InfoDiv/></Wrapper>);
}
