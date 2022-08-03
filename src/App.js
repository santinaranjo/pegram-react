import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pet/:categoryId" element={<Home />} />
                    <Route path="/detail/:detailId" element={<Detail />} />
                </Routes>
                <NavBar />
            </BrowserRouter>
        </React.Fragment>
    )
}

export { App }