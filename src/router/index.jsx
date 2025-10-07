import { createBrowserRouter } from "react-router-dom";
import { Home, FoodDetail, NotFound } from "@/pages/index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/foodDetail',
    element: <FoodDetail/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router