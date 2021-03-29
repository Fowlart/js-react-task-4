import React, {useState} from "react";
import styled from "styled-components";
import {ResultsFilter} from "../components/MainSectionComponents/ResultsFilter";
import {Card} from "../components/MainSectionComponents/Card";

const MainSectionFlex = styled.div`
  background-color: #232323;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;`;

const MainSection = () => {

    // Todo: fetch from back-end
    let sectionsForFilter = ["section-1", "section-2", "section-3", "section-4"];
    let inputs = [
        {id: "card-1", name: "The Fight Club", release: "1999", jenre: "comedy, thriller"},
        {id: "card-2", name: "Venom", release: "2018", jenre: "action, horror, science fiction"},
        {id: "card-3", name: true, release: "Lala", jenre: 1234},
      //  {id: "card-4"}
    ];

    const[filmCards, setFilmCards] = useState(inputs);

    function deleteCard(cardId){
        console.info("you about to delete card with id: "+cardId);
        setFilmCards(filmCards.filter(item=>{ return (item.id !==cardId)}));
    }

    return (
        <>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>
                {filmCards.map((card) => (
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
