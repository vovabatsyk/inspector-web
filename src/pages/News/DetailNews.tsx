import React from 'react'
import { useParams } from 'react-router-dom'
import { MotionComponent } from '../../components/ui/MotionComponent'

type Props = {}

export const DetailNews = (props: Props) => {
	const { id } = useParams()
	return <MotionComponent>DetailNews id:{id}</MotionComponent>
}