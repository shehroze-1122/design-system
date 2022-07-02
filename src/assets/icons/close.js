import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
  color: #fff;
  color: ${(props) => props.theme.textOnFormElementBackground};
`;

export const CloseIcon = ({ isDarkTheme }) => (
  <CloseIconWrapper aria-hidden="true">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.41 11.7678C14.0847 11.4422 14.0847 10.9149 14.41 10.5893L15.5886 9.41069C15.9139 9.08535 16.4415 9.08535 16.7672 9.41069L24.9993 17.6428L33.2314 9.41069C33.5568 9.08535 34.0847 9.08535 34.41 9.41069L35.5883 10.5893C35.9139 10.9146 35.9139 11.4425 35.5883 11.7678L27.3569 20L35.589 28.2321C35.9144 28.5577 35.9144 29.0853 35.589 29.4107L34.4104 30.5893C34.0851 30.9146 33.5575 30.9146 33.2319 30.5893L24.9997 22.3571L16.7676 30.5893C16.442 30.9146 15.9144 30.9146 15.589 30.5893L14.4104 29.4107C14.0851 29.0854 14.0851 28.5578 14.4104 28.2321L22.6426 20L14.41 11.7678Z"
      fill={isDarkTheme ? "white" : "black"}
    />
  </CloseIconWrapper>
);
