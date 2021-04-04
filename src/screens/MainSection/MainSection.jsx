import React from "react";
import styled from "styled-components";
import {ResultsFilter} from "../../components/MainSectionComponents/ResultsFilter";
import {Card} from "../../components/MainSectionComponents/Card";
import {useMocks} from "../../hooks/UseMocks";

const MainSectionFlex = styled.div`
  background-color: #232323;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;`;

const MainSection = () => {

    // Todo: fetch from back-end
    let sectionsForFilter = ["ALL","DOCUMENTARY","COMEDY","HORROR","CRIME"];

    const [inputs, addFilm, removeFilm] = useMocks();

    function deleteCard(cardId) {
        removeFilm(cardId);
    }

    return (
        <>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>
                {inputs.map((card) => (
                    <Card deleteCardHandler={deleteCard} name={card.name} release={card.release} jenre={card.jenre}
                          key={card.id} id={card.id}/>
                ))}
            </MainSectionFlex>
        </>
    );
};

const OopsDiv = styled.div`
  background-color: black;
  color: red;
  text-align: center;`;

const OopsText = () => {
    return (
        <OopsDiv>
            < h2> Oops, something went wrong ... We are doing our best to fix the issue ! < /h2>
        </OopsDiv>
    );
};

const ErrorBoundaryMainSection = () => {
    let isDataInPlace = true;
    return isDataInPlace ? <MainSection/> : <OopsText/>;
};

export default ErrorBoundaryMainSection;
