import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { GlobalStyle } from "./styles/GlobalStyles"
import { ListOfPhotoCards } from "./container/ListOfPhotoCards"
import { Logo } from "./components/Logo"
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery"

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get("detail")
    return(
        <React.Fragment>
            <GlobalStyle />
            <Logo />
            {
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    : <React.Fragment>
                        <ListOfCategories />
                        <ListOfPhotoCards categoryId={2} />
                    </React.Fragment>
            }
        </React.Fragment>
    )
}

export { App }