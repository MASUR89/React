import { createContext, useState, useContext } from 'react';
import './App.css';

const ThemeContext = createContext('light');

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className={theme} onClick={toggleTheme}>
      BG change!
    </button>
  );
}

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
