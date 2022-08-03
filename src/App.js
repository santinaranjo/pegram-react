import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get("detail")
    return(
        <React.Fragment>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                {
                    detailId
                        ? <PhotoCardWithQuery id={detailId} />
                        : 
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/pet/:categoryId" element={<Home />} />
                            </Routes>
                        
                }
            </BrowserRouter>
        </React.Fragment>
    )
}

export { App }