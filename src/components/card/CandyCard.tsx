import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { Ifilm } from '../../types/insterfaces/Film'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'
import { Icandy } from '../../types/insterfaces/Candy'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { add_item } from '../../hooks/cart'
import { setAlert } from '../../hooks/alert'
import { itemCart } from '../../types/insterfaces/Cart'

const CandyCard: FunctionComponent<{ candy: Icandy }> = ({ candy: {
  description,
  name,
  price
}
}) => {
  const [loading, setLoading] = useState(false);
  const amount = useSelector((state: RootState) => state.cart.amount)
  const items = useSelector((state: RootState) => state.cart.items)
  const total_items = useSelector((state: RootState) => state.cart.total_items)
  const candies = useSelector((state: RootState) => state.candy.candies);

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
    const productAdd = candies !== null && candies.find((element: Icandy) => element.name === name)
    const MoreThatOne = items !== null && items.find((element: itemCart) => element.candy.name === name);

    MoreThatOne === undefined ? openModal() : dispatch(setAlert('Producto actualizadoasd', 'green'))
    // const productAdd = candies &&  && candies !== undefined && 
    // const MoreThatOne = items && items !== null && items !== undefined && items.find((element: any) => element.items.name === name);
    // MoreThatOne === undefined ? openModal() : dispatch(setAlert('Producto actualizadoasd', 'green'))
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
            <button onClick={addToCart} className='bg-rou p-2 rounded-md'>
              <RiShoppingCartFill className='h-6 w-6  text-white' />
            </button>
          }



        </div>

      </div>

    </div>
  )
}

export default CandyCard