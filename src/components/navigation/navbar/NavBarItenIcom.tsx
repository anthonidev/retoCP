import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCartFill, RiUser3Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'

const NavBarItenIcom: FunctionComponent<{ openUser: () => void }> = ({ openUser }) => {

    const total_items = useSelector((state: RootState) => state.cart.total_items)
    return (
        <div className='flex'>

            <div className='w-full '>
                <Link href={"/cart_info"}>
                    <a>
                      
                        <div className="flex flex-row justify-between  cursor-pointer truncate p-2 px-4  rounded">
                            <div></div>
                            <div className="flex flex-row-reverse ml-2 w-full">
                                <div slot="icon" className="relative">
                                    <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-rou text-white">{total_items}</div>
                                    <RiShoppingCartFill className='h-6 w-6 ' />
                                </div>
                            </div>
                        </div>
                    </a>

                </Link>
            </div>

            <div className='w-full flex justify-between '>
                <button onClick={openUser} >
                    <div className={` mx-6  hover:text-white   `}>
                        <RiUser3Fill className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
        </div>
    )
}

export default NavBarItenIcom