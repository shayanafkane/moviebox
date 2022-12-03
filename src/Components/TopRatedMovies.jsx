import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'
export default function TopRatedMovies() {
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [data, setData] = useState()
    function GetData() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=06eab33cd5f147c733290f1947a2f9c0&language=en-US&page=${pageNumber}`)
            .then(res => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        GetData()
    }, [])

    function scrollTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }


    if (loading) {
        return <p>loading</p>
    } else {
        return (
            <div className='box-top-rated-movies mt-5'>
                {data.map(data => {
                    return (
                        <div className="item-movie d-flex align-items-center">
                            <div className="image-movie">
                                <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500/` + data.poster_path} alt="" />
                            </div>
                            <div className="des-movie ms-3">
                                <div className="title">
                                    <h4 className='text-white'>{data.original_title
                                    }</h4>
                                </div>
                                <div className="star text-white d-flex align-items-center">
                                    <FaStar className='mb-1' />
                                    <p className='mb-0 ms-1'>{data.vote_average}</p>
                                </div>
                                <div className="overview-movie text-white">
                                    <p className='mb-2'>overview : </p>
                                    <p className='mb-0'>{data.overview}</p>
                                </div>
                                <div className="button-show-page mt-4">
                                    <Button variant="outline-primary" >Read More</Button>
                                </div>
                            </div>
                        </div>
                    )
                })

                }
                <div className="box-pagination d-flex justify-content-center">

                    <Button variant='primary' onClick={() => {
                        setPageNumber(pageNumber + 1)
                        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=06eab33cd5f147c733290f1947a2f9c0&language=en-US&page=${pageNumber + 1}`)
                            .then(res => {
                                setData(res.data.results)
                                setLoading(false)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                            scrollTop()
                    }} className='my-4 next'>Next</Button>
                    {pageNumber == 1 ?
                        <Button variant='secondary' disabled className='my-4 back'>Back</Button>
                        :
                        <Button variant='secondary' onClick={() => {
                            setPageNumber(pageNumber - 1);
                            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=06eab33cd5f147c733290f1947a2f9c0&language=en-US&page=${pageNumber - 1}`)
                                .then(res => {
                                    setData(res.data.results)
                                    setLoading(false)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                                
                          
                        }} className='my-4 back'>Back</Button>
                    }
                </div>
            </div>
        )
    }

}
