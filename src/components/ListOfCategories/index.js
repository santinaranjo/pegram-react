import React, { useEffect } from "react";
import { List, Item } from "./styles"
import { Category } from "../Category"

function useCategoriesData() {
    const [categories, setCategories] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch("https://petgram-server-santinaranjo-santinaranjo.vercel.app/categories")
            .then(response => response.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, [])

    return { categories, loading }
}

const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = React.useState(false)



    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener("scroll", onScroll)

        return () => document.removeEventListener("scroll", onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
          {
            loading
                ? <Item key="loading"><Category /></Item>
                : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
          }
        </List>
      )

      return (
        <React.Fragment>
          {renderList()}
          {showFixed && renderList(true)}
        </React.Fragment>
      )
}

export { ListOfCategories }