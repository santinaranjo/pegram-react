import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { useQuery, gql } from "@apollo/client";

const ANIMALS_QUERY = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`

const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(ANIMALS_QUERY, {variables: { categoryId }})
  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}


export { ListOfPhotoCards }