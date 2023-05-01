import React, { createContext, useState } from 'react';
export const SetContext = createContext()
const Mycontext = ({children}) => {
   const [open, setOpen] = useState("false");
   const [ins, setIns] = useState(null);
   const [active, setActive] = useState("home")
   const [pay, setPay] = useState("")
   const [download, setDownload] = useState([])
   const [cart, setCart] = useState([])
    const info = {
        open,
        ins,
        active,
        download,
        cart,
        pay,
        setOpen,
        setIns,
        setActive,
        setDownload,
        setCart,
        setPay
    }
    return (
        <SetContext.Provider value={info}>
            {children}
        </SetContext.Provider>
    );
};

export default Mycontext;