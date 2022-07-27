import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id)

  if (loading) return <div>Loading</div>
  if (error) return <div>error</div>

  return (
    <React.Fragment>
      <a href='/'>BACK</a>
      <PhotoCard {...data.photo} />
    </ React.Fragment>
  )
}