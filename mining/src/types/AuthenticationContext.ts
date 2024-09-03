import { useContext, createContext } from "react";

interface AuthenticationContextProps{
    classAuthentication?: string,
    setClassAuthentication?: any,
    classRegistrationOpen?: any,
    setClassRegistrationOpen?: any,
}

export const AuthenticationContext = createContext<AuthenticationContextProps>({classAuthentication: ""});

export const useContextAuthentication = () => useContext(AuthenticationContext)



export const RegistrationContext = createContext<AuthenticationContextProps>({classRegistrationOpen: ""});
export const useContextRegistration = () => useContext(RegistrationContext);
