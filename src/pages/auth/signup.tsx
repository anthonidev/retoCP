import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import { useRouter } from 'next/router';
import { IFormSignUp } from '../../types/interface';
import InputForm from '../../components/form/InputForm';
import { AppDispatch, RootState } from '../../app/store';
import Submit from '../../components/button/Submit';
import { signup } from '../../hooks/auth';
import Link from 'next/link';
import { setAlert } from '../../hooks/alert';

const Signup = () => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter();
    const [accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState<IFormSignUp>({
        first_name: '',
        last_name: '',
        dni: '',
        email: '',
        password: '',
        re_password: ''
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

        if (formData.dni.length != 8) {
            dispatch(setAlert("El número de DNI debe tener 8 dígitos", "red"))

        } else if (formData.password.length <= 8) {
            dispatch(setAlert("la contraseña debe ser mayor a 8 digitos", "red"))

        } else if (formData.password !== formData.re_password) {
            dispatch(setAlert("No coinciden las contraseñas", "red"))

        } else {
            console.log("good");
            dispatch(signup(formData.first_name, formData.last_name, formData.dni, formData.email, formData.password, formData.re_password))
            setAccountCreated(true);
            window.scrollTo(0, 0)
        }

    };



    if (accountCreated)
        router.push('/auth/login');

    return (
        <Layout title='Registrarse | Auth' content="registrar usuario">
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-pri">Registrate es gratis y lo seguira siendo</h2>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600">

                    <Link href="/auth/login" >
                        <a className='className="font-medium text-pri hover:text-indigo-500"'>Iniciar sessión</a>
                    </Link>
                </p>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={onSubmit} className="space-y-6">

                            <input
                                name='first_name'
                                type='text'
                                onChange={onChange}
                                value={formData.first_name}
                                placeholder="Nombres"
                                required
                                pattern="[a-zA-Z\s]{1,25}"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                            />
                            <input
                                name='last_name'
                                type='text'
                                onChange={onChange}
                                value={formData.last_name}
                                placeholder="Apellidos"
                                required
                                pattern="[a-zA-Z\s]{1,25}"
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

                            <input
                                type='email'

                                name='email'

                                onChange={onChange}
                                value={formData.email}
                                placeholder="Correo Electrónico"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"

                            />
                            <input
                                name={'password'}
                                type='password'
                                onChange={onChange}
                                value={formData.password}
                                placeholder="Contraseña"
                                required
                                minLength={8}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                            />
                            <input
                                name={'re_password'}
                                type='password'
                                onChange={onChange}
                                value={formData.re_password}
                                placeholder="Repetir Contraseña"

                                required
                                minLength={8}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                            />

                            <Submit loading={loading} text="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup