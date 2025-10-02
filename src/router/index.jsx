import { createBrowserRouter } from "react-router-dom";
import { Home, ProductDetail, NotFound } from "@/pages/index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/productDetail',
    element: <ProductDetail/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router