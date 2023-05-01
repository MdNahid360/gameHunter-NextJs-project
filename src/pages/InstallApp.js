import AppItem from '@/component/AppItem/AppItem';
import { SetContext } from '@/context/Mycontext';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { FaAngleLeft, FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { MdForkLeft } from 'react-icons/md';

const InstallApp = () => {      
     const {download, cart, setCart} = useContext(SetContext);
     const router = useRouter()
    console.log(cart);
     
    return (
        <div>
            <div className="">
                <button title='go back' onClick={()=> router.back()} className="px-3 py-2 bg-[#23236b8d] m-5 rounded"><FaArrowLeft className='text-lg'/></button>
            </div>
            <h1>install now... {cart.length}</h1>
            {
                cart?.map(md => <AppItem key={md.id} data={md}/>)
            }
        </div>
    );
};

export default InstallApp;  