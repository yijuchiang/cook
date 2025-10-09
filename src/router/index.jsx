import { createBrowserRouter } from "react-router-dom";
import { Home, FoodDetail, NotFound } from "@/pages/index";
import Layout from "@/components/Layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
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
    ] 
  }
])

export default router