"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

//theme from localStorage
const getFromLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme");
        return value || "Light";
    }
}

export const ThemeContextProvider = ({ children }) => {
    //initiate default theme mode
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    });
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}