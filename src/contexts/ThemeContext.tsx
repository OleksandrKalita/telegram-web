import { createContext, useState } from "react";
import { getTheme } from "../async/requestsForContext";

interface IThemeContext {
    Theme: "dark"|"light",
    switcher: () => void,
}
export const ThemeContext = createContext<IThemeContext>({
    Theme: "dark",
    switcher: () => {},
})
export const ThemeState = ({children} : {children:React.ReactNode}) => {
    const CURRENT_USER_ID:any = localStorage.getItem("user_id");
    let current_theme = "dark";
    const [Theme, setTheme] = useState<"dark"|"light"|any>(current_theme);
    
    getTheme(CURRENT_USER_ID)
    .then(data => current_theme = data)
    .then(data => {current_theme !== "dark" && setTheme(current_theme)});
    const switcher = () => {
        if(Theme === "dark") {
            setTheme("light");
        }else {
            setTheme("dark");
        }
    }

    return (
        <ThemeContext.Provider value={{Theme, switcher}}>
            {children}
        </ThemeContext.Provider>
    );
}