import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ConfigContext } from "../../../Contexts/Config/Index";
import classes from './Moovie.module.scss'

interface Genre {
  id: number;
  name: string;
}

interface Lenguages {
  id: number;
  name: string;
}

interface Companies {
  id: number;
  name: string;
}
interface MoovieData {
  title: string;
  backdrop_path: string;
  poster_path: string;
  tagline: string;
  genres: Genre[];
  overview: string;
  original_language: string;
  original_title: string;
  release_date: string;
  spoken_languages: Lenguages[];
  status: string;
  budget: number;
  revenue: number;
  production_companies: Companies[];
  popularity: number;
  runtime: number;
  vote_average: number;
  vote_count; number;
  adult: boolean;
  // Altre proprietà del film
}

export default function Moovie() {
  const { id } = useParams<{ id: string }>();
  const { api_urls, api_secrets } = useContext(ConfigContext);

  const [moovies, setMoovies] = useState<MoovieData | null>(null);

  useEffect(()=>{
    fetch(`${api_urls.games}/3/movie/${id}?api_key=${api_secrets.games}&language=it`)
    .then((res=>res.json()))
    .then((moovies)=>{
        setMoovies(moovies);
    })
    .catch((e=>console.log(e)))
   },[api_secrets.games, api_urls.games, id])

   return (
    <>
     {
       moovies ? (
        <div className="container-fluid pt-5 min-vh-100" 
          style={{
            background: `linear-gradient(rgba(33, 33, 33, 1), rgba(22, 22, 22, 0.8), rgba(33, 33, 33, 1)), url(https://image.tmdb.org/t/p/original${moovies.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-9 order-2 order-md-1">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                    <span className="fs-1">{moovies.title}</span>
                    {
                      moovies.adult && <span className={classes.bullet}></span>
                    }

                    </div>
                    <p>{moovies.tagline}</p>
                    {
                      moovies.genres &&
                        moovies.genres.map((genre)=>(
                          <Link key={genre.id} className={classes['genres-container']} to={`/search/${genre.id}`}>
                            <button className={'btn btn-outline-danger me-2'}>{genre.name}</button>
                          </Link>
                        ))
                    }
                    <div className="mt-5">
                      <p className="lead">{moovies.overview}</p>
                    </div>
                    <h4 className="my-5 tc-white font-exan">Info:</h4>
                    {
                      moovies.original_title &&
                      <p className='tc-sec'>Titolo Originale: <span className="tc-white">{moovies.original_title}</span></p>
                    }
                    {
                      moovies.release_date && 
                      <p className='tc-sec'>Data uscita: <span className="tc-white">{moovies.release_date}</span></p>
                    }
                     {
                            moovies.status &&
                            <p className="tc-sec">Stato: <span className="tc-white">{moovies.status}</span></p>
                          }
                    <div className="row flex-row">
                      <div className="col-12 col-md-4">
                      <h6 className="my-5 tc-white font-exan">Language:</h6>
                          {
                            moovies.original_language &&
                            <p className="tc-sec">Lingua Originale: <span className="tc-white">{moovies.original_language}</span></p>
                          }
                          <p className="tc-sec">Spoken Languages:</p>
                          <ul>

                          {
                            moovies.spoken_languages && 
                            moovies.spoken_languages.map((lang) => (
                              <li key={lang.id}>{lang.name}</li>
                            ))
                          }
                          </ul>
                      </div>
                      <div className="col-12 col-md-4">
                      <h6 className="my-5 tc-white font-exan">Money:</h6>
                      {
                        moovies.budget &&
                        <p className="tc-sec">Budget: <span className="tc-white">{moovies.budget}</span></p>
                      }
                      {
                        moovies.revenue &&
                        <p className="tc-sec">Guadagni: <span className="tc-white">{moovies.revenue}</span></p>
                      }
                      </div>
                      <div className="col-12 col-md-4">
                      <h6 className="my-5 tc-white font-exan">Production:</h6>
                      <ul>
                      {
                        moovies.production_companies &&
                        moovies.production_companies.map((company)=>(
                          <li key={company.id}>{company.name}</li>
                        ))
                      }
                      </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-5">
                      <h6 className="my-5 tc-white font-exan">Numbers:</h6>
                      {
                        moovies.popularity &&
                        <p className="tc-sec">Popolarità: <span className="tc-white">{moovies.popularity}</span></p>
                      }
                      {
                        moovies.runtime &&
                        <p className="tc-sec">Visualizzazioni: <span className="tc-white">{moovies.runtime}</span></p>
                      }
                      {
                        moovies.vote_average &&
                        <p className="tc-sec">Media Voti: <span className="tc-white">{moovies.vote_average}</span></p>
                      }
                      {
                        moovies.vote_count &&
                        <p className="tc-sec">Numero Voti: <span className="tc-white">{moovies.vote_count}</span></p>
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 order-1 order-md-2 d-flex justify-content-center">
              <img src={`https://image.tmdb.org/t/p/w500${moovies.poster_path}`} className={"img-fluid " + classes.image} alt="{game.name}"/>
              </div>
            </div>
          </div>

           
         </div>
       ) :  <p>loader</p>}   
    </>
 
     );
}
