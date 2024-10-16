import React from 'react'
import mData from './data.js'
import { useState } from 'react'
import Carts from './Carts.jsx'
import logo from '../assets/image/logo.png'
import AuthFormModal from './AuthFormModal.jsx'


export default function Section() {

    const [movies, setMovies] = useState(mData)
    const [search, setSearch] = useState({ iSearch: "" })

    // console.log(data)
    let movie = movies.filter((e) => e.title.toLowerCase().includes(search.iSearch)).map((e) => {
        return <Carts key={e.id} movie={e} />

    })

    function searchFunc(event) {
        let form = event.target
        setSearch(prev => ({ ...prev, [form.name]: form.value }));
    }
    return (
        <>
            <div>
                <div className='hero-container '>

                    <div className='heroImg '>
                        <div className='heroImg-child'>
                            <div className='position-relative '>
                                <div>
                                    <img className='logo mt-4' src={logo} alt="" />
                                </div>
                                <div className='nav-text mt-4' >
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Login
                                    </button>
                                    <AuthFormModal />
                                </div>
                            </div>

                            <div className='hero-text-container'>
                                <h4 className='hero-lg-text w-50 text-white'>Unlimited movies, TV shows and more</h4>
                                <b>Starts at ₹149. Cancel anytime.</b>
                                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='search-container form-control'>
                    <input onChange={searchFunc} name='iSearch' value={search.iSearch} type="text" className='rounded-pill m-5' placeholder='search ' />
                </div>

                <div className='d-flex flex-wrap p-4 justify-content-center gap-4' >
                    {movie}
                </div>
            </div>
        </>
    )
}














// id:e.id,
//         title:e.title,
//         year:e.year,
//         rating:e.rating,
//         poster: e.poster,
//         trailer: e.trailer,
//         genre: e.genre,
//         cast: e.cast,
//         director:e.director