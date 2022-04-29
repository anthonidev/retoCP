import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CandyCard from '../components/card/CandyCard'
import Layout from '../components/layout/Layout'
import { get_candies } from '../hooks/candy'

const Candystore = () => {
    const dispatch = useDispatch()
    const candies = useSelector((state: RootState) => state.candy.candies);

    useEffect(() => {
        dispatch(get_candies())
    }, [dispatch])





    return (
        <Layout title='Dulceria | CinePlanet' content='candy store' >

                <div className="max-w-7xl container mx-auto px-6 pt-9   ">

                    <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {
                            candies?.map((candy,index) => (
                                <CandyCard candy={candy} key={index}/>
                            ))
                        }

                    </div>

                </div>
        </Layout>

    )
}

export default Candystore