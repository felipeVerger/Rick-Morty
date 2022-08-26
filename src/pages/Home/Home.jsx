import React, {useState} from 'react'
import CardDetail from '../../components/CardDetail/CardDetail'
import Layout from '../../components/Layout/Layout'

import './Home.css'

const Home = () => {

  const [page, setPage] = useState(1);

  const handlePage = (type) => {
    if (type === 'next') {
      setPage(page + 1);
      window.scrollTo(0, 0);
    } else {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  }

  return (
      <Layout>
        <div className='home-container'>
          <h1>Characters</h1>
          <CardDetail page={page}/>
          <div className='pagination'>
            <button onClick={() => handlePage('prev')} className='prev-btn'>Prev</button>
            <button onClick={() => handlePage('next')} className='next-btn'>Next</button>
          </div>
        </div>
      </Layout>
  )
}

export default Home