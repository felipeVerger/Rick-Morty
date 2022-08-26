import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getCharacterById } from '../../service/service'
import Layout from '../Layout/Layout'
import Loading from '../Loading/Loading'

import './Character.css'

const Character = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(['getCharacter', id], () => getCharacterById(id),{
    // enabled: false,
  })

  console.log(data);

  return (
    <Layout>
        { isLoading ? (
            <Loading/>
        ) : (
        <div className='character-container'>
            <div className='character-content'>
                <div className='character-card'>
                    <img src={data?.image} alt="image" />
                    <div className='character-info'>
                        <h2>{data?.name}</h2>
                        <span>{data?.gender}</span>
                        <span>{data?.species}</span>
                        <span>{data?.status}</span>
                        <span>{data?.origin.name}</span>
                    </div>
                </div>
            </div>
        </div>
        )}
    </Layout>
  )
}

export default Character