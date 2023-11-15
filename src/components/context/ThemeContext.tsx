import { createContext } from "react";
import { theme } from "./theme";
import { useContext } from "react";
/* WHEN THE INITIAL VALUE IS KNOWN */

type ThemeProviderProps = {
    children: React.ReactNode,
}

const ThemeContext = createContext(theme);

export default function ThemeProvider({children}: ThemeProviderProps ) {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if(context === undefined) throw new Error("ThemeContext is being used outside of its scope")
    return context;
}