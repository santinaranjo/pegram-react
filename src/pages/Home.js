import React from "react";
import { ListOfCategories } from "../components/ListOfCategories"
import { ListOfPhotoCards } from "../container/ListOfPhotoCards"
import { useParams } from "react-router-dom"

const Home = () => {
    let params = useParams()
    return(
        <React.Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.categoryId} />
        </React.Fragment>
    )
}

export { Home }