import React, {useState} from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: solid 2px #ffffff;
  color: #ffffff;
  width: 270px;
  height: 400px;
  margin: 15px;
  display: flex;
  flex-direction: column;`;

const CardHeader = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
`;

const ThreeSpotButton = styled.button`
  opacity: ${(props) => (props.transparent ? "10%" : "100%")};
  position: relative;
  top: 3px;
  right: 5px;
  width: 15%;
  border-radius: 55%;
  transform: rotate(90deg);
  background-color: #232323;
  transition: opacity 0.5s;
  color: white;
  font-size: x-large;
  border: none;
`;

const ThreeSpotButtonSpan = styled.span`
  position: relative;
  right: 1px;
  bottom: 7px;
  font-size: x-large;
`;

const CardMainSection = styled.div`
  height: 70%;
`;

const CardNameRelease = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`;

const ReleaseSpan = styled.div`
  padding: 8px;
  border: solid #555555 2px;
`;

const FilmNameSpan = styled.div`
  font-size: x-large;
`;

export const Card = (props) => {

    const [name, setName] = useState(props.name);
    const [release, setRelease] = useState(props.release);
    const [jenre, setJenre] = useState(props.jenre);
    const [transparent, setTransparent] = useState(true);

    function setContextMenuButtonTransparent() {
        setTransparent(true);
    }

    function setContextMenuButtonNonTransparent() {
        setTransparent(false);
    }

    return (
        <CardWrapper onMouseMove={setContextMenuButtonNonTransparent} onMouseLeave={setContextMenuButtonTransparent}>
            <CardHeader><ThreeSpotButton transparent={transparent}>
                <ThreeSpotButtonSpan>...</ThreeSpotButtonSpan></ThreeSpotButton></CardHeader>
            <CardMainSection></CardMainSection>
            <CardNameRelease>
                <FilmNameSpan>{name}</FilmNameSpan>
                <ReleaseSpan>{release}</ReleaseSpan>
            </CardNameRelease>
            <span>{jenre}</span>
        </CardWrapper>
    );
};

Card.defaultProps = {
    name: `Very good film`,
    release: "2001",
    jenre: "unknown",
};