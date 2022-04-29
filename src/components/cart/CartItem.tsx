import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setAlert } from '../../hooks/alert';
import { itemCart } from '../../types/insterfaces/Cart';
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { remove_item, update_item } from '../../hooks/cart';


const CartItem: FunctionComponent<{
    item: itemCart;
}> = ({
    item: {
        count,
        candy
    }
}) => {
        const dispatch = useDispatch();
        const { pathname } = useRouter();

        const [formData, setFormData] = useState({
            item_count: 1
        });


        const { item_count } = formData;

        useEffect(() => {
            if (count)
                setFormData({ ...formData, item_count: count });
        }, [count]);

        const onChange = (e: React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

        const onSubmit = (e: React.SyntheticEvent) => {
            e.preventDefault();

            if (dispatch && dispatch !== null && dispatch !== undefined) {
                dispatch(update_item(candy, item_count));
                dispatch(setAlert('Carrito actualizado', 'green'));
            }

        };

        const removeItemHandler = () => {
            dispatch(remove_item(candy));
            dispatch(setAlert('Producto Eliminado', 'red'));
        };

        return (
            <li className="flex flex-col sm:flex-row py-6 sm:py-10 bg-white m-2 px-3 rounded-lg ">
                <div className="flex-shrink-0 mx-4">
                    <Image
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        src={candy.name}
                        alt={candy.description}
                        layout="intrinsic"
                        height="150"
                        width="150"
                    />

                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between  sm:ml-6 mx-4">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-sm">
                                    <span className="font-bold text-pri  lg:text-lg">{candy.description}</span>
                                </h3>
                            </div>
                            {
                                pathname !== '/checkout' ? (
                                    <form onSubmit={e => onSubmit(e)}>
                                        <div className='flex flex-col justify-start items-start w-20  my-3'>
                                            <select
                                                name='item_count'
                                                onChange={(e) => onChange(e)}
                                                value={item_count}
                                                className="my-2 font-sofiapro-light  inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                            </select>
                                            <button
                                                type="submit"
                                                className="-m-2 p-2 inline-flex border-2 border-gray-300  bg-white hover:bg-pri-100 hover:text-white rounded-lg mt-2">
                                                <span className="mx-2 ">Actualizar</span>
                                            </button>

                                        </div>

                                    </form>) : (
                                    <div className="my-3 flex text-sm text-gray-500 dark:text-white">
                                        <p className="">Cantidad:</p>
                                        <p className="ml-3 ">{item_count}</p>
                                    </div>
                                )
                            }

                        </div>


                        <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-sky-600">$ {candy.price}</p>
                        {
                            pathname !== '/checkout' ? (<div className="mt-4 sm:mt-0 sm:pr-9 ">

                                <div className="absolute top-0 right-0 ">
                                    <button
                                        onClick={removeItemHandler}
                                        className="-m-2 p-2 inline-flex text-red-400 hover:text-red-500 ">
                                        <RiDeleteBin2Fill className="h-7 w-7" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>) : ''
                        }

                    </div>


                </div>
            </li>
        )
    }

export default CartItem