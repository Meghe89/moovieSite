import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ConfigContext } from "../../../Contexts/Config/Index";

interface MoovieData {
  title: string;
  backdrop_path: string;
  poster_path: string;
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
        console.log(moovies)
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

           <div className="container">
           <div className="row mt-5">
             <div className="col-12">
               <h1>{moovies.title}</h1>
               {/* <p className="small"> <span className="text-accent">Developed by</span>  {moovies.developers[0].name} </p>
               <div className="d-flex justify-content-between"> <p className="small"><span className="text-accent">Published by</span>   {moovies.publishers[0].name}</p> <span className="small"><span className="text-accent">Rating </span> {game.rating}</span></div> */}
              
               <h6>Genres</h6>
              {/*  {game.genres              
               .map(game => (
                 <Link className={classes.genres} key={game.id} to={`/search/${game.slug}/1`}>
                   <button className={classes['custom-btn']}>
                   {game.name}
                   </button>
                   </Link>
               )
               )} */}
               
             </div>
             <div className="row mt-5">
               <div className="col-12 col-md-6 pt-3">
                 <p className="lead">
                  {/*  {game.description_raw} */}
                 </p>                
               </div>
               <div className="col-12 col-md-6 pt-3 ">
               <img src={`https://image.tmdb.org/t/p/w500${moovies.backdrop_path}`} className="img-fluid" alt="{game.name}"/>
               </div>
             </div>
             <div className="row my-5 ">
               <div className="col-6 col-md-3  ">
                 <h5 className="text-primary font-exan pb-2">Information</h5>
                 <p className="mb-0">WEBSITE</p>
                 {/* <a className={classes['website-anchor']} href={game.website} target="_blank">Go to</a><i className="fa-solid fa-angle-right ps-3 "></i> */}
                 <p className="mt-3 mb-0">RELEASED</p>
                {/*  {game.released} */}
                 <p className="mt-3 mb-0">PLAYTIME</p>
               {/*   {game.playtime} h */}
               </div>
               <div className="col-6 col-md-3 ">
               <h5 className="text-primary font-exan pb-2">Ratings</h5>              
                 <div className="d-flex justify-content-between ">
                 {/*   <span className={classes.upper}>{game.ratings[0].title}</span> */}
                   
                 {/*   <span>{game.ratings[0].percent} %</span> */}
                 </div>
                 <div className="d-flex justify-content-between">
                  {/*  <span className={classes.upper}>{game.ratings[1].title}</span> */}
                  {/*  <span>{game.ratings[1].percent} %</span> */}
                 </div>
                 <h5 className="text-primary font-exan pt-4">Platform</h5>
                {/*  {
                   game.platforms.map((el)=>el.platform.name).map(el=><div key={el.id}>{el}</div>)
                 } */}
               </div>
               <div className="col-6 col-md-3 ">
               <h5 className="text-primary font-exan pb-2">Streamers</h5>
               <ul>
                 <li>one</li>
                 <li>two</li>
                 <li>etc</li>
               </ul>
               </div>
               <div className="col-6 col-md-3 ">
{/*                  {
                   user ? (<Link
                     to={`/stream/${game.slug}/${game.id}`}
                     className="h4 text-primary font-exan pb-2 fts-italic text-decoration-none">
                       <i className="fa-solid fa-angle-right"/> Start Your Stream
                     </Link>) : ('You must be logged to stream')
                 }        */}
               </div>
             </div>
           </div>
           </div>
         </div>
       ) :  <p>loader</p>}   
    </>
 
     );
}
