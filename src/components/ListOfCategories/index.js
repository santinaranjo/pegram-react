import React from "react";
import { List, Item } from "./styles"
import { Category } from "../Category"
import db from "../../../api/db.json"

const ListOfCategories = () => {
    return(
        <List>
            {
                db.categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
            }
        </List>
    )
}

export { ListOfCategories }