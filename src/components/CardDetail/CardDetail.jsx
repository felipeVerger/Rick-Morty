import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { getAllCharacters } from '../../service/service';
import Loading from '../Loading/Loading';

import './CardDetail.css'

const CardDetail = ({ page }) => {

    const { data, isLoading, isError, error } = useQuery(['getAllCharacters', page], () => getAllCharacters(page), {
        keepPreviousData: true
    })

    if(isLoading) {
        return <Loading/>
    }

  return (
    <div className='card-detail-container'>
        {data?.results?.map(item => {
            return (
                <div key={item.id} className='card-block'>
                    <img src={item.image} alt={item.name} />
                    <div className='card-block-content'>
                        <div className='card-categories'>
                            <span>Name:</span>
                            <span>Gender:</span>
                            <span>Specie:</span>
                            <span>Status:</span>
                        </div>
                        <div className='card-info'>
                            <h3>{item.name}</h3>
                            <h3>{item.gender}</h3>
                            <h3>{item.species}</h3>
                            <h3>{item.status}</h3>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default CardDetail