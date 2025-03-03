import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import NewsDetails from "../pages/newsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/news-details',
        element: <NewsDetails/>
      }
    ]
  }
])

export default router;