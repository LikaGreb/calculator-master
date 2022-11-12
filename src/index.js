import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
const defaultState = {
  value: "0",
  firstValue: "0",
  func: "",
};
const actions = [
  {
    type: "CANCEL",
  },
  {
    type: "RESULT",
  },
  {
    type: "FUNC",
  },
  {
    type: "NUMB",
  },
  {
    type: "BACK",
  },
  {
    type: "RADICAL",
  },
  {
    type: "PERSENT",
  },
];
const getResult = (first, second, func) => {
  switch (func) {
    case "PLUS":
      return (Number(first) + Number(second)).toString();
    case "MINUS":
      return (Number(first) - Number(second)).toString();
    case "MULTY":
      return (Number(first) * Number(second)).toString();
    case "DEVIDE":
      return (Number(first) / Number(second)).toString();
    case "RADICAL":
      return (Number(first) ** (1 / Number(second))).toString();
    case "PERSENT":
      return ((Number(first) / 100) * Number(second)).toString();
    default:
      return "";
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NUMB":
      if (action.payload !== "") {
        return { ...state, value: action.payload };
      }
      const data =
        state.value === "0"
          ? action.payload
          : `${state.value}${action.payload}`;
      console.log(state.value, action.payload);
      return { ...state, value: data };

    case "CANCEL":
      return { ...state, value: "0" };
    case "FUNC":
      if (state.value === "0" && action.payload === "MINUS") {
        return { ...state, value: "-" };
      }
      return {
        ...state,
        firstValue: state.value,
        func: action.payload,
        value: state.value,
      };
    case "RESULT":
      const res = getResult(state.firstValue, state.value, state.func);
      console.log(res);
      return { ...state, value: res, firstValue: "0", func: "" };
    case "BACK":
      const backData =
        state.value.toString().length === 1
          ? "0"
          : state.value.slice(0, state.value.length - 1);
      return { ...state, value: backData };
    default:
      return state;
  }
};
export const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
