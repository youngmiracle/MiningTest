import ButtonLink from '../../shared/ButtonLink/ButtonLink';
import './loginSection.css'
import { Link } from 'react-router-dom';
import { useContextAuthentication } from '../../../types/AuthenticationContext';

const LoginSection = () => {
    const {setClassAuthentication} = useContextAuthentication()

    return(
        <section className='loginSection'>
            <h2 className='loginSection__title'>Войти</h2>
            <form className='authenticationForm'>
                <div className="authenticationForm__atribute">
                    <label className='authenticationForm__label'>Никнейм</label>
                    <input type="text" placeholder='#freeDurov' className='authenticationForm__input'/>
                </div>
                <div className="authenticationForm__atribute">
                    <label className='authenticationForm__label'>Пароль</label>
                    <input type="text" placeholder='#freeDurov' className='authenticationForm__input'></input>
                </div>
            </form>
            <ButtonLink style={{height: "15%", margin: "0 auto", backgroundColor: "rgb(55, 55, 55)"}} className='levelLink' onClick={() => setClassAuthentication("AuthenticationSectionBackgroundClose")} text="Войти"></ButtonLink>
        </section>
    )
}

export default LoginSection;