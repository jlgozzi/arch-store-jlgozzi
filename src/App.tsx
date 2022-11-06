import RoutesTree from "./routes";
import { AppProvider } from "./context/appContext";
import GlobalStyle from "./styles/GlobalStyle";
import { CustomThemeProvider } from "./context/themeContext";

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <AppProvider>
          <RoutesTree />
          <GlobalStyle />
        </AppProvider>
      </CustomThemeProvider>

      {/* 
     <Provider>
      <GlobalStyle>
      <RoutesTree>
      <ToastContainer>
     </Provider>
      */}
    </div>
  );
}

export default App;
