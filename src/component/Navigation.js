import { SetContext } from '@/context/Mycontext';
import React, { useContext } from 'react';
import { AiOutlineBell, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
const Navigation = () => {
    const {open, setOpen} = useContext(SetContext)
 
    return (
        <div className="">
          <div className="py-3 mx-auto md:pl-14 md:pr-12 px-3 flex justify-between border-b border-[#23405993]">         
              <div className="flex items-center md:gap-4 gap-2">
                   <div className={` w-[40px] border  border-[0]'} rounded-full md:text-2xl  md:w-[50px] md:h-[50px] flex items-center overflow-hidden justify-center  h-[40px] text-lg`}>
                        G
                        </div>
                    <div className="bg-[#333342db] py-2  rounded-xl px-2 w-[300px] md:flex hidden items-center gap-2">
                            <AiOutlineSearch className='text-2xl text-[#b7b7b7]'/>
                            <input type="text" className="w-full h-full bg-[#21395f00] outline-none" placeholder='Search...'/>
                    </div>
              </div>
           
               <ul className="flex items-center gap-3">
                                      
                    <li className="flex items-center justify-center bg-[#4c008277] rounded-xl w-[40px] h-[40px] cursor-pointer buy-shadow duration-200">
                        <AiOutlineShoppingCart className='text-2xl text-[#8128ff]' />
                    </li>

                     <li className="flex items-center justify-center bg-[#ff16874e] rounded-xl w-[40px] h-[40px] cursor-pointer notification-shadow duration-200">
                        <AiOutlineBell className='text-2xl text-[#ff36a8]' />
                    </li>
                 
                    <li className="hidden items-center justify-center bg-[#4c008277] rounded-xl w-[40px] h-[40px] cursor-pointer buy-shadow duration-200 ">
                        
                    </li>
                    
                   
                    <li className="">
                        <button className="flex items-center justify-center bg-[#4c008277] rounded-lg w-[80px] h-[40px] cursor-pointer duration-200">Login</button>
                    </li>
                    
                    <li className="md:hidden block">
                        <button onClick={()=> setOpen(!open)} className="flex items-center justify-center bg-[#4c008277] rounded-lg w-[40px] h-[40px] cursor-pointer duration-200">
                            <HiMenu className='text-2xl'/>
                        </button>
                    </li>
               </ul>
          </div>
        </div>
    );
};

export default Navigation;