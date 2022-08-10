import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from "./styles"

const FavButton = ({ liked, likes, onClick }) => {

  return (
    <Button onClick={onClick}>
      {
        liked 
          ? <MdFavorite size={"32px"} />
          : <MdFavoriteBorder size={"32px"} />
      }
    <span>{likes} Likes!</span>
    </Button>
  )
}

export { FavButton }