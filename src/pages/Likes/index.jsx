import { useNavigate } from 'react-router-dom'
import { useLikesStore } from "@/store/useLikesStore"
import FoodCard from '@/components/FoodCard'
import { getImageSrc } from '@/utils/getImageSrc'


const Likes = () => {
  const navigate = useNavigate()
  const { likes } = useLikesStore();
  console.log(likes);
  if (!likes?.length) {
    return (
      <p className="text-center text-gray-400">No favorite dishes yet!!</p>
    );
  }

  return (
    <div className="gap-3 grid grid-cols-2">
      
      {likes.map((item) =>
        <FoodCard key={item.id} id={item.id} title1={item.title1} title2={item.title2} image={getImageSrc(item.image)} pop={item.pop} onClick={() => navigate(`/foodDetail/${item.id}`)}/>
      )}
    </div>
  )
}

export default Likes 
