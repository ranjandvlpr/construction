import React from 'react';
import logo from '../Images/logo.png'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ height: '5rem', backgroundColor: 'rgb(1, 34, 54)', zIndex: '5', position: 'fixed', width: '100%' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: 'white' }}>
                    <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '75px' }} />
                    Home
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>Gallery</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true" style={{ color: 'white' }}>Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit" style={{ color: 'white' }}>BAJRANGI CONSTRUCTIONS TRADING COMPANY</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
