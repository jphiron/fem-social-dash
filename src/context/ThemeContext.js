import { createContext } from "react";

export const ThemeContext = createContext();

const theme = {
  light: {
    
  },
  dark: {

  }
}

export const ThemeProvider = ({children}) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
)