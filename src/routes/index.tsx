import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../components/layout/PublicLayout";
import { SignInPage } from "../pages/public/SignInPage";
import { CreateAccountPage } from "../pages/public/CreateAccountPage";
import { WelcomePage } from "../pages/public/WelcomePage";
import { RouteErrorPage } from "../pages/RouteErrorPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <CreateAccountPage />,
      },
    ],
  },
]);
