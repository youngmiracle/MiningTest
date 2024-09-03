import './authenticationSection.css'
import { Link } from 'react-router-dom';
import { AuthenticationContext, useContextAuthentication, RegistrationContext, useContextRegistration } from '../../../types/AuthenticationContext';
import LoginSection from '../../widgets/LoginSection/LoginSection';
import SwapModeButton from '../../widgets/SwapModeButton/SwapModeButton';
import RegistrationSection from '../../widgets/RegistrationSection/RegistrationSection';
import { Provider } from 'react-redux';
import { useState } from 'react';

interface AuthenticationSectionProps{
    className?: "AuthenticationSectionBackground" | "AuthenticationSectionBackground AuthenticationSectionBackgroundClose"  
}

const AuthenticationSection = ({className}: AuthenticationSectionProps) => {
    const [classRegistrationOpen, setClassRegistrationOpen] = useState<any>("");

    const {setClassAuthentication}: any = useContextAuthentication()

    return(
        <AuthenticationContext.Provider value={{classRegistrationOpen, setClassRegistrationOpen}}>
            <article className={className}>
                <section className='AuthenticationSection'>
                    <LoginSection/>
                    <SwapModeButton/>
                    <RegistrationSection className={classRegistrationOpen}/>
                </section>
                <div className="AuthenticationSection__btnBack">
                    <div className="btnBack__wand"></div>
                    <div className="btnBack__wand btnBack__wandSecond"></div>
                    <button className='btnBack__btn' onClick={() => setClassAuthentication("AuthenticationSectionBackgroundClose")}></button>
                </div>
            </article>
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationSection;