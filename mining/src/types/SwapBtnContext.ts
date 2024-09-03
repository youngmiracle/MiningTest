import { useContext, createContext } from "react";

interface SwapBtnContextProps{
    swapBtnClass?: string,
    setSwapBtnClass?: any,
    onClickSwapBtn?: any,
    setOnClickSwapBtn?: any
}

export const SwapBtnContext = createContext<SwapBtnContextProps>({swapBtnClass: ""});
export const useContextSwapBtn = () => useContext(SwapBtnContext);
