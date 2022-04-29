import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Icandy } from '../../types/insterfaces/Candy'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { add_item } from '../../hooks/cart'
import { setAlert } from '../../hooks/alert'
import { itemCart } from '../../types/insterfaces/Cart'
import Link from 'next/link';

const CandyCard: FunctionComponent<{ candy: Icandy }> = ({ candy: {
  description,
  name,
  price
}

}) => {
  const [loading, setLoading] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items)
  const candies = useSelector((state: RootState) => state.candy.candies);
  const total_items = useSelector((state: RootState) => state.cart.total_items)
  const amout = useSelector((state: RootState) => state.cart.amount)

  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  const dispatch = useDispatch()


  const addToCart = async () => {

    setLoading(true)
    const productAdd = candies !== null && candies.find((element: Icandy) => element.name + element.description + element.price === name + description + price)
    const MoreThatOne = items !== null && items.find((element: itemCart) => element.candy.name + element.candy.description + element.candy.price === name + description + price);

    MoreThatOne === undefined ? dispatch(setAlert('Producto Agredo', 'green')) : dispatch(setAlert('Producto actualizado', 'green'))

    dispatch(add_item({ description, name, price }));
    setLoading(false)


  }


  return (
    <div className='bg-white  rounded-sm p-1 '>

      <div className='m-4'>
        <Image
          src={name}
          layout="responsive"
          height="200"
          width="200"
          alt={description}

        />
      </div>
      <div className='flex'>
        <div className='font-bold ml-4 w-4/5 '>
          <h1 className='text-pri '>{description}</h1>
          <div className='flex space-x-2 mt-2'>
            <p className='text-rou'>S/{price}</p>

          </div>


        </div>

        <div className=' flex justify-center items-end mb-2   w-1/5 '>
          {loading ? <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button> :
            <button onClick={addToCart} className='bg-rou p-2 rounded-md hover:bg-pri'>
              <RiShoppingCartFill className='h-6 w-6  text-white' />
            </button>
          }

        </div>

      </div>

    </div>
  )
}

export default CandyCard