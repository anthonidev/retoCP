import type { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Layout from '../components/layout/Layout'
import FilmCard from '../components/card/FilmCard';
import { productsHome } from '../hooks/film';


const Home: NextPage = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsHome())
  }, [dispatch])

  const products = useSelector((state: RootState) => state.film.films);

  return (
    <Layout title='Home' content='home content' >
      <div>

        <div className="max-w-7xl container mx-auto px-6 pt-9   ">

          <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

            {
              products?.map(product => (
                <FilmCard product={product} />
              ))
            }
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Home
