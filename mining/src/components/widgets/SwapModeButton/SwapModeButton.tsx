import { useContextAuthentication } from '../../../types/AuthenticationContext';
import './swapModeButton.css'
import { useState } from 'react';

type swapModeClass = "swapModeBtn" | "swapModeBtn swapModeBtnClose" | "swapBtn__wand swapBtn__wandNoneClose" | "swapModeBtn swapModeBtnOpen" | "swapBtn__wand swapBtn__wandNone" | "swapBtn__wand"


const SwapModeButton = () => {
    const [swapWandClass, setSwapWandClass] = useState<swapModeClass>("swapBtn__wand")
    const [swapBtnClass, setSwapBtnClass] = useState<swapModeClass>("swapModeBtn")
    const {setClassRegistrationOpen}: any = useContextAuthentication()

    const swapClass = () => {
        if(swapBtnClass == "swapModeBtn"){
            setSwapBtnClass("swapModeBtn swapModeBtnOpen");
            setSwapWandClass("swapBtn__wand swapBtn__wandNone")
            setClassRegistrationOpen("registrationSection")
        }else if(swapBtnClass == "swapModeBtn swapModeBtnOpen")
        {
            setClassRegistrationOpen("registrationSection registrationSectionClose")
            setSwapBtnClass("swapModeBtn swapModeBtnClose");
            setSwapWandClass("swapBtn__wand swapBtn__wandNoneClose")
        }else if(swapBtnClass == "swapModeBtn swapModeBtnClose"){
            setClassRegistrationOpen("registrationSection")
            setSwapBtnClass("swapModeBtn swapModeBtnOpen");
            setSwapWandClass("swapBtn__wand swapBtn__wandNone")
        }
        
    }

    return(
        <button className={swapBtnClass} onClick={swapClass}>
            <div className={swapWandClass}></div>
            <div className={`${swapWandClass} swapBtn__wandSecond`}></div>
        </button>
    )
}

export default SwapModeButton;