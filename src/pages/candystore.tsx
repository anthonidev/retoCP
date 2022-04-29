import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CandyCard from '../components/card/CandyCard'
import Layout from '../components/layout/Layout'
import { get_candies } from '../hooks/candy'
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animate/animations'

const Candystore = () => {
    const dispatch = useDispatch()
    const candies = useSelector((state: RootState) => state.candy.candies);

    useEffect(() => {
        dispatch(get_candies())
    }, [dispatch])





    return (
        <Layout title='Dulceria | CinePlanet' content='candy store' >
            <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" >
                <div className="max-w-7xl container mx-auto px-6 pt-9   ">

                    <motion.div variants={stagger} initial="initial" animate="animate" className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {
                            candies?.map((candy, index) => (
                                <motion.div variants={fadeInUp} key={index}>
                                    <CandyCard candy={candy} />
                                </motion.div>
                            ))
                        }

                    </motion.div>

                </div>
            </motion.div>
        </Layout>

    )
}

export default Candystore