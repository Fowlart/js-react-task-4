import React from "react";
import styled from "styled-components";
import {ResultsFilter} from "../../components/MainSectionComponents/ResultsFilter";
import {Card} from "../../components/MainSectionComponents/Card";
import {cardCounterStore} from "../../store/CardCounterStore";

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;


const MainSection = () => {

    // Todo: fetch from back-end
    let sectionsForFilter = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

    function deleteCard(cardId) {
        cardCounterStore.dispatch({type: "REMOVE_FILM", cardId, filmId: cardId});
    }

    return (
        <>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>
                {cardCounterStore.getState().films.map((card) => (
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
