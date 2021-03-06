import styled from "styled-components";

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: space-between;
  background-color: black;
`;

export default HeaderFlex;
