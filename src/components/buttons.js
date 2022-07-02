import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 32px;
    `,
  small: () => `
        font-size: ${typeScale.helper};
        padding: 8px;
    `,
  successPrimary: (props) => `
        background-color: ${props.theme.status.successColor};
        border: 2px solid ${props.theme.status.successColor};
        &:hover, &:focus {
            background-color: ${props.theme.status.successColorHover};
            border-color: ${props.theme.status.successColorHover};
        }
        &:active{
            background-color: ${props.theme.status.successColorActive};
            border-color: ${props.theme.status.successColorActive};
        }
    `,
  successSecondary: (props) => `
        background: none;
        border: 2px solid ${props.theme.status.successColor};
        color: ${props.theme.status.successColor}};
        &:hover, &:focus  {
            color: ${props.theme.status.successColorHover};
            border-color: ${props.theme.status.successColorHover};
        }
        &:active{
            border-color: ${props.theme.status.successColorActive}
        }
    `,
  successTertiary: (props) => `
        background: none;
        border: 2px solid transparent;
        color: ${props.theme.status.successColor}};
        &:hover, &:focus  {
            color: ${props.theme.status.successColorHover};
        }
        &:active{
            color: ${props.theme.status.successColorActive}
        }
    `,
  warningPrimary: (props) => `
        background-color: ${props.theme.status.warningColor};
        border: 2px solid ${props.theme.status.warningColor};
        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            border-color: ${props.theme.status.warningColorHover};
        }
        &:active{
            background-color: ${props.theme.status.warningColorActive};
            border-color: ${props.theme.status.warningColorActive};
        }
    `,
  warningSecondary: (props) => `
        background: none;
        border: 2px solid ${props.theme.status.warningColor};
        color: ${props.theme.status.warningColor}};
        &:hover, &:focus  {
            color: ${props.theme.status.warningColorHover};
            border-color: ${props.theme.status.warningColorHover};
        }
        &:active{
            border-color: ${props.theme.status.warningColorActive}
        }
    `,
  warningTertiary: (props) => `
        background: none;
        border: 2px solid transparent;
        color: ${props.theme.status.warningColor}};
        &:hover, &:focus  {
            color: ${props.theme.status.warningColorHover};
        }
        &:active{
            color: ${props.theme.status.warningColorActive}
        }
    `,
  errorPrimary: (props) => `
        background-color: ${props.theme.status.errorColor};
        border: 2px solid ${props.theme.status.errorColor};
        &:hover, &:focus {
            background-color: ${props.theme.status.errorColorHover};
            border-color: ${props.theme.status.errorColorHover};
        }
        &:active{
            background-color: ${props.theme.status.errorColorActive};
            border-color: ${props.theme.status.errorColorActive};
        }
    `,
  errorSecondary: (props) => `
        background: none;
        border: 2px solid ${props.theme.status.errorColor};
        color: ${props.theme.status.errorColor}};
        &:hover, &:focus  {
            color: ${props.theme.status.errorColorHover};
            border-color: ${props.theme.status.errorColorHover};
        }
        &:active{
            border-color: ${props.theme.status.errorColorActive}
        }
    `,
  errorTertiary: (props) => `
        background: none;
        border: 2px solid transparent;
        color: ${props.theme.status.errorColor}};
        &:hover, &:focus  {
            color: ${props.theme.status.errorColorHover};
        }
        &:active{
            color: ${props.theme.status.errorColorActive}
        }
    `,
};
const Button = styled.button`
  padding: 12px 24px;
  border-radius: 5px;
  font-family: ${(props) => props.theme.primaryFont};
  font-weight: 400;
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s linear, color 0.2s linear,
    border-color 0.2s linear;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.primaryHoverColor};
    border-color: ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
  }
  &:disabled {
    background-color: ${(props) => props.theme.primaryDisabledColor};
    border-color: ${(props) => props.theme.primaryDisabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.primaryHoverColor};
    border-color: ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    border-color: ${(props) => props.theme.primaryActiveColor};
  }
  &:disabled {
    color: ${(props) => props.theme.primaryDisabledColor};
    border-color: ${(props) => props.theme.primaryDisabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    color: ${(props) => props.theme.primaryActiveColor};
  }
  &:disabled {
    color: ${(props) => props.theme.primaryDisabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
