import { useState } from "react";
import Darkmode from "./Darkmode";

import { ThemeContext, themes } from "./Theme-context";

export default function LightandDarkMode() {
  const [theme, setTheme] = useState("dark");
  function changeTheme() {
    (theme === themes.light) | setTheme(themes.dark);
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Darkmode />
    </ThemeContext.Provider>
  );
}
