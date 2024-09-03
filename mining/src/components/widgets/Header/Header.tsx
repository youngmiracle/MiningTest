import './header.css'
import { Link, Outlet } from 'react-router-dom';
import Resource from '../../../types/Resource';
import { useState, useContext } from 'react';
import ButtonLink from '../../shared/ButtonLink/ButtonLink';
import { useContextAuthentication } from '../../../types/AuthenticationContext';

const Header = () => {
    const [scrollClass, setScrollClass] = useState <string>(""); //state на скролл
    
    //скрипт для скролла, когда скроллится до определённых px появляется background.
    window.addEventListener('scroll', () => {
        const scroll: number = window.scrollY;
        if(scroll >= 100){
            setScrollClass("headerScroll");
        }else{
            setScrollClass("headerScrollBack");
        }
      }
    ); 
    
    const {setClassAuthentication}: any = useContextAuthentication()

    return(
    <>
        <header className={scrollClass}>
            <Link to="/"><img src={Resource.logoImg} alt="Logo" className='header__logo'/></Link>
            <nav className='header__nav'>
                <ButtonLink onClick={() => setClassAuthentication("AuthenticationSectionBackground")} text="Войти" className='header__link'/>
            </nav> 
        </header>
        <Outlet/>
    </>
    )
}

export default Header;