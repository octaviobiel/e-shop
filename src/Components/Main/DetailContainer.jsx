import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../CustomHooks/useFetch';
import CardDetail from './CardDetail';

const DetailContainer = () => {

const { id } = useParams();

const { data, error } = useFetch(`detail/${id}`)


  return (
    <div>
        {data ? <CardDetail item = {data} /> : <h1>Cargando...</h1>}
    </div>
  )
}

export default DetailContainer