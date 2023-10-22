import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ConfigContext } from "../../../Contexts/Config/Index";

export default function Search(){


       const { id } = useParams<{ id: string }>();

       const { api_urls, api_secrets } = useContext(ConfigContext);

       useEffect(()=>{
         fetch(`${api_urls.games}3/discover/movie?api_key=${api_secrets.games}&language=it`)
         .then((res=>res.json()))
         .then((moovies)=>{
            console.log(moovies)
         })
         .catch((e=>console.log(e)))
        },[api_secrets.games, api_urls.games, id])

    return (
        <p>sono search e visualizzo {id}</p>
    )
}
