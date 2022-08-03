import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery"
import { useParams } from "react-router-dom"

const Detail = () => {
    let params = useParams()
    return(
        <PhotoCardWithQuery id={params.detailId} />
    )
}

export { Detail }