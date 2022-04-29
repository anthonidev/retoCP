import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IFormCheckout } from '../../types/types';
import { setAlert } from '../../hooks/alert';
import { post_payment } from '../../hooks/payment';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CheckConfirm = () => {
    const amout = useSelector((state: RootState) => state.cart.amount)
    const dispatch = useDispatch()
    const route = useRouter()
    const [render, setRender] = useState(false)
    const [formData, setFormData] = useState<IFormCheckout>({
        name: '',
        mail: '',
        dni: '',
        operation_date: '',
        num_card: '',
        date: '',
        cvv: ''
    })
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
        const item = e.currentTarget.classList
        const esValido = e.currentTarget.validity.valid
        console.log(esValido);

        if (esValido) {
            item.replace("border-gray-300", "border-green-300")
            item.replace("border-red-300", "border-green-300")
        } else {
            item.replace("border-gray-300", "border-red-300")
            item.replace("border-green-300", "border-red-300")

        }

    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (formData.num_card.length != 16) {
            dispatch(setAlert("El número de tarjeta debe tener 16 dígitos", "red"))

        } else if (formData.dni.length != 8) {
            dispatch(setAlert("El número de DNI debe tener 8 dígitos", "red"))

        } else if (formData.date.length != 4) {
            dispatch(setAlert("La fecha debe tener 4 dígitos (mm/aa)", "red"))

        } else if (formData.cvv.length != 3) {
            dispatch(setAlert("El codigo de CVV debe tener 3 dígitos (mm/aa)", "red"))


        } else {
            console.log("good");
            formData.operation_date = "123456789"
            dispatch(post_payment(formData.name, formData.mail, formData.dni, formData.operation_date))
            setRender(true)
        }

    };

    if (render)
        route.push("/thanks")

    return (
        <section
            aria-labelledby="summary-heading"
            className="relative "
        >
            <form onSubmit={onSubmit} className='lg:fixed bg-gray-50 dark:bg-dark-500 mt-16 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 w-96' >

                <h2 id="summary-heading" className="text-lg font-bold tracking-widest text-rou mx-2 my-2 dark:text-day-100">
                    Cineplanet
                </h2>

                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-2">
                        <input
                            name='name'
                            type='text'
                            onChange={onChange}
                            value={formData.name}
                            placeholder="Nombre Completo"
                            required
                            pattern="[a-zA-Z\s]{1,25}"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                        />
                        <input
                            type='email'

                            name='mail'

                            onChange={onChange}
                            value={formData.mail}
                            placeholder="Correo Electrónico"
                            required
                            // pattern="[^@\s]+@[^@\s]{1,25}"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"

                        />
                        <input
                            name={'dni'}
                            type='text'
                            onChange={onChange}
                            value={formData.dni}
                            placeholder="DNI"
                            required
                            maxLength={8}

                            pattern="[0-9]{1,8}"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                        />

                        <div className='mt-3 space-y-3' >
                            <h3>Metodo de Pago</h3>
                            <input
                                name={'num_card'}
                                type='text'
                                onChange={onChange}
                                value={formData.num_card}
                                placeholder="Número de Tarjeta"
                                required
                                maxLength={16}
                                pattern="[0-9]{1,16}"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                            />
                            <input
                                name={'date'}

                                pattern="[0-9]{1,4}"
                                type='text'
                                onChange={onChange}
                                value={formData.date}
                                placeholder="Fecha de expiracion (mm/aa)"
                                required
                                maxLength={4}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                            />
                            <input
                                name={'cvv'}
                                pattern="[0-9]{1,3}"
                                type='text'
                                onChange={onChange}
                                value={formData.cvv}
                                placeholder="CVV"
                                required
                                maxLength={3}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                            />


                        </div>

                    </div>


                </div>

                <dl className="mt-6 space-y-4">
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between text-gray-900 dark:text-day-100 text-base font-medium">
                        <dt >Suma del carrito</dt>
                        <dd className='font-semibold text-lg text-pri' >S/{amout !== null && amout.toFixed(2)}</dd>
                    </div>
                </dl>

                <div className="flex justify-between items-center">
                    <div className="mt-6">
                        <Link href={"/cart_info"}

                        >
                            <a className="w-full bg-white border-2 py-2 px-4 border-pri rounded-md hover:text-white hover:bg-pri-100">
                                Atras
                            </a>

                        </Link>

                    </div>

                    <div className="mt-6">
                        <button type='submit'
                            className="w-full bg-pri border border-transparent rounded-md shadow-sm py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                        >
                            Confirmar
                        </button>

                    </div>
                </div>

            </form>

        </section>
    )
}

export default CheckConfirm