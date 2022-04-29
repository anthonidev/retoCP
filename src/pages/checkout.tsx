import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CartItem from '../components/cart/CartItem'
import CheckConfirm from '../components/cart/CheckConfirm'
import OrderSumary from '../components/cart/OrderSumary'
import Layout from '../components/layout/Layout'
import { itemCart } from '../types/insterfaces/Cart'
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animate/animations'

const Checkout = () => {
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

    return (
        <Layout title='Carrito | CinePlanet' content='candy store' >

           
            <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

                <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        {total_items !== null && total_items > 0 ? showItems() : <>No products</>}
                    </section>

                    <CheckConfirm />

                </div>
            </motion.div>
        </Layout>

    )
}

export default Checkout