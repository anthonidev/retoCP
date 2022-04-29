import React from 'react'
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const Thanks = () => {

    return (
        <Layout title='Gracias | CinePlanet' content='candy store' >

            <div className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <div className='flex flex-col justify-center items-center lg:mt-28 mt-4 md:mt-14'>
                    <div className='text-7xl font-semibold text-rou'>Gracias por su compra!🎉 </div>
                    <Link href={"/"}>
                        <a className='mt-4 bg-pri-100 text-white p-3 rounded-md hover:bg-indigo-600'>Ir al Inicio</a>
                    </Link>

                </div>
            </div>
        </Layout>
    )
}

export default Thanks