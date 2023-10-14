import classes from './Info.module.scss'

export default function Info() {
    return (
        <div className={"container-fluid " + classes['bg-info']}>
            <div className="container">
                <div className="row px-3 pt-5 ">
                    <div className={"col-12 col-lg-4 my-5 px-3 " + classes.info}>
                        <h3 className={"text-main " + classes["info-title"]}>
                            Register now!
                        </h3>
                        <p className="pt-2 ps-2">Register now, it's totally free!</p>
                    </div>
                    <div className={"col-12 col-lg-4 my-5 px-3 " + classes.info}>
                        <h3 className={"text-main " + classes["info-title"]}>
                            Choose your favourite moovies...
                        </h3>
                        <p className="pt-2 ps-2">among thousands of proposals</p>
                    </div>
                    <div className={"col-12 col-lg-4 my-5 px-3 " + classes.info}>
                        <h3 className={"text-main " + classes["info-title"]}>
                            ...start watching!
                        </h3>
                        <p className="pt-2 ps-2">
                            Enjoy movies with your friends
                        </p>
                    </div>
                </div>
                <div className="row px-md-5">
                    <div className="col-6 col-md-4 my-5 text-center text-md-start">
                        <i className="fa-solid fa-film fa-2x text-sec"></i>                                    
                        <p className="h1 my-2">583097</p>
                        <p>Movies</p>
                    </div>
                    <div className="col-6 col-md-4 my-5 text-center">
                        <i className="fas fa-stream fa-2x text-sec"></i>
                        <p className="h1 my-2">19</p>
                        <p>Categories</p>
                    </div>
                    <div className="col-6 col-md-4 my-5 text-center text-md-end">
                        <i className="fa-brands fa-video fa-2x text-sec"></i>                                                              
                        <p className="h1 my-2">51</p>
                        <p>Genres</p>
                    </div>
                    <div className="col-6 col-md-4 my-5 text-center text-md-start">
                        <i className="fas fa-users fa-2x text-sec"></i>                        
                        <p className="h1 my-2">48674</p>
                        <p>Users</p>
                    </div>
                    <div className="col-6 col-md-4 my-5 text-center">
                        <i className="fas fa-tag fa-2x text-sec"></i>
                        <p className="h1 my-2">7363</p>
                        <p>Tags</p>
                    </div>
                    <div className="col-6 col-md-4 my-5 text-center text-md-end">
                        <i className="fas fa-hands-helping fa-2x text-sec"></i>
                        <p className="h1 my-2">24935</p>
                        <p>???</p>
                    </div>
                </div>
            </div>
        </div>
    )
}