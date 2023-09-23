import { createBrowserRouter } from "react-router-dom";
import { MainLayout, UserAuth } from "../../Layouts";
import { Home } from "../../Pages/Home";
import { Login, Register } from "../../Pages/UserAuth";

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
          path: "auth",
          element: <UserAuth />,
          children: [
               {
                    index: true,
                    path: "login",
                    element: <Login />
               },
               {
                    path: "login/register",
                    element: <Register />
               }
          ]
     }
]);