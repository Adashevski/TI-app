import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Main = () => {
 /*  const darkMode = useSelector((state) => state.theme.darkMode); */

  return (
    <PersistGate loading={null} persistor={persistor}>
      {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> */}
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </PersistGate>
  );
};

const Root = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);