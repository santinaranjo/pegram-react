import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";

const ANIMALS_QUERY = gql`
    query getPhotos {
        photos {
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`

const ListOfPhotoCards = () => {
    const { data, loading, error } = useQuery(ANIMALS_QUERY)
  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}


export { ListOfPhotoCards }