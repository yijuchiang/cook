import '@/assets/css/index.css'
import settingsSliders from "@/assets/images/settings-sliders.png"
import cheeseburger from "@/assets/images/cheeseburger.png"
import footer from "@/assets/images/footer.png"
import add from "@/assets/images/add.png"

const Home = () => {
  return (
   <>
   <div className='flex flex-col min-h-screen'>
      <div className="mt-7 mx-5">
        <header>
          <div className="flex justify-between">
            <h1 className="text-4xl font-lobster">Foodgo</h1>  
            <img className="w-14 h-14 object-cover rounded-xl" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
          </div>
          <p className="text-lg font-poppins mb-12">Order you favourite food!</p>
        </header>
        <search>
          <div className="flex gap-2 items-center mb-10">
            <div className="flex items-center flex-1 h-14 pl-4 py-4 gap-1 rounded-2xl shadow-[0_4px_19px_rgba(0,0,0,0.15)]">
              <i className="fa-solid fa-magnifying-glass "></i>
              <input className="" type="text" placeholder="Search"/>
            </div>
            <button className="w-14 h-14 relative bg-[#EF2A39] rounded-2xl">
              <img className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={settingsSliders} alt="" />
            </button>
          </div>
        </search>
        <nav>
          <div className="flex justify-around items-center h-12 mb-10">
            <div className="h-full px-7 flex items-center bg-[#EF2A39] text-white rounded-2xl shadow-[0_10px_18px_rgba(0,0,0,0.25)]">All</div>
            <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Hamburger</div>
            <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Salad</div>
            <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Drink</div>
          </div>
        </nav>
        <section className="flex-1">
          <div className="flex gap-5 flex-wrap">
            <div className="w-44 h-56 rounded-3xl shadow-[0_6px_17px_rgba(0,0,0,0.13)] relative">
              <img className="w-28 h-32 mx-auto" src={cheeseburger} alt="" />
              <div className='ml-3 text-base mb-2'>
                <span className='block font-bold'>Cheeseburger</span>
                <span className='block border-b'>Wendy's Burger</span>
              </div>
              <div className='w-11 h-5 ml-3 flex items-center justify-center'>
                <i className="fa-solid fa-star text-[#FFD43B]"></i>
                <span>4.9</span>
              </div>
              <i className="fa-regular fa-heart absolute bottom-4 right-3"></i>
            </div>
            <div className="w-44 h-56 rounded-3xl shadow-[0_6px_17px_rgba(0,0,0,0.13)] relative">
              <img className="w-28 h-32 mx-auto" src={cheeseburger} alt="" />
              <div className='ml-3 text-base mb-2'>
                <span className='block font-bold'>Cheeseburger</span>
                <span className='block border-b'>Wendy's Burger</span>
              </div>
              <div className='w-11 h-5 ml-3 flex items-center justify-center'>
                <i className="fa-solid fa-star text-[#FFD43B]"></i>
                <span>4.9</span>
              </div>
              <i className="fa-regular fa-heart absolute bottom-4 right-3"></i>
            </div>
            <div className="w-44 h-56 rounded-3xl shadow-[0_6px_17px_rgba(0,0,0,0.13)] relative">
              <img className="w-28 h-32 mx-auto" src={cheeseburger} alt="" />
              <div className='ml-3 text-base mb-2'>
                <span className='block font-bold'>Cheeseburger</span>
                <span className='block border-b'>Wendy's Burger</span>
              </div>
              <div className='w-11 h-5 ml-3 flex items-center justify-center'>
                <i className="fa-solid fa-star text-[#FFD43B]"></i>
                <span>4.9</span>
              </div>
              <i className="fa-regular fa-heart absolute bottom-4 right-3"></i>
            </div>
            <div className="w-44 h-56 rounded-3xl shadow-[0_6px_17px_rgba(0,0,0,0.13)] relative">
              <img className="w-28 h-32 mx-auto" src={cheeseburger} alt="" />
              <div className='ml-3 text-base mb-2'>
                <span className='block font-bold'>Cheeseburger</span>
                <span className='block border-b'>Wendy's Burger</span>
              </div>
              <div className='w-11 h-5 ml-3 flex items-center justify-center'>
                <i className="fa-solid fa-star text-[#FFD43B]"></i>
                <span>4.9</span>
              </div>
              <i className="fa-regular fa-heart absolute bottom-4 right-3"></i>
            </div>
          </div>
        </section>
      </div>   
      <footer>
        <div className="relative">
          <img className="w-full h-20" src={footer} alt="" />
          <div className="absolute inset-0 flex justify-around items-center text-2xl">
            <i className="fa-regular fa-house text-white"></i>
            <i className="fa-regular fa-user text-white"></i>
            <i className="fa-regular fa-comment text-white"></i>
            <i className="fa-solid fa-heart text-white"></i>
          </div>
        </div>
        <img className="w-24 h-24 fixed left-1/2 -translate-x-1/2 bottom-16" src={add} alt="" />
      </footer>
   </div>
   </>
  )
}

export default Home
