import Link from 'next/link';
import React, { useContext } from 'react';
import { TiHome } from "react-icons/ti";
import { MdDirectionsBike } from "react-icons/md";
import { GiHelicopter,GiSoccerBall } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa";
import { SetContext } from '@/context/Mycontext';
import { useRouter } from 'next/router';
const SideNav = () => {
    const {open, active, setActive, } = useContext(SetContext)
    const router = useRouter();
    return (
        <div className={`${open ? 'w-[0px] md:w-[70px]' : 'md:w-[100px] w-[63px]'} duration-200 h-full py-[7px] overflow-hidden`} align="">
            <ul className="m-auto ">
                <li className={`${active === "home" ? 'bg-[#009dffdb] activeLink' : ''}  relative m-auto rounded-xl overflow-hidden flex items-center justify-center h-[45px] w-[45px] mt-2`}>
                    <Link href="/" onClick={()=> {
                        setActive("home")
                    }} className={`absolute top-0 left-0 
                     right-0 bottom-0 text-xl m-auto flex items-center justify-center`}>
                        <TiHome className='text-2xl'/>
                    </Link>
                </li>
                <li className={`${active === "racing" ? 'bg-[#009dffdb] activeLink' : ''}  relative m-auto rounded-xl overflow-hidden flex items-center justify-center h-[45px] w-[45px] mt-8`}>
                    <Link href="/" onClick={()=> setActive("racing")}  className={`absolute top-0 left-0 
                     right-0 bottom-0 text-xl m-auto flex items-center justify-center`}>
                        <MdDirectionsBike className='text-2xl'/>
                    </Link>
                </li>
                <li className={`${active === "action" ? 'bg-[#009dffdb] activeLink' : ''}  relative m-auto rounded-xl overflow-hidden flex items-center justify-center h-[45px] w-[45px] mt-8`}>
                    <Link href="/" onClick={()=> setActive("action")} className='bg-[#0040ff00] absolute top-0 left-0 
                     right-0 bottom-0 text-xl m-auto flex items-center justify-center'>
                        <GiHelicopter className='text-3xl'/>
                    </Link>
                </li>
                <li className={`${active === "board" ? 'bg-[#009dffdb] activeLink' : ''}  relative m-auto rounded-xl overflow-hidden flex items-center justify-center h-[45px] w-[45px] mt-8`}>
                    <Link href="/" onClick={()=> setActive("board")} className='bg-[#0040ff00] absolute top-0 left-0 
                     right-0 bottom-0 text-xl m-auto flex items-center justify-center'>
                        <FaChessKnight className='text-xl'/>
                    </Link>
                </li>
                <li className={`${active === "sports" ? 'bg-[#009dffdb] activeLink' : ''}  relative m-auto rounded-xl overflow-hidden flex items-center justify-center h-[45px] w-[45px] mt-8`}>
                    <Link href="/" onClick={()=> setActive("sports")} className='bg-[#0040ff00] absolute top-0 left-0 
                     right-0 bottom-0 text-xl m-auto flex items-center justify-center'>
                        <GiSoccerBall className='text-2xl'/>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;