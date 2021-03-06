import React, {useState} from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  background-color: #232323;
  font-size: large;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;`;

//example: extending styles
const StyledResultsFilter = styled(FilterContainer)`
  border: solid 2px gold;
  font-weight: bold;
  color: green;`;

const FilterSection = styled(FilterContainer)`
  align-self: center;
  margin: 10px;
  transition: all ease;

  :hover {
    color: gray;
  }`;

export const ResultsFilter = (props) => {
    let sections;
    let setSections;
    [sections, setSections] = useState(props.sections);

    let renderedSections = sections.map((section) => (
        <FilterSection key={section}>{section}</FilterSection>
    ));

    return (
        <StyledResultsFilter children={renderedSections}/>
    );
};