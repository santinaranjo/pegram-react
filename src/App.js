import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { GlobalStyle } from "./GlobalStyles"
import { ListOfPhotoCards } from "./components/ListOfPhotoCards"
import { Logo } from "./components/Logo"

const App = () => {
    return(
        <React.Fragment>
            <GlobalStyle />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </React.Fragment>
    )
}

export { App }