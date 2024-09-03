import { useContext, createContext } from "react";

interface RegistrationContextProps{
    classRegistrationOpen?: string,
    setClassRegistrationOpen?: any,
}

export const RegistrationContext = createContext<RegistrationContextProps>({classRegistrationOpen: ""});
export const useContextRegistration = () => useContext(RegistrationContext);
