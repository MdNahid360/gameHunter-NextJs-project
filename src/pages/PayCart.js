import { SetContext } from '@/context/Mycontext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import paypal from '../../public/image/paypal.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PayCart = () => {
    const {pay} = useContext(SetContext);
    const [code, setCode] = useState("");
    const router = useRouter();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (code === "1234567890") {
             router.back();
             pay.category = "ordered"
        }
    }
    return (
        <form onClick={handleSubmit} className="py-12">
           {
            pay ?  <div className="cart bg-[#191d29] rounded md:w-[500px] w-[97%] m-auto p-3">
               <div className="flex gap-3">
                    <Image className="w-[60px] border p-2 rounded border-[blue]" src={pay?.pic} /> <h2 className="font-bold text-lg">{pay?.title}</h2>
               </div><br />
                <div className="bg-[#26344700] border border-[#0000ff70] py-2 rounded mt-3 relative">
                    <div className="absolute top-[-10px] bg-[#191d29] z-[100] w-[80px] ml-2 h-[20px]">
                        <Image className="w-[80px]  " src={paypal}/> 
                    </div>
                    <input onChange={(e)=> setCode(e.target.value)} name="payCode" type="text" className="bg-[#26344700] px-2 outline-none w-full h-ful " placeholder="code..." />
                    
                </div>
                <input  type="submit" className="bg-[#1a2745] w-full py-2 mt-4 rounded cursor-pointer" value="Orderd"/>
           </div> : <div align="center">
               <h1 className="font-bold text-center text-lg">Not Found App</h1><br />
               <Link href="/" className='bg-[#14008276] rounded px-3 py-2'>Go to home</Link>
           </div>
           }
        </form>
    );
};

export default PayCart;