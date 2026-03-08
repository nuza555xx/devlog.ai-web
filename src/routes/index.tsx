import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../components/layout/PublicLayout";
import { AppLayout } from "../components/layout/AppLayout";
import { AuthGuard } from "../components/auth/AuthGuard";
import { SignInPage } from "../pages/public/SignInPage";
import { CreateAccountPage } from "../pages/public/CreateAccountPage";
import { WelcomePage } from "../pages/public/WelcomePage";
import { WorkLogPage } from "../pages/app/WorkLogPage";
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
  {
    element: <AuthGuard />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/dashboard",
            element: <div className="text-gray-500">Dashboard — coming soon</div>,
          },
          {
            path: "/worklog",
            element: <WorkLogPage />,
          },
          {
            path: "/knowledge",
            element: <div className="text-gray-500">Knowledge — coming soon</div>,
          },
          {
            path: "/timeline",
            element: <div className="text-gray-500">Timeline — coming soon</div>,
          },
          {
            path: "/insights",
            element: <div className="text-gray-500">Insights — coming soon</div>,
          },
        ],
      },
    ],
  },
]);
