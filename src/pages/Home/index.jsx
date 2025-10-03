
const Home = () => {
  return (
   <>
    <div className="mt-7 mx-5">
      <div className="flex justify-between">
        <h1 className="bg-yellow-200 text-4xl font-lobster">Foodgo</h1>  
        <img className="w-14 h-14 object-cover rounded-xl" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
      </div>
      <p className="text-lg font-poppins mb-10">Order you favourite food!</p>
      <div className=" w-80 h-10 flex items-center rounded-2xl shadow-[0_4px_19px_0_rgba(0,0,0,0.25)]">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className=" " type="text" placeholder="Search"/>
      </div>
    </div>   
   </>
  )
}

export default Home
