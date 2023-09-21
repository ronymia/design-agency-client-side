import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import { Login } from "../../Pages/UserAuth";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout />,
          children: [
               {
                    path: "/",
                    element: <Home />
               }
          ]
     },
     {
          path: "/login",
          element: <Login />
     }
]);