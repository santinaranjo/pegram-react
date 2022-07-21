import React, { useEffect } from "react";
import { List, Item } from "./styles"
import { Category } from "../Category"

const ListOfCategories = () => {
    const [categories, setCategories] = React.useState([])

    useEffect(() => {
        fetch("https://petgram-react-santinaranjo.vercel.app/categories")
            .then(response => response.json())
            .then(response => {
                setCategories(response)
            })
    }, [])
    return(
        <List>
            {
                categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
            }
        </List>
    )
}

export { ListOfCategories }