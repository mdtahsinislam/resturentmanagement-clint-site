import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Allfoods from "../pages/Home/Allfoods";
import Singlefood from "../pages/Home/Singlefood";
import Foodpurchase from "../pages/Home/Foodpurchase";
import Gallery from "../pages/Home/Gallery";
import Myfood from "../pages/Home/Myfood";
import Addfood from "../pages/Home/Addfood";
import Myorder from "../pages/Home/Myorder";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import UpdateFood from "../pages/Home/UpdateFood";
const router = createBrowserRouter([
  {
    path: "/",
   // element: <div>Hello World</div>,
   Component:RootLayout,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path:"/allfoods",
      element:<Allfoods></Allfoods>
    },
    {
      path:"/singlefood",
      element:<Singlefood></Singlefood>
    },
    {
      path:"/foodpurchase",
      element:<Foodpurchase></Foodpurchase>
    },
    {
      path:"/gallery",
      element:<Gallery></Gallery>
    },
    {
    path:"/myfood",
    element:<Myfood></Myfood>
    },
    {
     path:"/addfood" ,
     element:<Addfood></Addfood>
    },
    {
      path:"/myorder",
      element:<Myorder></Myorder>
    },
    {
      path:"/singlefood/:id",
      element:<Singlefood />
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
  path: "/updatefood/:id",
  element: <UpdateFood />
}

   ]
  },
]);
export default router;
