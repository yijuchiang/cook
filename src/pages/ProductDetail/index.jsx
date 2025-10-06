import '@/assets/css/index.css'
import cheeseburger from "@/assets/images/cheeseburger.png"
import spicylineCheeseburger from "@/assets/images/spicyline-cheeseburger.png"
import { useState } from 'react';


const ProductDetail = () => {
  const [amount, setAmount] = useState(1)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mx-5">
        {/* top */}
        <div className=" mt-6 flex justify-between items-center h-7">
          <i className="fa-solid fa-arrow-left w-7"></i>
          <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
        </div>
        {/* pic */}
          <img className="w-80 h-80 mx-auto mb-12" src={cheeseburger} alt="" />
        <section>
          <h1 className="text-2xl font-bold mb-2">Cheeseburger Wendy's Burger</h1>
          <span className="block text-[#808080] mb-5">4.9 - 26 mins</span>
          <span className="block text-[#6A6A6A] leading-7 mb-7">The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.</span>
        </section>
        {/* choose */}
        <div className='h-16 flex justify-between items-center mb-16'>
          <img className="block w-40" src={spicylineCheeseburger} alt="" />
          <div>
            <span className='block text-xs mb-1'>Portion</span>
            <div className="flex gap-5">
              <button className='' onClick={() => setAmount(prev => Math.max(prev - 1, 1))}><i className="fa-solid fa-minus bg-[#EF2A39] text-white rounded-2xl w-10 h-10 flex items-center justify-center"></i></button>
              {amount}
              <button className='' onClick={() => setAmount(prev => prev + 1)}><i class="fa-solid fa-plus bg-[#EF2A39] text-white rounded-2xl w-10 h-10 flex items-center justify-center"></i></button>
            </div>
          </div>
        </div>
        {/* button */}
        <div className='flex justify-between items-center h-16 mb-9'>
          <span className="inline-block w-24 leading-[64px] text-center tracking-wider text-[#FFFFFF] bg-[#EF2A39] rounded-2xl">$8.24</span>
          <button className="w-60 h-full text-[#FFFFFF] bg-[#3C2F2F] rounded-2xl shadow-[0_9px_30px_rgba(0,0,0,0.25)]">ORDER NOW</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail