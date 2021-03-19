import React from "react";
import styled, {keyframes} from "styled-components";

const grow = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 90%;
  }
`;

const hide = keyframes`

  0% {
    height: 90%;
  }
  100% {
    height: 0%;
  }
`;

const ModalWrapper = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  overflow: auto; /* Enable scroll if needed */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232323;
  margin: auto;
  left: 20px;
  right: 20px;
  bottom: 20px;
  position: fixed;
  animation: ${(props) => ((props.visible) ? grow : hide)} 0.5s linear;
  height: 90%;
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: solid gold 1px;
`;

export class ModalObj extends React.Component {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);

    }

    closeModal() {
        if (!this.props.visible) {
            this.props.closeHandler()
        };
    }

    componentDidMount() {
        console.log("component mounted!");
        //todo: add fetch
    }


    componentWillUnmount() {
        console.log("component unmounted!");
    }

    render() {
        return (
            <ModalWrapper>
                <ModalContent onAnimationEnd={this.closeModal} visible={this.props.visible}>
                    {this.props.content}
                </ModalContent>
            </ModalWrapper>
        );
    }
}


