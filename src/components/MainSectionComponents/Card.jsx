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

const CardMainSection = styled.div`
  height: 80%;
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
    let name;
    let setName;

    let release;
    let setRelease;

    let jenre;
    let setJenre;

    [name, setName] = useState(props.name);
    [release, setRelease] = useState(props.release);
    [jenre, setJenre] = useState(props.jenre);

    return (
        <CardWrapper>
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