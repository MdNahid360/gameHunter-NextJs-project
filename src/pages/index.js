import { Inter } from 'next/font/google'
import { FaShoppingCart } from 'react-icons/fa'

import MostPlay from '@/component/MostPlay/MostPlay'
import gm1 from '/public/image/game1.jpg'
import { useContext } from 'react'
import { SetContext } from '@/context/Mycontext'
import TitleText from '@/Hooks/title'
import Header from '@/component/Header/Header'
import InstallApp from '@/pages/InstallApp'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
         const {active, setActive,ins, setIns} = useContext(SetContext);
      
  return (
    <>
        <div className='m-auto mt-3'>
          <div className="col-span-3 overflow-y-scroll h-[100vh] px-4">
                         
             <section className="">
                  <Header />
                 {
                    active==="home"? <MostPlay /> : <></>
                 }
                 
                 <br />            
                     <TitleText title={active==="home" ? "ALl Game" : active} />
                 <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat id fugit, porro voluptatum, enim temporibus sunt nam, harum aliquam assumenda molestiae eos sed eum necessitatibus perferendis? Voluptatum asperiores ratione dolorum officiis dolorem aut quas architecto est facere, delectus minima illo a maiores odit tempore similique atque harum sint dignissimos reprehenderit alias beatae fugit consequatur aliquam. Amet nam adipisci alias. Reprehenderit saepe, quo nesciunt praesentium corporis alias provident fugit sit, ipsa nulla at, dignissimos dolores rerum eius accusamus beatae nostrum nam in deserunt laboriosam aspernatur. Distinctio totam officiis temporibus vero nisi aliquam soluta culpa eius sunt dicta magnam architecto corporis omnis enim quidem tempora, voluptate unde esse dolores dignissimos at neque iure quasi laboriosam. Eius cupiditate eum similique nulla magnam molestiae optio, numquam harum repellendus aut ducimus in, soluta mollitia fuga eligendi culpa omnis rerum odio accusantium natus laudantium laboriosam nemo reprehenderit tempora! Placeat delectus, eius reiciendis eos accusamus enim deleniti, fuga voluptas architecto rem reprehenderit quia earum dolor voluptatem unde explicabo. Recusandae, nisi ipsa! Natus totam, cupiditate, est alias dolorem ipsa deleniti cum exercitationem, pariatur vitae quibusdam? Rerum facere asperiores a sit, blanditiis facilis ratione dicta atque at voluptate eligendi nulla consequuntur quis ut quibusdam, praesentium vero exercitationem nesciunt esse expedita fugit tenetur eveniet culpa. Pariatur, tempora magnam amet dicta maiores reprehenderit atque repudiandae quos nemo consequatur deserunt incidunt consectetur aliquam neque accusantium dolore soluta vero repellendus aut sequi id ullam accusamus inventore. Nemo, consectetur autem, illo dolores voluptates doloribus similique soluta distinctio harum veritatis qui ipsam incidunt quidem delectus eligendi libero, in voluptas illum iste? Animi commodi saepe nulla cumque, omnis impedit assumenda beatae laborum. Laudantium nostrum reiciendis quisquam deserunt tempore necessitatibus adipisci, molestias reprehenderit ex cupiditate atque culpa officiis dolorum magni eos odio quas minima at suscipit ut numquam, est eligendi? Commodi quaerat quis mollitia? Fuga molestias velit consequatur numquam pariatur reiciendis debitis aliquid, ut magni eum iste quidem, sunt non eligendi enim obcaecati voluptas dignissimos accusantium. Iste nisi cum, facilis nesciunt, cumque doloribus esse id perferendis neque praesentium sed hic perspiciatis. Cupiditate magnam cumque dolor labore, et esse tempora ratione beatae distinctio maxime, dolore ea fuga nihil facere, corporis consequuntur odio ab soluta doloremque voluptate odit minus quia atque quo. Doloremque iusto mollitia laudantium fugiat deserunt nemo quis eaque provident. Aperiam illo officiis quisquam eius maxime cum odio fuga libero ab. Porro, mollitia, assumenda, esse ratione nisi quam voluptatum autem obcaecati totam tempora voluptate distinctio adipisci dolorum.
              </section>
          
          </div>
     </div>
    
    </>
  )
}
