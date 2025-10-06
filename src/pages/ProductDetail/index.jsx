import '@/assets/css/index.css'
import cheeseburger from "@/assets/images/cheeseburger.png"


const ProductDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mx-5">
        {/* top */}
        <div className=" mt-6 flex justify-between items-center h-7">
          <i className="fa-solid fa-arrow-left w-7"></i>
          <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
        </div>
        {/* pic */}
          <img className="w-[350px] h-[355] mx-auto mb-12" src={cheeseburger} alt="" />
        <section>
          <h1 className="text-2xl font-bold mb-2">Cheeseburger Wendy's Burger</h1>
          <span className="block text-[#808080] mb-5">4.9 - 26 mins</span>
          <span className="block text-[#6A6A6A] leading-7 mb-7">The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.</span>
        </section>
        {/* choose */}
        <div className='h-16 flex justify-between bg-slate-400 mb-[73px]'>
          <div className=''> </div>
          <div className=''> </div>
        </div>
        {/* button */}
        <div className='h-[70px] bg-yellow-400'>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail