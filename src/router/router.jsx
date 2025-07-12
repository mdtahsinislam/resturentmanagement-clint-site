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
import PrivateRoute from "./PrivateRoute";
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
      element:<Allfoods></Allfoods>,
    },
    {
      path:"/singlefood",
      element:<Singlefood></Singlefood>,
    },
    {
      path:"/foodpurchase",
      element: (
          <PrivateRoute>
            <Foodpurchase />
          </PrivateRoute>
        ),
    },
    {
      path:"/gallery",
      element:<Gallery></Gallery>,
    },
    {
    path:"/myfood",
   element: (
          <PrivateRoute>
            <Myfood />
          </PrivateRoute>
        ),
    },
    {
     path:"/addfood" ,
     element: (
          <PrivateRoute>
            <Addfood />
          </PrivateRoute>
        ),
    },
    {
      path:"/myorder",
       element: (
          <PrivateRoute>
            <Myorder />
          </PrivateRoute>
        ),
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
