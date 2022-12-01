import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from 'axios';

export default function Hero() {
    const [trendMovies, setTrendMovies] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=06eab33cd5f147c733290f1947a2f9c0&language=fa").then(res => {
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
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {trendMovies.map(data => {

                        return <SwiperSlide className='h-100 position-relative'>

                            <img className='img-fluid ' src={`https://image.tmdb.org/t/p/original/` + data.backdrop_path

                            } alt="" />
                            <div className="position-absolute box-text-swiper-hero">
                                <p className='text-white fs-lg'>{
                                    data.original_title
                                }</p>
                            </div>
                        </SwiperSlide>
                    })

                    }

                </Swiper>
            </div>
        )
    }

}
