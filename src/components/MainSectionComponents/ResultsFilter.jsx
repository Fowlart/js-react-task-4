import React, {useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";

const FilterContainer = styled.div`
  background-color: #232323;
  font-size: large;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;`;

//example: extending styles
const StyledResultsFilter = styled(FilterContainer)`
  font-weight: bold;
  color: green;`;

const FilterSection = styled(FilterContainer)`
  align-self: center;
  margin: 10px;
  transition: all ease;
  color: gray;

  :hover {
    color: white;
  }`;

const DivThinLine = styled.div`
  width: 100%;
  border: gray solid 1px;
  background-color: gray;
  height: 2%;
`;

const grow_width = keyframes`
  0% {
    width: 1px;
  }
  100% {
    width: 1000px;
  }
`;

const hide = keyframes`

  0% {
    left: 1px;
  }
  100% {
    left: 1000px;
  }
`;

const ThinLineInnerDiv = styled.div`
  width: ${props => props.width};
  left:  ${props => props.left};
  position: relative;
  border: red solid 1px;
  background-color: red;
  height: 1%;
  transition: left linear;
`;

export const ResultsFilter = (props) => {

    const [sections,] = useState(props.sections);
    const refToContainer = useRef();
    const sectionWidths = useRef([]);

    const [redLineWidth,setRedLineWidth] = useState("10px");
    const [redLineLeft,setRedLineLeft] = useState("10px");

    // todo: this is a reference to a div which contains all section in the filter
    useEffect(() => {
        if (refToContainer.current) {
            refToContainer.current.childNodes.forEach((section)=>{
                sectionWidths.current.push(window.getComputedStyle(section).getPropertyValue("width"));
            });
        }
    }, [refToContainer.current]);

    useEffect(() => {
       setRedLineWidth(sectionWidths.current[0]);
    }, []);

    function onchangeRedLine(e){

        let deviation =0;
        let width = "";

        refToContainer.current.childNodes.forEach((element)=>{
           if (e.target===element) {
               deviation= element.offsetLeft-6;
               width = window.getComputedStyle(element).width
           }

        });
        console.log(deviation);
        setRedLineLeft(deviation+"px");
        setRedLineWidth(width);
    }



    let renderedSections = sections.map((section) => (
        <FilterSection onClick={onchangeRedLine} key={section} keyForSerch={section}>{section}</FilterSection>
    ));

    return (
        <>
        <StyledResultsFilter ref={refToContainer} children={renderedSections}/>
        <DivThinLine><ThinLineInnerDiv width={redLineWidth} left={redLineLeft}/></DivThinLine>
        </>
    );
};
