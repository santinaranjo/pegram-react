import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { GlobalStyle } from "./GlobalStyles"

const App = () => {
    return(
        <React.Fragment>
            <GlobalStyle />
            <ListOfCategories />
        </React.Fragment>
    )
}

export { App }