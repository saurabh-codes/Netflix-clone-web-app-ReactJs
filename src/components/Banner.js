import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    return (
        <div className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>

            <div className='contents'>
                <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='button'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>

                <h1 className='description'>{movie?.overview}</h1>
            </div>

        </div>
    )
}

export default Banner