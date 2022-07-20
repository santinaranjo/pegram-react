import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { GlobalStyle } from "./GlobalStyles"
import { PhotoCard } from "./components/PhotoCard"

const App = () => {
    return(
        <React.Fragment>
            <GlobalStyle />
            <ListOfCategories />
            <PhotoCard />
        </React.Fragment>
    )
}

export { App }