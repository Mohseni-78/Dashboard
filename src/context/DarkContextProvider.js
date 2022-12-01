import React, { createContext, useReducer, useState } from "react";

export const darkContext = createContext();

const INITIAL_STATE = {
  dark: false,
};

const themReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return {
        dark: false,
      };
    case "DARK":
      return {
        dark: true,
      };
    case "TOGGLE":
      return {
        dark: !state.dark,
      };
    default:
      return state;
  }
};
const DarkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themReducer, INITIAL_STATE);
  return (
    <darkContext.Provider value={{ state, dispatch }}>
      {children}
    </darkContext.Provider>
  );
};

export default DarkContextProvider;
