import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import axios from 'axios';

export default function Hero() {
    const [trendMovies, setTrendMovies] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=06eab33cd5f147c733290f1947a2f9c0").then(res => {
            setTrendMovies(res.data.results)
            setLoading(false)
        })
            .catch(err => console.log(err))
    }, [])
    if (loading) {
        return <p>loading</p>
    } else {
        return (
            <div className='swiperBox-Hero'>
                <Swiper autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                    {trendMovies.map(data => {
                        return <SwiperSlide className='h-100 position-relative'>
                            <img className='img-fluid ' src={`https://image.tmdb.org/t/p/original/` + data.backdrop_path
                            } alt="" />
                            <div className="position-absolute box-text-swiper-hero">
                                <p className='text-white fs-lg mt-5 mx-4'>{
                                    data.original_title
                                }</p>

                                <p className='overview-movie fs-m mt-2 mx-4'>
                                    {data.overview}
                                </p>
                            </div>
                        </SwiperSlide>
                    })

                    }

                </Swiper>
            </div>
        )
    }

}
