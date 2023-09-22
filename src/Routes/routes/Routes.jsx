import { createBrowserRouter } from "react-router-dom";
import { MainLayout, UserAuth } from "../../Layouts";
import { Home } from "../../Pages/Home";
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
          path: "/auth/login",
          element: <UserAuth />,
          children: [
               {
                    index: true,
                    element: <Login />
               }
          ]
     }
]);