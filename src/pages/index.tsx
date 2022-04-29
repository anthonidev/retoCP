import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Layout from '../components/layout/Layout'
import FilmCard from '../components/card/FilmCard';
import { productsHome } from '../hooks/film';
import { fadeInUp, routeAnimation, stagger } from '../animate/animations';
import { motion } from 'framer-motion';


const Home: NextPage = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsHome())
  }, [dispatch])

  const products = useSelector((state: RootState) => state.film.films);

  return (
    <Layout title='Home' content='home content' >

      <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit">
        <div className="max-w-7xl container mx-auto px-6 pt-9   ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {
                products?.map((product, index) => (
                  <motion.div variants={fadeInUp} key={index}>
                    <FilmCard product={product} />
                  </motion.div>
                ))
              }
            </div>
          </motion.div>


        </div>
      </motion.div>

    </Layout>
  )
}

export default Home
