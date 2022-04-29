import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const OrderSumary = () => {
    const amout = useSelector((state: RootState) => state.cart.amount)
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const total_items = useSelector((state: RootState) => state.cart.total_items)

    const showButton = () => {
        if (isAuthenticated) {
            return (
                <Link href={'/checkout'} >
                    <div className="mt-6">
                        <button
                            className="w-full bg-pri border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                        >
                            Procesar Pedido
                        </button>
                    </div>

                </Link>
            )
        } else {
            return (

                <Link href='/auth/login' >
                    <div className="mt-6 ">

                        <button
                            className="bg-pri w-full  border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                        <span className='text-rou mt-3 text-sm flex justify-center font-medium'>Necesitar iniciar sesión para procesar la compra.</span>

                    </div>
                </Link>
            )


        }
    }

    return (
        <section
            aria-labelledby="summary-heading"
            className="relative "
        >
            <div className='lg:fixed bg-gray-50 dark:bg-dark-500 mt-16 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 w-96' >

                <h2 id="summary-heading" className="text-lg font-bold tracking-widest text-rou mx-2 my-2 dark:text-day-100">
                    Cineplanet
                </h2>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between text-gray-900 dark:text-day-100 text-base font-medium">
                    <dt >Total Items</dt>
                    <dd className='font-semibold text-lg text-pri' >{total_items}</dd>
                </div>

                <dl className="mt-6 space-y-4">
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between text-gray-900 dark:text-day-100 text-base font-medium">
                        <dt >Suma del carrito</dt>
                        <dd className='font-semibold text-lg text-pri' >S/{amout !== null && amout.toFixed(2)}</dd>
                    </div>
                </dl>

                {showButton()}
            </div>

        </section>
    )
}

export default OrderSumary