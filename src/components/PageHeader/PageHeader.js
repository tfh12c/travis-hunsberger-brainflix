import './PageHeader.scss';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/Icons/upload.svg";

function Header() {

    return (
        <>
        <header className="header">  
            {/* Mobile Header */}
            <div className="header__mobile-view">
                <div className="header__mobile-logo-container"> 
                    <Link to={"/"}>   
                        <img className="header__image" src={logo} alt="BrainFlix Logo"/>
                    </Link>
                </div>
                <div className="header__mobile-search-avatar-container"> 
                    <form className="header__mobile-form">
                        <input className="header__mobile-form-input" type="search" id="query" name="q" placeholder="Search"></input>
                    </form>
                    <img className="header__mobile-avatar" src={avatar} alt="avatar"/>
                </div>
                <Link to={"/upload"} className="header__mobile-link">
                    <button className="header__mobile-button">
                        <img className="header__mobile-button-image" src={upload} alt="upload icon"/>UPLOAD
                    </button>
                </Link>
            </div>

            {/* Tablet/Desktop Header */}
            <div className="header__tablet-desktop-view">
                <Link to={"/"}>   
                    <img className="header__image" src={logo} alt="BrainFlix Logo"/>
                </Link>
                <div className="header__tablet-desktop-item-container">
                    <form className="header__tablet-desktop-form">
                        <input className="header__tablet-desktop-form-input" type="search" id="query" name="q" placeholder="Search"></input>
                    </form>
                    <Link to={"/upload"}>
                        <button className="header__tablet-desktop-button">
                            <img className="header__tablet-desktop-button-image" src={upload} alt="upload icon"/>UPLOAD
                        </button>
                    </Link>
                    <img className="header__tablet-desktop-avatar" src={avatar} alt="avatar"/>
                </div>
            </div>
        </header>
        </>
    ) 
}

export default Header;