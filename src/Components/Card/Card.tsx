import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import classes from './Card.module.scss';

export default function Card(props: { id: Key | null | undefined; vote: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; img: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; release: string; }) {
    return (
        <div key={props.id} className={classes["movie-card"]}>
        <div className={classes['movie-points']}>{props.vote}</div>
        <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="img-movie" />
        <div className={classes["movie-info"]}>
            <p className={classes["movie-title"]}>{props.title}</p>
            <div className='d-flex justify-content-between'>
                <p className='p-0 m-0'>{props.release.substring(0,4)}</p>
                <p className='p-0 m-0'>40</p>
            </div>
        </div>                    
    </div> 
    )
}