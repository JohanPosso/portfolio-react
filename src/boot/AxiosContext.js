import React, { createContext, useContext } from "react";
import api from "./axios";

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  return <AxiosContext.Provider value={api}>{children}</AxiosContext.Provider>;
};

export const useAxios = () => {
  return useContext(AxiosContext);
};
