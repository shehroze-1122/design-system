import { useState } from "react";
// import {
//   PrimaryButton,
//   SecondaryButton,
//   TertiaryButton,
// } from "./components/buttons";
import SignUpModal from "./components/Modal";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <div className="App">
        <button
          style={{ margin: "20px", padding: "8px", background: "none" }}
          onClick={() => setDarkTheme(true)}
        >
          Dark Theme
        </button>
        <button
          style={{ margin: "20px", padding: "8px", background: "none" }}
          onClick={() => setDarkTheme(false)}
        >
          Default Theme
        </button>
        <div
          style={{
            backgroundColor: isDarkTheme ? "#282828" : "aliceblue",
            height: "90vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <SignUpModal isDarkTheme={isDarkTheme} />

          {/* <div>
            <PrimaryButton modifiers={["small"]}>Button</PrimaryButton>
            <SecondaryButton modifiers={["large"]}>Button</SecondaryButton>
            <TertiaryButton>Button</TertiaryButton>
          </div>
          <div>
            <PrimaryButton modifiers={["small", "errorPrimary"]}>
              Button
            </PrimaryButton>
            <SecondaryButton modifiers={["large", "errorSecondary"]}>
              Button
            </SecondaryButton>
            <TertiaryButton modifiers={["errorTertiary"]}>
              Button
            </TertiaryButton>
          </div>
          <div>
            <PrimaryButton modifiers={["small", "successPrimary"]}>
              Button
            </PrimaryButton>
            <SecondaryButton modifiers={["large", "successSecondary"]}>
              Button
            </SecondaryButton>
            <TertiaryButton modifiers={["successTertiary"]}>
              Button
            </TertiaryButton>
          </div>
          <div>
            <PrimaryButton modifiers={["small", "warningPrimary"]}>
              Button
            </PrimaryButton>
            <SecondaryButton modifiers={["large", "warningSecondary"]}>
              Button
            </SecondaryButton>
            <TertiaryButton modifiers={["warningTertiary"]}>
              Button
            </TertiaryButton>
          </div> */}
        </div>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
