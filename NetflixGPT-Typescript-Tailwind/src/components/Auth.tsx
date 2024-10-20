import React, { useEffect } from 'react'
// import mData from './data.js'
import { useState } from 'react'
// import Carts from './Carts.jsx'
import logo from '../assets/image/logo.png'
import heroAuthImg from '../assets/image/header-image.png'
import AuthFormModal from './AuthFormModal.ts'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom'


export default function Auth() {

    // const [movies, setMovies] = useState(mData)
    const [search, setSearch] = useState({ iSearch: "" })
    const [isSignIn, setIsSignIn] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate();
    // console.log(data)
    // let movie = movies.filter((e) => e.title.toLowerCase().includes(search.iSearch)).map((e) => {
    //     return <Carts key={e.id} movie={e} />
    // })

    function searchFunc(event) {
        let form = event.target
        setSearch(prev => ({ ...prev, [form.name]: form.value }));
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    console.log('isSignIn', isSignIn)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form validation logic here


        console.log('Form Data Submitted:', formData);
        if (isSignIn) {
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('use', user)
                    setFormData(({
                        name: '',
                        email: '',
                        password: '',
                    }))
                    setIsSignIn(prev => !prev)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('errorCode', errorCode)
                    console.log('errorMessage', errorMessage)
                });


        } else {
            signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    const userData:any = userCredential.user;
                    console.log('Login -> user',userData?.accessToken)
                    localStorage.setItem('NetflixLoginToken', userData?.accessToken)
                    navigate('/home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('errorCode', errorCode)
                    console.log('errorMessage', errorMessage)
                });
        }
    };

    useEffect(()=>{
        let token:string | null = localStorage.getItem('NetflixLoginToken') || null
        if(token){
            navigate('/home')
        }
        console.log(typeof token)
    })
    return (
        <>
            <div className='flex justify-center bg-black'>
                <div className='container bg-red-100 '>

                    <div className='min-h-screen position-relative m-0 p-0 '>
                        <img className='absolute inset-0 z-10 h-full w-full object-cover  ' src={heroAuthImg} />
                        <div className=' absolute inset-0 z-10 bg-gradient-to-t from-transparent from-60 to-black'></div>

                        <div className='z-30 absolute inset-0 bg-transparent'>
                            <img className=' h-10 absolute top-5 left-5' src={logo} alt="Logo" />
                            {/* <button className='text-white absolute right-10 top-5' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Sign In
                            </button> */}
                            <div className="flex flex-col justify-center items-center h-full">
                                <div className="w-full max-w-xs">
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                                        {isSignIn && <div className="mb-4">
                                            <label
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                                htmlFor="name"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>}

                                        <div className="mb-4">
                                            <label
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                                htmlFor="password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="******************"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                            />
                                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                            >
                                                Sign In
                                            </button>
                                            <span onClick={() => setIsSignIn((prev) => { return !prev })}
                                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                            >
                                                {isSignIn ? 'Sign In' : ' Sign Up'}
                                            </span>
                                        </div>
                                    </form>
                                    <p className="text-center text-gray-500 text-xs">
                                        ©2024 Acme Corp. All rights reserved.
                                    </p>
                                </div>
                            </div>




                        </div>
                    </div>

                </div>

                {/* <div className='search-container form-control'>
                    <input onChange={searchFunc} name='iSearch' value={search.iSearch} type="text" className='rounded-pill m-5' placeholder='search ' />
                </div>

                <div className='d-flex flex-wrap p-4 justify-content-center gap-4' >
                    {movie}
                </div> */}






            </div>
        </>
    )
}












