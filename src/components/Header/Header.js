import './Header.scss';
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/Icons/upload.svg";

console.log(logo);

function Header() {

    return (
        <>
        <header className="header">     
            <img className="header__image" src={logo} alt="BrainFlix Logo"/>
            <div class="header__mobile-view">
                <div className="header__mobile-search-avatar-container"> 
                    <form className="header__mobile-form">
                        <input className="header__mobile-form-input" type="search" id="query" name="q" placeholder="Search"></input>
                    </form>
                    <img className="header__mobile-avatar" src={avatar}/>
                </div>
                <button className="header__mobile-button">
                    <img className="header__mobile-button-image" src={upload}/>UPLOAD
                </button>
            </div>
            <div class="header__tablet-desktop"></div>
        </header>
        </>
    )
    
}

export default Header;