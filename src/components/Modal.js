import styled from "styled-components";
import { typeScale } from "../utils";
import { illustrations } from "../assets";
import { PrimaryButton } from "./buttons";
import { CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  width: 70%;
  height: 100%;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;
const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;
const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  height: 50px;
  width: 50px;
  top: 20px;
  right: 20px;
  padding: 0;
  margin: 0;
`;
const SignUpModal = ({ isDarkTheme }) => {
  return (
    <ModalWrapper>
      <img
        src={illustrations.SignUp}
        alt="Sign up for an account"
        aria-hidden="true"
      />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>
        Sign up today to get access to all of our content and features!
      </SignUpText>
      <PrimaryButton>Sign Up!</PrimaryButton>
      <CloseModalButton aria-label="Close Modal">
        <CloseIcon isDarkTheme={isDarkTheme} />
      </CloseModalButton>
    </ModalWrapper>
  );
};

export default SignUpModal;
