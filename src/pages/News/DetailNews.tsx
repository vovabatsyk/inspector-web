import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

export const DetailNews = (props: Props) => {
    const {id} = useParams()
  return (
    <div>DetailNews id:{id}</div>
  )
}