import '@/assets/css/index.css'
import settingsSliders from "@/assets/images/settings-sliders.png"

const Home = () => {
  return (
   <>
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
          <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Combos</div>
          <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Salad</div>
          <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Drink</div>
        </div>
      </nav>
      <section>
        <div className="bg-slate-500">hamburger</div>
      </section>
    </div>   
    <footer></footer>
   </>
  )
}

export default Home
