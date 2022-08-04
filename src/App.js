import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"
import { Favs } from "./pages/Favs"
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"
import { Register } from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "./context/Auth"


const App = () => {
    const { isAuth } = React.useContext(AuthContext)

    return(
        <React.Fragment>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pet/:categoryId" element={<Home />} />
                    <Route path="/detail/:detailId" element={<Detail />} />
                    <Route path="/favs" element={ isAuth ? <Favs/> : <NotRegisteredUser/>} />
                    <Route path="/user" element={ isAuth ? <User/> : <NotRegisteredUser/>} />
                    <Route path="/register" element={<Register />} />
                </Routes>                
                <NavBar />
            </BrowserRouter>
        </React.Fragment>
    )
}

export { App }