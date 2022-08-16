import React from 'react'
import CardList from './CardList';
import style from './CardContainer.module.css'
import useFetch from '../CustomHooks/useFetch';
import { useParams } from 'react-router-dom';

const CardContainer = () => {

    const { category } = useParams();

    const endpoint = category ? `category/${category}` : '';

    const {data, error} = useFetch(endpoint);

    const firstLetterToUpperCase = (param) => {
        return param[0].toUpperCase() + category.slice(1);
    }

    return (
        <>
            <div className = {style.cardContainer}>
                <h2>{ category ? firstLetterToUpperCase(category) : `Productos`}</h2>
                {data ? <CardList items = {data}/> : <h1>Cargando...</h1>}
            </div>
        </>
  )
}

export default CardContainer