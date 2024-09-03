import ButtonLink from '../../shared/ButtonLink/ButtonLink';
import './registrationSection.css'
import { Link } from 'react-router-dom';
import { useContextAuthentication } from '../../../types/AuthenticationContext';
import SwapModeButton from '../SwapModeButton/SwapModeButton';
import { useContextSwapBtn } from '../../../types/SwapBtnContext'
import { Provider } from 'react-redux';
import { RegistrationContext } from '../../../types/RegistrationContext';
import { useState } from 'react';

interface RegistrationSectionProps{
    className?: string
}

const RegistrationSection = ({className}: RegistrationSectionProps) => {
    
    const {setClassAuthentication}: any = useContextAuthentication();

    return(
        <section className={`loginSection regZIndex ${className}`}>
            <h2 className='loginSection__title registrationSection__title'>Регистрация</h2>
            <form className='authenticationForm'>
               <div className="authenticationForm__atribute">
                    <label className='authenticationForm__label authenticationForm__labelRegistration'>Никнейм</label>
                    <input type="text" placeholder='#freeDurov' className='authenticationForm__input authenticationForm__inputReg'></input>
                </div>
                <div className="authenticationForm__atribute">
                    <label className='authenticationForm__label authenticationForm__labelRegistration'>Пароль</label>
                    <input type="text" placeholder='#freeDurov' className='authenticationForm__input authenticationForm__inputReg'></input>
                </div>
                <div className="authenticationForm__atribute">
                    <label className='authenticationForm__label authenticationForm__labelRegistration'>Потвердите пароль</label>
                    <input type="text" placeholder='#freeDurov' className='authenticationForm__input authenticationForm__inputReg'></input>
                </div>
            </form>
            <ButtonLink style={{height: "15%", margin: "0 auto", backgroundColor: "rgb(210, 210, 210)", color: "rgb(70, 70, 70)"}} className='levelLink' onClick={() => setClassAuthentication("AuthenticationSectionBackgroundClose")} text="Зарегистрироваться"></ButtonLink>
        </section>
    )
}

export default RegistrationSection;