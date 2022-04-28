import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CandyCard from '../components/card/CandyCard'
import Layout from '../components/layout/Layout'
import { get_candies } from '../hooks/candy'

const candystore = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_candies())
    }, [dispatch])

    const candies = useSelector((state: RootState) => state.candy.candies);

    



    return (
        <Layout title='Dulceria | CinePlanet' content='candy store' >
            <div>

                <div className="max-w-7xl container mx-auto px-6 pt-9   ">

                    <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {
                            candies?.map((candy,index) => (
                                <CandyCard candy={candy} key={index}/>
                            ))
                        }

                    </div>

                </div>
            </div>
        </Layout>

    )
}

export default candystore