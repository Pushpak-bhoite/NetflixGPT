import React from 'react'
// import mData from './data.js'
import { useState } from 'react'
// import Carts from './Carts.jsx'
import logo from '../assets/image/logo.png'
import heroAuthImg from '../assets/image/header-image.png'
import AuthFormModal from './AuthFormModal.ts'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom'


export default function Home() {

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
                    const user = userCredential.user;
                    console.log('Login -> user', user)
                    setIsSignIn(prev => !prev)
                    navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('errorCode', errorCode)
                    console.log('errorMessage', errorMessage)
                });
        }
    };
    return (
        <>
            <div className='flex justify-center bg-black'>
                <div className='container bg-red-100 '>

                    <div className='min-h-screen position-relative m-0 p-0 '>
                        {/* <img  src={heroAuthImg} /> */}
                        <iframe
                            className="absolute inset-0 z-10 h-full w-full object-cover"
                            src="https://www.youtube.com/embed/-65VtGmPoi0?autoplay=1&mute=1&si=OYC9ToC-aXj_zXhv"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>

                        <div className=' absolute inset-0 z-10 bg-black opacity-60'></div>

                        <div className='z-30 absolute inset-0 bg-transparent'>
                            <img className=' h-10 absolute top-5 left-5' src={logo} alt="Logo" />
                            <button className='text-white absolute right-10 top-5' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Logout
                            </button>




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












