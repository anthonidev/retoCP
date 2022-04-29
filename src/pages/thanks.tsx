import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import useEffect from 'react';
import Layout from '../components/layout/Layout';

const Thanks = () => {
    const route = useRouter()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    return (
        <Layout title='Gracias | CinePlanet' content='candy store' >

            <div className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div>thanks</div>
            </div>
        </Layout>
    )
}

export default Thanks