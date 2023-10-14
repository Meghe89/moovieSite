import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={"navbar navbar-expand-lg " + classes['custom-navbar']}>
            <div className="container-fluid">
                <Link className={'text-decoration-none font-exan tc-main ' + classes.links} to="/">
                    <i className="fa-solid fa-clapperboard fa-shake me-2" style={{color: '#e01b24'}}></i>
                    Megflix
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={"nav-link active tc-white " + classes.second} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link tc-white " + classes.second} href="#">Link</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    )
}