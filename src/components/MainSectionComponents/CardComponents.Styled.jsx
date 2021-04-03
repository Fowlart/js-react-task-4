import styled from "styled-components";
import Button from "../ui/Button.styled";

export const CardWrapper = styled.div`
  border: solid 2px #ffffff;
  color: #ffffff;
  width: 270px;
  height: 400px;
  margin: 15px;
  display: flex;
  flex-direction: column;`;

export const CardHeader = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
`;

export const ThreeSpotButton = styled.button`
  opacity: ${(props) => (props.transparent ? "10%" : "100%")};
  position: relative;
  top: 3px;
  right: 5px;
  width: 15%;
  border-radius: 55%;
  transform: ${(props) => (props.isContextMenuVisible? "" : "rotate(90deg)")}; 
  background-color: #232323;
  transition: opacity 0.5s;
  color: white;
  font-size: x-large;
  border: none;
`;

export const ThreeSpotButtonSpan = styled.span`
  position: relative;
  right: 1px;
  bottom: 7px;
  font-size: x-large;
`;

export const CardMainSection = styled.div`
  height: 70%;
`;

export const CardNameRelease = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`;

export const ReleaseSpan = styled.div`
  padding: 8px;
  border: solid #555555 2px;
`;

export const FilmNameSpan = styled.div`
  font-size: x-large;
`;

export const CardContextMenu = styled.div`
  position: relative;
  width: 75%;
  height: 30%;
  top: 10px;
  left: 20px;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
`;

export const CardContextMenuButton = styled(Button)`
  width: 100%;
`;
