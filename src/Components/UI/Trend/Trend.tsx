import { useEffect, useState } from 'react';
import classes from './Trend.module.scss';

interface Movie {
    id: number,
    vote_average: number,
    poster_path:string,
    title: string
    release_date: string
}

export default function Trend() {

    const [ moovies, setMoovies ] = useState<Movie[]>([]);

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&api_key=d976e5b9098a131c0595514a4577fb44`)
    .then((res=>res.json()))
    .then((moovies)=>{
        console.log(moovies.results);
        setMoovies(moovies.results);
    })
    .catch((e=>console.log(e)))
   },[])

   function truncateTitle(title:string) {
    return title.length >= 35 ? title.substring(0,33) + '...' : title
   }

    return (
        <>
        {moovies ? 
            (
                <div className="container-fluid mt-5 px-5">
            <div className="row mb-5">
                <h2>Week trends</h2>
                <div className={"col-12 d-flex " + classes.overflow}>
                    {moovies.map((moovie)=>(
                        <div key={moovie.id} className={classes["movie-card"]}>
                        <div className={classes['movie-points']}>{moovie.vote_average}</div>
                        <img src={`https://image.tmdb.org/t/p/w500${moovie.poster_path}`} alt="img-movie" />
                        <div className={classes["movie-info"]}>
                        <p className={classes["movie-title"]}>{truncateTitle(moovie.title)}</p>

                        <div className='d-flex justify-content-between'>
                            <p className='p-0 m-0'>{moovie.release_date.substring(0,4)}</p>
                            <p className='p-0 m-0'>40</p>
                        </div>
                        </div>                    
                        </div> 
                    ))}       
                </div>
            </div>
        </div>
            ) : (<p>Loading</p>)
        } 
        </>
    )
}