import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CartItem from '../components/cart/CartItem'
import OrderSumary from '../components/cart/OrderSumary'
import Layout from '../components/layout/Layout'
import { itemCart } from '../types/insterfaces/Cart'
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animate/animations'
import Link from 'next/link'

const Cart_info = () => {
    const items = useSelector((state: RootState) => state.cart.items)
    const total_items = useSelector((state: RootState) => state.cart.total_items)

    const showItems = () => {
        return (
            <div>
                {
                    items !== null &&
                    items.length !== 0 &&
                    items.map((item: itemCart, index: number) => {
                        return (
                            <motion.div variants={fadeInUp} key={index}>
                                <CartItem
                                    item={item}
                                />
                            </motion.div>
                        );
                    })
                }
            </div>
        )
    }
    const noProduct = () => {
        return (
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-lg' >No hay productos en tu carrito</h1>
                <Link href="/candystore"><a className='text-pri font-bold' >Ir a la dulceria!</a></Link>
            </div>
        )
    }
    return (
        <Layout title='Carrito | CinePlanet' content='candy store' >
            <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit">
                <div className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

                    <motion.div variants={stagger} initial="initial" animate="animate" className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            {total_items !== null && total_items > 0 ? showItems() : noProduct()}
                        </section>

                        <OrderSumary />
                    </motion.div>
                </div>
            </motion.div>
        </Layout>

    )
}

export default Cart_info