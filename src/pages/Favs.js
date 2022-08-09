import React from "react";
import { GetFavorites } from "../container/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";

const Favs = () => {
    const { data, loading, error } = GetFavorites()

    if (loading) return 'cargando...'
    if (error) return 'error'

    return <ListOfFavs favs={data.favs} />
}

export { Favs }