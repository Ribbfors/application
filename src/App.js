import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./themes";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from ".//Components/Navbar";
import Homepage from "./Pages/Homepage";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";
import Footer from "./Components/Footer";
import "./Styles/App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const myProps = {
    theme,
    setTheme,
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />

        <div className="App">
          <Navbar {...myProps} />
          <Route component={Homepage} path="/" exact />
          <Route component={Blog} path="/blog" exact />
          <Route component={BlogPost} path="/blog/:slug" exact />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
