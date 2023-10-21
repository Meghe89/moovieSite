import { useContext, useEffect, useState } from 'react';
import classes from './Trend.module.scss';
import Card from '../Card/Card';
import { ConfigContext } from '../../../Contexts/Config/Index';

interface Movie {
    id: number,
    vote_average: number,
    poster_path:string,
    title: string
    release_date: string
}

export default function Trend() {

    const [ moovies, setMoovies ] = useState<Movie[]>([]);

    let { api_urls, api_secrets } = useContext(ConfigContext);

   useEffect(()=>{
    fetch(`${api_urls.games}/3/discover/movie?include_adult=false&include_video=false&language=it&page=1&sort_by=popularity.desc&api_key=${api_secrets.games}`)
    .then((res=>res.json()))
    .then((moovies)=>{
        setMoovies(moovies.results);
    })
    .catch((e=>console.log(e)))
   },[api_secrets.games, api_urls.games])

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
                        <Card
                            id ={moovie.id}
                            vote ={moovie.vote_average}
                            img = {moovie.poster_path}
                            title = {truncateTitle(moovie.title)}
                            release = {moovie.release_date}
                        />
                    ))}       
                </div>
            </div>
        </div>
            ) : (<p>Loading</p>)
        } 
        </>
    )
}