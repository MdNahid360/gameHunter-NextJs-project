import Navigation from '@/component/Navigation'
import SideNav from '@/component/SideNav'
import Mycontext from '@/context/Mycontext';
import '@/styles/globals.css'
import Image from 'next/image';
import { useContext } from 'react'
import gm1 from '/public/image/game1.jpg'


export default function App({ Component, pageProps }) {

  return (
     <Mycontext>
        <Navigation />
        <div className="flex h-[100vh]">
            <div className="h-[100vh] border-r border-[#8080808e]">
               <SideNav />
            </div>
            <div className="w-full overflow-y-scroll ">
                <div className="">
                    <Component {...pageProps} />
                </div>
            </div>
            <div className="md:block hidden py-2 px-3">
                 <h3 className="font-bold">
                    Free Games
               </h3>
               <ul className="mt-4">
                    <li className="flex items-center gap-3 mt-6">
                         <Image src={gm1} className='w-[90px] h-[110p]' />
                         <span>
                              <h3 className=""> Stray Game PS5 72336 1920x x, ps5 </h3>

                         </span>
                    </li>
                    <li className="flex items-center gap-3 mt-6">
                         <Image src={gm1} className='w-[90px] h-[110p]' />
                         <span>
                              <h3 className=""> Stray Game PS5 72336 1920x x, ps5 </h3>

                         </span>
                    </li>
                    <li className="flex items-center gap-3 mt-6">
                         <Image src={gm1} className='w-[90px] h-[110p]' />
                         <span>
                              <h3 className=""> Stray Game PS5 72336 1920x x, ps5 </h3>

                         </span>
                    </li>
                    <li className="flex items-center gap-3 mt-6">
                         <Image src={gm1} className='w-[90px] h-[110p]' />
                         <span>
                              <h3 className=""> Stray Game PS5 72336 1920x x, ps5 </h3>

                         </span>
                    </li>
                    <li className="flex items-center gap-3 mt-6">
                         <Image src={gm1} className='w-[90px] h-[110p]' />
                         <span>
                              <h3 className=""> Stray Game PS5 72336 1920x x, ps5 </h3>

                         </span>
                    </li>
                    <li className="flex items-center gap-3 mt-6">
                         <Image src={gm1} className='w-[90px] h-[110p]' />
                         <span>
                              <h3 className=""> Stray Game PS5 72336 1920x x, ps5 </h3>

                         </span>
                    </li>
               </ul>
            </div>
    </div>
     </Mycontext>
  )
}
