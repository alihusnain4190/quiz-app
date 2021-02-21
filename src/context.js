import React, { useEffect, useReducer, useContext } from "react";

//create App context
const AppContext = React.createContext();
//create AppProvider function
const AppProvider = ({ children }) => {
 return (
    <AppContext.Provider value={'heelo'}>
      {children}
    </AppContext.Provider>
  )}
//export
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
