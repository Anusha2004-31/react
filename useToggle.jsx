
import { useEffect, useState } from "react";

export const useToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme-mode") || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme-mode", theme);
    }, [theme]);

    const toggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggle };
};
