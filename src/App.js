import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Cart from "./pages/CartPage/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ModalContext = createContext();

const initialState = {
  LoginState: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "showLogin":
      return {
        LoginState: true,
      };
    case "showRegister":
      return {
        LoginState: false,
      };
    default:
      return state;
  }
};

function App() {
  const [login, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider value={{modalState:login, modalDispatch: dispatch}}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </ModalContext.Provider>
  );
}

export default App;
