import React from 'react'
import { useParams } from 'react-router'

const Prueba = () => {
  const {id} = useParams()
  console.log(id)

    return (
    <div>Prueba</div>
  )
}

export default Prueba