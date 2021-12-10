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
            <div class="header__mobile-header">
            <div className="header__search-avatar-container"> 
                <form className="header__form">
                    <input className="header__form-input" type="search" id="query" name="q" placeholder="Search"></input>
                </form>
                <img className="header__mobile-avatar" src={avatar}/>
            </div>
            <button className="header__button">
                <img className="header__button-image" src={upload}/>UPLOAD
            </button>
            </div>
        </header>
        </>
    )
    
}

export default Header;